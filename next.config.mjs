const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = isGitHubPages && repositoryName ? `/${repositoryName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    ...(basePath
        ? {
            basePath,
            assetPrefix: `${basePath}/`,
        }
        : {}),
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    // Ensure proper handling of client-side navigation
    experimental: {
        scrollRestoration: true
    }
};

export default nextConfig;
