const PALETTE = [
    "#0ea5e9",
    "#22c55e",
    "#f97316",
    "#a855f7",
    "#06b6d4",
    "#f59e0b",
    "#ef4444",
    "#3b82f6",
    "#10b981",
    "#8b5cf6",
];

function hashDomain(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
    }
    return hash;
}

export function makeLocalFavicon(domain: string, size = 64) {
    const cleaned = domain.replace(/^https?:\/\//, "").replace(/^www\./, "");
    const letter = cleaned[0]?.toUpperCase() ?? "?";
    const bg = PALETTE[hashDomain(cleaned) % PALETTE.length];
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='${bg}'/><text x='50%' y='55%' text-anchor='middle' font-family='Arial, sans-serif' font-size='28' fill='%23fff' font-weight='700'>${letter}</text></svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
