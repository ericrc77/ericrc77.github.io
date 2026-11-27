// Checks the built site: run `npm run build` first.
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const SITE = 'https://ericrc77.github.io';
/** Folders that only hold redirects for addresses used by older sites. */
const REDIRECTS = ['portifolio-eric-campos', 'dashboard-dados-brasil'];

const files = readdirSync(dist, { recursive: true }).map((f) => String(f).replaceAll('\\', '/'));
const html = files.filter((f) => f.endsWith('.html'));
const pages = html.filter((f) => !REDIRECTS.some((dir) => f.startsWith(`${dir}/`)) && f !== '404.html');
const read = (file) => readFileSync(join(dist, file), 'utf8');
const attribute = (source, pattern) => [...source.matchAll(pattern)].map((m) => m[1]);

/** File that GitHub Pages would serve for a path on this site. */
function resolve(path) {
  const clean = decodeURIComponent(path.split(/[?#]/)[0]).replace(/^\//, '');
  return join(dist, clean.endsWith('/') || clean === '' ? `${clean}index.html` : clean);
}

test('every page exists in both languages', () => {
  const english = pages.filter((p) => !p.startsWith('pt/')).sort();
  const portuguese = pages.filter((p) => p.startsWith('pt/')).map((p) => p.slice(3)).sort();
  assert.equal(english.length, 4);
  assert.deepEqual(portuguese, english);
});

test('pages declare language, one main heading, description, canonical and alternates', () => {
  for (const page of pages) {
    const source = read(page);
    const lang = page.startsWith('pt/') ? 'pt-BR' : 'en';
    const url = `${SITE}/${page.replace(/index\.html$/, '')}`;
    assert.match(source, new RegExp(`<html lang="${lang}"`), page);
    assert.equal(source.match(/<h1[\s>]/g)?.length, 1, `${page}: h1`);
    assert.match(source, /<meta name="description" content=".{50,}"/, page);
    assert.ok(source.includes(`<link rel="canonical" href="${url}">`), `${page}: canonical`);
    assert.equal(attribute(source, /hreflang="(en|pt-BR|x-default)" href=/g).length, 3, `${page}: alternates`);
  }
});

test('internal links, assets and anchors resolve', () => {
  for (const page of [...pages, '404.html']) {
    const source = read(page);
    const targets = [
      ...attribute(source, /(?:href|src)="(\/[^"]*)"/g),
      ...attribute(source, /href="https:\/\/ericrc77\.github\.io(\/(?:pt\/)?(?:projects\/[^"]*)?)"/g),
      ...attribute(source, /srcset="([^"]+)"/g).flatMap((set) => set.split(',').map((s) => s.trim().split(' ')[0])),
    ];
    for (const target of targets) {
      assert.ok(existsSync(resolve(target)), `${page} links to missing ${target}`);
      const [path, anchor] = target.split('#');
      if (anchor) assert.ok(readFileSync(resolve(path), 'utf8').includes(`id="${anchor}"`), `${page}: #${anchor}`);
    }
  }
});

test('images have alternative text', () => {
  for (const page of pages) {
    for (const tag of read(page).match(/<img\b[^>]*>/g) ?? []) assert.match(tag, /\salt="[^"]+"/, `${page}: ${tag}`);
  }
});

test('contact details are present and private data is not', () => {
  for (const home of ['index.html', 'pt/index.html']) {
    const source = read(home);
    assert.ok(source.includes('mailto:ericcamposop@gmail.com'), home);
    assert.ok(source.includes('https://wa.me/5533998551827'), home);
    assert.ok(source.includes('tel:+5533998551827'), home);
  }
  for (const file of html) {
    assert.doesNotMatch(read(file), /Higno|35190|Estado civil|seu-dominio|linkedin\.com/i, relative(dist, file));
  }
});

test('old addresses redirect to the new ones', () => {
  for (const old of ['index', 'about', 'curriculo']) {
    assert.match(read(`portifolio-eric-campos/${old}.html`), /url=https:\/\/ericrc77\.github\.io\/pt\//);
  }
  assert.match(read('dashboard-dados-brasil/index.html'), /url=https:\/\/ericrc77\.github\.io\/brazil-open-data-dashboard\//);
});

test('search engine files are published', () => {
  for (const file of ['robots.txt', 'sitemap-index.xml', 'og.png', 'favicon.svg', '404.html']) {
    assert.ok(existsSync(join(dist, file)), file);
  }
});
