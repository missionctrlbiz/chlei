import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'communitylinks.org.ng',
            },
        ],
    },
};

export default nextConfig;
