/** @type {import('next').NextConfig} */
const nextConfig = {
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
  // Solución para el error de uv_interface_addresses
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

