import { readFile, writeFile } from 'node:fs/promises';
import process from 'node:process';

const DEFAULT_URL = 'https://www.kuipra.ca/indexnow-manifest.json';

function option(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

async function readJson(file) {
  if (!file) return null;
  try {
    return JSON.parse(await readFile(file, 'utf8'));
  } catch {
    return null;
  }
}

const manifestUrl = option('--url', DEFAULT_URL);
const outputPath = option('--output');
const expectedRevision = option('--revision');
const previous = await readJson(option('--after'));
const timeoutSeconds = Number(option('--timeout', '600'));
const deadline = Date.now() + timeoutSeconds * 1000;

if (!outputPath) {
  throw new Error('--output is required');
}
while (Date.now() < deadline) {
  try {
    const url = new URL(manifestUrl);
    url.searchParams.set('_indexnow_check', String(Date.now()));
    const response = await fetch(url, {
      cache: 'no-store',
      headers: { 'user-agent': 'Kuipra-IndexNow-Deploy-Check/1.0' },
    });

    if (response.ok) {
      const current = await response.json();
      const revisionReady =
        expectedRevision && current.revision === expectedRevision;
      const rebuildReady =
        !expectedRevision &&
        current.generatedAt &&
        current.generatedAt !== previous?.generatedAt;

      if (revisionReady || rebuildReady) {
        await writeFile(outputPath, `${JSON.stringify(current, null, 2)}\n`);
        console.log(
          `Production manifest is ready (${Object.keys(current.pages || {}).length} pages).`,
        );
        process.exit(0);
      }
    }
  } catch (error) {
    console.log(`Waiting for production manifest: ${error.message}`);
  }

  await new Promise((resolve) => setTimeout(resolve, 15_000));
}

throw new Error(`Timed out waiting for ${manifestUrl}`);
