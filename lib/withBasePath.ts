const isExternalUrl = (value: string) =>
  value.startsWith("http://") || value.startsWith("https://") || value.startsWith("data:");

/**
 * Prefixes static asset paths with GitHub Pages base path in production.
 *
 * Example:
 * - "/b1.svg" -> "/portfoliowebsite/b1.svg" (prod)
 * - "/b1.svg" -> "/b1.svg" (dev)
 */
export const withBasePath = (path?: string): string => {
  if (!path) return "";
  if (isExternalUrl(path)) return path;

  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  if (!basePath) return path;

  if (path.startsWith(basePath)) return path;

  if (path.startsWith("/")) return `${basePath}${path}`;

  return `${basePath}/${path}`;
};
