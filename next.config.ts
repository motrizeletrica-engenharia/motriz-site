import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const isStaticExport = process.env.STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  ...(isGitHubPages || isStaticExport
    ? {
        output: 'export',
        ...(isGitHubPages ? { assetPrefix: '/motriz-site' } : {}),
      }
    : {}),
};

export default nextConfig;
