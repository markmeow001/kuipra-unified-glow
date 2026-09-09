#!/usr/bin/env node
/**
 * Content lint for the blog collection.
 *
 * Catches the failures that either break `astro build` or silently degrade
 * SEO — before they reach a commit. Run manually with `npm run check:content`,
 * or automatically via the pre-commit hook in .githooks/.
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { load as parseYaml } from 'js-yaml';

const BLOG_DIR = 'src/content/blog';
const PUBLIC_DIR = 'public';
const LANGS = ['en', 'zh'];

// Schema cap in src/content.config.ts — exceeding it fails the build.
const DESCRIPTION_MAX = 200;
// Warn before the hard cap rather than at Google's display limit (~160 for
// English). House style deliberately runs 165-195 because the same string
// feeds og:description and the Article JSON-LD, and Google frequently
// rewrites the displayed snippet anyway. Flagging every post at 160 would
// fire on most of the corpus and train everyone to ignore the check.
const DESCRIPTION_WARN_AT = 190;

const REQUIRED = ['title', 'description', 'pubDate', 'lang', 'translationKey', 'category'];

const errors = [];
const warnings = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);
const warn = (file, msg) => warnings.push(`${file}: ${msg}`);

function parse(file) {
  const raw = readFileSync(file, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return { data: null, body: '' };
  try {
    return { data: parseYaml(m[1]), body: m[2] };
  } catch (e) {
    err(file, `frontmatter is not valid YAML — ${e.message.split('\n')[0]}`);
    return { data: null, body: m[2] };
  }
}

const posts = new Map(); // "lang/slug" -> { file, data, body }

for (const lang of LANGS) {
  const dir = join(BLOG_DIR, lang);
  if (!existsSync(dir)) continue;
  for (const name of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const file = join(dir, name);
    const slug = basename(name, '.md');
    const { data, body } = parse(file);
    if (!data) {
      err(file, 'could not read frontmatter');
      continue;
    }
    posts.set(`${lang}/${slug}`, { file, slug, lang, data, body });
  }
}

for (const post of posts.values()) {
  const { file, data, body, lang, slug } = post;

  for (const field of REQUIRED) {
    if (data[field] === undefined || data[field] === null || data[field] === '') {
      err(file, `missing required field \`${field}\``);
    }
  }

  if (typeof data.description === 'string') {
    const len = data.description.length;
    if (len > DESCRIPTION_MAX) {
      err(file, `description is ${len} chars, schema max is ${DESCRIPTION_MAX} — this fails the build`);
    } else if (len > DESCRIPTION_WARN_AT) {
      warn(file, `description is ${len} chars — close to the ${DESCRIPTION_MAX} cap, trim it before it breaks a build`);
    }
  }

  if (data.lang && data.lang !== lang) {
    err(file, `lang is "${data.lang}" but the file sits in ${lang}/`);
  }

  // Every post needs its counterpart, or hreflang and the language switch break.
  const otherLang = lang === 'en' ? 'zh' : 'en';
  const counterpart = posts.get(`${otherLang}/${slug}`);
  if (!counterpart) {
    err(file, `no ${otherLang} counterpart at ${BLOG_DIR}/${otherLang}/${slug}.md`);
  } else if (counterpart.data.translationKey !== data.translationKey) {
    err(file, `translationKey "${data.translationKey}" does not match the ${otherLang} version's "${counterpart.data.translationKey}"`);
  }

  if (data.heroImage && data.heroImage.startsWith('/')) {
    const asset = join(PUBLIC_DIR, data.heroImage);
    if (!existsSync(asset)) err(file, `heroImage points at ${data.heroImage}, which does not exist in ${PUBLIC_DIR}/`);
  }

  // Internal blog links: must resolve, and must not point at a post that is
  // still unpublished while this one is live — that link would 404 in the gap.
  // Once both are published the ordering no longer matters.
  const linkRe = /\]\((\/(?:zh\/)?blog\/[a-z0-9-]+)\/?\)/g;
  for (const match of body.matchAll(linkRe)) {
    const href = match[1];
    const targetLang = href.startsWith('/zh/') ? 'zh' : 'en';
    const targetSlug = href.split('/').filter(Boolean).pop();
    const target = posts.get(`${targetLang}/${targetSlug}`);

    if (!target) {
      err(file, `internal link ${href}/ has no matching article`);
      continue;
    }
    if (targetLang !== lang) {
      err(file, `internal link ${href}/ crosses language — a ${lang} article should link to ${lang} URLs`);
    }
    const targetDate = new Date(target.data.pubDate);
    const sourceDate = new Date(data.pubDate);
    if (targetDate > sourceDate && targetDate > new Date()) {
      const iso = (d) => d.toISOString().slice(0, 10);
      err(
        file,
        `links forward to ${href}/ — target publishes ${iso(targetDate)}, this one ${iso(sourceDate)}, so the link 404s in between`
      );
    }
  }
}

const label = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

if (warnings.length) {
  console.warn(`\n⚠️  ${label(warnings.length, 'warning')}:`);
  for (const w of warnings) console.warn(`   ${w}`);
}

if (errors.length) {
  console.error(`\n❌  ${label(errors.length, 'error')}:`);
  for (const e of errors) console.error(`   ${e}`);
  console.error(`\nFix these before committing, or bypass with: git commit --no-verify\n`);
  process.exit(1);
}

console.log(`✅  content check passed — ${posts.size} articles, ${label(warnings.length, 'warning')}`);
