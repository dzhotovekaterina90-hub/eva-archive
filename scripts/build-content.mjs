import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const collections = ['reports', 'projects', 'experiments', 'writing'];

function scalar(value) {
  const source = value.trim();
  if (!source) return '';
  if ((source.startsWith('"') && source.endsWith('"')) || (source.startsWith("'") && source.endsWith("'"))) return source.slice(1, -1);
  if (source.startsWith('[') && source.endsWith(']')) return source.slice(1, -1).split(',').map(item => scalar(item)).filter(Boolean);
  if (source === 'true') return true;
  if (source === 'false') return false;
  return source;
}

function parseMarkdown(source, filename) {
  const normalized = source.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`${filename}: missing YAML front matter`);
  const data = {};
  const lines = match[1].split('\n');
  let listKey = null;

  for (const line of lines) {
    const listItem = line.match(/^\s*-\s+(.+)$/);
    if (listItem && listKey) {
      data[listKey].push(scalar(listItem[1]));
      continue;
    }
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!field) continue;
    const [, key, value] = field;
    if (!value.trim()) {
      data[key] = [];
      listKey = key;
    } else {
      data[key] = scalar(value);
      listKey = null;
    }
  }

  return {
    slug: path.basename(filename, path.extname(filename)),
    title: data.title || path.basename(filename, path.extname(filename)),
    date: data.date || '',
    type: data.type || '',
    cover: data.cover || '',
    tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
    summary: data.summary || '',
    body: match[2].trim()
  };
}

async function buildCollection(name) {
  const sourceDirectory = path.join(root, 'content', name);
  const outputDirectory = path.join(root, 'public', 'data');
  await fs.mkdir(sourceDirectory, { recursive: true });
  await fs.mkdir(outputDirectory, { recursive: true });
  const files = (await fs.readdir(sourceDirectory)).filter(file => /\.md$/i.test(file));
  const entries = [];

  for (const file of files) {
    const markdown = await fs.readFile(path.join(sourceDirectory, file), 'utf8');
    entries.push(parseMarkdown(markdown, file));
  }

  entries.sort((a, b) => String(b.date).localeCompare(String(a.date)));
  await fs.writeFile(path.join(outputDirectory, `${name}.json`), `${JSON.stringify(entries, null, 2)}\n`, 'utf8');
  console.log(`${name}: ${entries.length} item(s)`);
}

await Promise.all(collections.map(buildCollection));
