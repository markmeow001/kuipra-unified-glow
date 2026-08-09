import { readFile } from 'node:fs/promises';
import process from 'node:process';

const SITE = 'https://www.kuipra.ca';
const HOST = 'www.kuipra.ca';
const KEY = '024ff10d9fc2f015db0a18a17089de45';
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

function option(name) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

async function readManifest(file, required) {
  if (!file) {
    if (required) throw new Error('Missing manifest path');
    return { pages: {} };
  }

  try {
    const manifest = JSON.parse(await readFile(file, 'utf8'));
    if (!manifest.pages || typeof manifest.pages !== 'object') {
      throw new Error('manifest.pages is missing');
    }
    return manifest;
  } catch (error) {
    if (!required && error.code === 'ENOENT') return { pages: {} };
    throw new Error(`Cannot read manifest ${file}: ${error.message}`);
  }
}

function validateUrl(pageUrl) {
  const url = new URL(pageUrl);
  if (url.origin !== SITE || url.username || url.password) {
    throw new Error(`Refusing to submit URL outside ${SITE}: ${pageUrl}`);
  }
  return url.href;
}

const before = await readManifest(option('--before'), false);
const after = await readManifest(option('--after'), true);
const allUrls = new Set([...Object.keys(before.pages), ...Object.keys(after.pages)]);
const changedUrls = [...allUrls]
  .filter((url) => before.pages[url] !== after.pages[url])
  .map(validateUrl)
  .sort();

if (changedUrls.length === 0) {
  console.log('IndexNow: no canonical page changes detected.');
  process.exit(0);
}

if (process.argv.includes('--dry-run')) {
  console.log(`IndexNow dry run: ${changedUrls.length} changed URL(s)`);
  for (const url of changedUrls) console.log(url);
  process.exit(0);
}

if (changedUrls.length > 10_000) {
  throw new Error(`IndexNow batch is too large: ${changedUrls.length} URLs`);
}

const response = await fetch(ENDPOINT, {
  method: 'POST',
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'user-agent': 'Kuipra-IndexNow/1.0',
  },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: changedUrls,
  }),
});

if (response.status !== 200 && response.status !== 202) {
  const detail = (await response.text()).slice(0, 500);
  throw new Error(`IndexNow rejected the submission (${response.status}): ${detail}`);
}

console.log(
  `IndexNow accepted ${changedUrls.length} changed URL(s) with HTTP ${response.status}.`,
);
