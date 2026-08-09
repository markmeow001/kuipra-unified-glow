import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const SITE = 'https://www.kuipra.ca';

function option(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

function revision() {
  if (process.env.VERCEL_GIT_COMMIT_SHA) {
    return process.env.VERCEL_GIT_COMMIT_SHA;
  }

  try {
    return execFileSync('git', ['rev-parse', 'HEAD'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return 'unknown';
  }
}

function pageFile(distDir, pageUrl) {
  const url = new URL(pageUrl);
  if (url.origin !== SITE) {
    throw new Error(`Sitemap URL is outside ${SITE}: ${pageUrl}`);
  }

  const pathname = decodeURIComponent(url.pathname);
  if (pathname.endsWith('/')) {
    return path.join(distDir, pathname.slice(1), 'index.html');
  }
  return path.join(distDir, pathname.slice(1));
}

const distDir = path.resolve(option('--dist', 'dist'));
const outputPath = path.resolve(
  option('--output', path.join(distDir, 'indexnow-manifest.json')),
);
const sitemapPath = path.join(distDir, 'sitemap-0.xml');
const sitemap = await readFile(sitemapPath, 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

if (urls.length === 0) {
  throw new Error(`No page URLs found in ${sitemapPath}`);
}

const pages = {};
for (const pageUrl of urls.sort()) {
  const html = await readFile(pageFile(distDir, pageUrl));
  pages[pageUrl] = createHash('sha256').update(html).digest('hex');
}

const manifest = {
  version: 1,
  site: SITE,
  revision: revision(),
  generatedAt: new Date().toISOString(),
  pages,
};

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
console.log(`IndexNow manifest: ${urls.length} canonical pages`);
