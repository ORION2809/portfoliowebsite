/** @type {import('next').NextConfig} */
const repoName = "portfoliowebsite";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    output: 'export',
    basePath: isProd ? `/${repoName}` : "",
    assetPrefix: isProd ? `/${repoName}/` : "",
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "",
    },
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    // Ensure proper handling of client-side navigation
    experimental: {
        scrollRestoration: true
    }
};

export default nextConfig;