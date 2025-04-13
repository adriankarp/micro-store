const { STOREFRONT_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@micro-store/ui"],
  async rewrites() {
    return [
      {
        source: "/storefront",
        destination: `${STOREFRONT_URL}/`,
      },
      {
        source: "/storefront/:path*",
        destination: `${STOREFRONT_URL}/:path*`,
      },
      {
        source: "/storefront-static/:path*",
        destination: `${STOREFRONT_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
