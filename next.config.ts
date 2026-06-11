import type { NextConfig } from "next"

/**
 * Static-export configuration.
 *
 * `output: "export"` emits a fully static site into `out/` (no Node server),
 * which is what we deploy to Vercel. `images.unoptimized` is required because
 * the Next.js image optimizer needs a runtime that a static export does not have.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
