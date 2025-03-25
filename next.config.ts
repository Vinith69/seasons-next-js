import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ["drive.google.com"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "seasons.jdprojects.in",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
