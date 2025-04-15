const { STOREFRONT_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@micro-store/ui"],
  async rewrites() {
    return [
      {
        source: "/",
        destination: `${STOREFRONT_URL}/`,
      },
      {
        source: "/:path*",
        destination: `${STOREFRONT_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
