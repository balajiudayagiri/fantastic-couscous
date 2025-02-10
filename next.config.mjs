/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic Configuration
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Compiler Options
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledComponents: true,
  },

  // Image Optimization
  images: {
    domains: ["balajiudayagiri.vercel.app"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Experimental Features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@b/components"],
    // serverActions: true,
    typedRoutes: true,
    webVitalsAttribution: ["CLS", "LCP", "FCP", "FID", "TTFB"],
  },

  // Headers Configuration
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects Configuration
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Optimize CSS
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        styles: {
          name: "styles",
          test: /\.(css|scss)$/,
          chunks: "all",
          enforce: true,
        },
      };
    }

    return config;
  },
};

export default nextConfig;
