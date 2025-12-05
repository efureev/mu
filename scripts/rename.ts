#!/usr/bin/env node
import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath } from 'url'

async function* walkDir(dir: string): AsyncGenerator<string> {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      for await (const sub of walkDir(path.join(dir, entry.name))) {
        yield sub
      }
    } else if (entry.isFile()) {
      yield path.join(dir, entry.name)
    }
  }
}

// ESM-safe replacement for __dirname and target directory
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url))
const DIST_DIR = path.resolve(SCRIPT_DIR, '..', 'dist/esm')

// Regex and helper for import/export path rewriting
const IMPORT_EXPORT_REGEX = /^((import|export)\s+.+from\s+')(.+)('\s*)/gm

function ensureMjsExtension(spec: string): string {
  if ((spec.startsWith('./') || spec.startsWith('~/')) && !spec.endsWith('.mjs')) {
    return `${spec}.mjs`
  }
  return spec
}

// ... existing code ...

async function main(): Promise<void> {
  for await (const entry of walkDir(DIST_DIR)) {
    const match = /^(.*)(\.(js|js\.map|d\.ts))$/.exec(entry)
    if (match == null) {
      continue
    }

    const file = match[1]
    const ext = match[2]
    if (ext === '.js') {
      let data = await fs.readFile(entry, 'utf-8')
      data = data.replace(
        IMPORT_EXPORT_REGEX,
        (_: string, prefix: string, _impExp: string, importPath: string, suffix: string) => {
          const rewritten = ensureMjsExtension(importPath)
          return `${prefix}${rewritten}${suffix}`
        }
      )
      const baseName = path.basename(file)
      data = data.replace(`//# sourceMappingURL=${baseName}.js.map`, `//# sourceMappingURL=${baseName}.mjs.map`)
      await fs.writeFile(entry, data)
      await fs.rename(entry, `${file}.mjs`)
    } else if (ext === '.js.map') {
      const data = JSON.parse(await fs.readFile(entry, 'utf-8'))
      data.file = `${file}.mjs`
      await fs.writeFile(entry, JSON.stringify(data))
      await fs.rename(entry, `${file}.mjs.map`)
    } else if (ext === '.d.ts') {
      await fs.rename(entry, `${file}.d.mts`)
    }
  }
}

// ... existing code ...

main().catch((e: Error) => {
  console.error(e)
  process.exit(1)
})
