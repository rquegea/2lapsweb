import type { NextConfig } from "next";

const nextConfig: NextConfig = {
//   turbopack: {
//     root: __dirname,
//   },
  // Exportación estática para hosting sin servidor (p.ej., GSuite / Sites)
  output: "export",
  // Útil en hosting estático para resolver directorios a index.html
  trailingSlash: true,
  images: {
    // Permitir SVGs en <Image />
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Evita el optimizador de imágenes del servidor en export estático
    unoptimized: true,
  },
};

export default nextConfig;
