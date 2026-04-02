import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.852featin.com",
        pathname: "/new/wp-content/uploads/**",
      },
    ],
  },
}

export default nextConfig
