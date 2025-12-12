"use client";
import React, { useCallback, useMemo, useState } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ParsedRow = Record<string, string | number | null>;

type Dataset = {
  id: string;
  name: string;
  rows: ParsedRow[];
  columns: string[];
};

type ChartType = "line" | "bar";

function generateId(): string {
  return Math.random().toString(36).slice(2, 9);
}

function normalizeHeader(header: string): string {
  return header?.trim();
}

function detectNumericColumns(rows: ParsedRow[], columns: string[]): string[] {
  return columns.filter((col) => {
    let numericCount = 0;
    let total = 0;
    for (let i = 0; i < Math.min(rows.length, 50); i++) {
      const v = rows[i]?.[col];
      if (v === null || v === undefined || v === "") continue;
      total++;
      const num =
        typeof v === "number"
          ? v
          : typeof v === "string"
          ? Number(String(v).replace(/[,%\s]/g, ""))
          : NaN;
      if (!Number.isNaN(num)) numericCount++;
    }
    return total > 0 && numericCount / total >= 0.7;
  });
}

function coerceNumbers(rows: ParsedRow[], numericCols: string[]): ParsedRow[] {
  return rows.map((r) => {
    const copy: ParsedRow = { ...r };
    for (const c of numericCols) {
      const v = copy[c];
      if (typeof v === "number") continue;
      if (typeof v === "string") {
        const n = Number(v.replace(/[,%\s]/g, ""));
        copy[c] = Number.isFinite(n) ? n : null;
      } else {
        copy[c] = null;
      }
    }
    return copy;
  });
}

async function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => resolve(String(reader.result));
    reader.readAsText(file);
  });
}

async function parseCSV(file: File): Promise<Dataset> {
  const text = await readFileAsText(file);
  return new Promise((resolve, reject) => {
    Papa.parse(text, {
      header: true,
      dynamicTyping: false,
      skipEmptyLines: true,
      complete: (result) => {
        const rows = (result.data as any[]).map((row) => {
          const normalized: ParsedRow = {};
          Object.keys(row || {}).forEach((k) => {
            normalized[normalizeHeader(k)] = row[k];
          });
          return normalized;
        });
        const columns = Object.keys(rows[0] || {});
        resolve({
          id: generateId(),
          name: file.name,
          rows,
          columns,
        });
      },
      error: reject,
    });
  });
}

async function parseExcel(file: File): Promise<Dataset> {
  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data);
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  const json = XLSX.utils.sheet_to_json(worksheet, { defval: "" }) as any[];
  const rows: ParsedRow[] = json.map((row) => {
    const normalized: ParsedRow = {};
    Object.keys(row || {}).forEach((k) => {
      normalized[normalizeHeader(k)] = row[k];
    });
    return normalized;
  });
  const columns = Object.keys(rows[0] || {});
  return {
    id: generateId(),
    name: `${file.name} • ${firstSheetName}`,
    rows,
    columns,
  };
}

async function parseFile(file: File): Promise<Dataset> {
  const name = file.name.toLowerCase();
  if (name.endsWith(".csv")) return parseCSV(file);
  if (name.endsWith(".xlsx") || name.endsWith(".xls")) return parseExcel(file);
  try {
    return await parseCSV(file);
  } catch {
    return parseExcel(file);
  }
}

function Summary({ rows, yKey }: { rows: ParsedRow[]; yKey: string }) {
  const stats = useMemo(() => {
    const values = rows
      .map((r) => r[yKey])
      .filter((v): v is number => typeof v === "number" && Number.isFinite(v));
    const total = values.reduce((a, b) => a + b, 0);
    const avg = values.length ? total / values.length : 0;
    const min = values.length ? Math.min(...values) : 0;
    const max = values.length ? Math.max(...values) : 0;
    const growth =
      values.length >= 2 && values[0] !== 0
        ? ((values[values.length - 1] - values[0]) / Math.abs(values[0])) * 100
        : 0;
    return { total, avg, min, max, growth };
  }, [rows, yKey]);

  const fmt = (n: number) =>
    new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }).format(n);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
      <div className="p-3 rounded-lg bg-zinc-50 text-zinc-700">
        <div className="text-xs font-semibold">Total</div>
        <div className="text-lg font-semibold">{fmt(stats.total)}</div>
      </div>
      <div className="p-3 rounded-lg bg-zinc-50 text-zinc-700">
        <div className="text-xs font-semibold">Media</div>
        <div className="text-lg font-semibold">{fmt(stats.avg)}</div>
      </div>
      <div className="p-3 rounded-lg bg-zinc-50 text-zinc-700">
        <div className="text-xs font-semibold">Mín</div>
        <div className="text-lg font-semibold">{fmt(stats.min)}</div>
      </div>
      <div className="p-3 rounded-lg bg-zinc-50 text-zinc-700">
        <div className="text-xs font-semibold">Máx</div>
        <div className="text-lg font-semibold">{fmt(stats.max)}</div>
      </div>
      <div className="p-3 rounded-lg bg-zinc-50 text-zinc-700">
        <div className="text-xs font-semibold">Crecimiento</div>
        <div className={`text-lg font-semibold ${Math.sign(stats.growth) >= 0 ? "text-green-600" : "text-red-600"}`}>
          {fmt(stats.growth)}%
        </div>
      </div>
    </div>
  );
}

export default function EnterpriseIntelligenceDashboard() {
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = useMemo(
    () => datasets.find((d) => d.id === (activeId ?? datasets[0]?.id)),
    [datasets, activeId]
  );

  const [xKey, setXKey] = useState<string>("");
  const [yKey, setYKey] = useState<string>("");
  const [chart, setChart] = useState<ChartType>("line");

  const onFiles = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const parsed = await Promise.all(Array.from(files).map((f) => parseFile(f)));
    setDatasets((prev) => {
      const next = [...prev, ...parsed];
      if (!activeId && next[0]) setActiveId(next[0].id);
      return next;
    });
  }, [activeId]);

  const onDrop = useCallback(
    async (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      await onFiles(e.dataTransfer.files);
    },
    [onFiles]
  );

  const onBrowse = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      await onFiles(e.target.files);
      e.currentTarget.value = ""; // permite re-seleccionar el mismo fichero
    },
    [onFiles]
  );

  const numericColumns = useMemo(() => {
    if (!active) return [];
    return detectNumericColumns(active.rows, active.columns);
  }, [active]);

  const coercedRows = useMemo(() => {
    if (!active) return [];
    const nums = new Set(numericColumns);
    return coerceNumbers(active.rows, [...nums]);
  }, [active, numericColumns]);

  React.useEffect(() => {
    if (!active) return;
    if (!xKey && active.columns.length) setXKey(active.columns[0]);
    if (!yKey && numericColumns.length) setYKey(numericColumns[0]);
  }, [active, xKey, yKey, numericColumns]);

  return (
    <div className="container-v2">
      <div className="pt-20 pb-8 text-center">
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          Enterprise Intelligence
        </div>
        <h1
          className="text-4xl md:text-6xl font-medium text-zinc-900 mb-4"
          style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
        >
          Convierte tus documentos en decisiones
        </h1>
        <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
          Sube informes, hojas de cálculo o CSVs. Visualiza ventas, estudios y KPIs al instante.
          Tus datos nunca salen del navegador.
        </p>
      </div>

      <div
        onDragOver={(e) => { e.preventDefault(); }}
        onDrop={onDrop}
        className="border-2 border-dashed border-zinc-200 rounded-2xl p-8 md:p-10 bg-white shadow-sm text-center mb-8"
      >
        <div className="text-zinc-800 font-semibold text-lg">Arrastra y suelta archivos</div>
        <div className="text-zinc-500 text-sm mt-1">CSV, XLSX o XLS • Todo se procesa localmente</div>
        <div className="mt-5">
          <label className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-white font-semibold cursor-pointer hover:bg-primary-hover active:scale-95 transition">
            <input type="file" accept=".csv,.xlsx,.xls" multiple className="hidden" onChange={onBrowse} />
            Añadir documentos
          </label>
        </div>
      </div>

      {datasets.length > 0 && (
        <div className="mb-6 overflow-x-auto">
          <div className="flex items-center gap-2">
            {datasets.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveId(d.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border ${active?.id === d.id ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50"}`}
                title={d.name}
              >
                {d.name.length > 24 ? d.name.slice(0, 24) + "…" : d.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {active && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 p-5 rounded-xl bg-white border border-zinc-100 shadow-sm h-fit sticky top-24">
            <div className="font-semibold text-zinc-900 mb-3">Configuración</div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-500 mb-1">Columna X</label>
                <select
                  value={xKey}
                  onChange={(e) => setXKey(e.target.value)}
                  className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {active.columns.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-500 mb-1">Columna Y</label>
                <select
                  value={yKey}
                  onChange={(e) => setYKey(e.target.value)}
                  className="w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {numericColumns.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2">
                <button
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium border ${chart === "line" ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-700 border-zinc-200"}`}
                  onClick={() => setChart("line")}
                >
                  Línea
                </button>
                <button
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium border ${chart === "bar" ? "bg-zinc-900 text-white border-zinc-900" : "bg-white text-zinc-700 border-zinc-200"}`}
                  onClick={() => setChart("bar")}
                >
                  Barras
                </button>
              </div>
            </div>
            {yKey && (
              <div className="mt-6">
                <Summary rows={coercedRows} yKey={yKey} />
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="p-5 rounded-xl bg-white border border-zinc-100 shadow-sm h-[380px]">
              <div className="text-sm font-semibold text-zinc-700 mb-3">
                {chart === "line" ? "Gráfico de líneas" : "Gráfico de barras"}
              </div>
              <div className="w-full h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                  {chart === "line" ? (
                    <LineChart data={coercedRows}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                      <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey={yKey} stroke="#ef4444" strokeWidth={2} dot={false} />
                    </LineChart>
                  ) : (
                    <BarChart data={coercedRows}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                      <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey={yKey} fill="#ef4444" />
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
              <div className="text-sm font-semibold text-zinc-700 mb-3">Vista previa de datos</div>
              <div className="overflow-auto">
                <table className="min-w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      {active.columns.map((c) => (
                        <th key={c} className="text-left font-semibold text-zinc-600 border-b border-zinc-200 px-3 py-2 whitespace-nowrap">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {coercedRows.slice(0, 30).map((row, idx) => (
                      <tr key={idx} className="border-b border-zinc-100">
                        {active.columns.map((c) => (
                          <td key={c} className="px-3 py-2 text-zinc-700 whitespace-nowrap">
                            {typeof row[c] === "number" ? (row[c] as number).toLocaleString() : String(row[c] ?? "")}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-xs text-zinc-500 mt-2">
                Mostrando {Math.min(30, coercedRows.length)} de {coercedRows.length} filas
              </div>
            </div>
          </div>
        </div>
      )}

      {datasets.length === 0 && (
        <div className="text-center text-zinc-500 text-sm mb-12">
          Aún no has subido documentos. Empieza con un CSV de ventas o un Excel de estudios.
        </div>
      )}
    </div>
  );
}





