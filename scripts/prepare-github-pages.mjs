import { cp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.resolve('dist/client');
const prefixedOutputDirectory = path.join(outputDirectory, 'motriz-site');
const sourceAssets = path.join(prefixedOutputDirectory, '_next');
const publicAssets = path.join(outputDirectory, 'assets');
const oldAssetPath = '/motriz-site/_next/';
const newAssetPath = '/motriz-site/assets/';
const textExtensions = new Set(['.css', '.html', '.js', '.json', '.map', '.txt']);

await rm(publicAssets, { recursive: true, force: true });
await cp(sourceAssets, publicAssets, { recursive: true });

async function rewriteAssetPaths(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await rewriteAssetPaths(filePath);
      continue;
    }

    if (!textExtensions.has(path.extname(entry.name))) continue;

    const content = await readFile(filePath, 'utf8');
    const updatedContent = content.replaceAll(oldAssetPath, newAssetPath);

    if (updatedContent !== content) {
      await writeFile(filePath, updatedContent);
    }
  }
}

await rewriteAssetPaths(outputDirectory);
await rm(prefixedOutputDirectory, { recursive: true, force: true });

console.log('GitHub Pages assets prepared in dist/client/assets.');
