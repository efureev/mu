#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs'
import { resolve, join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// ESM-safe __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const ROOT = resolve(__dirname, '..')
const DOCS_ROOT = join(ROOT, 'docs')

const README_FILES = [join(DOCS_ROOT, 'README.md'), join(DOCS_ROOT, 'ru', 'README.md')]

const LINK_RE = /\]\(([^)]+\.md)\)/g

let hasErrors = false

for (const file of README_FILES) {
  const rel = file.replace(ROOT + '/', '')
  const content = readFileSync(file, 'utf8')

  const seen = new Set<string>()

  for (const match of content.matchAll(LINK_RE)) {
    const link = match[1] // e.g. "is/isBlank.md" or "object/merge.md"

    // Skip external links just in case
    if (link.startsWith('http://') || link.startsWith('https://')) continue

    if (seen.has(link)) continue
    seen.add(link)

    const target = join(DOCS_ROOT, link)

    if (!existsSync(target)) {
      hasErrors = true
      console.error(`[docs] Missing target for link in ${rel}: ${link} -> ${target}`)
    }
  }
}

if (hasErrors) {
  process.exit(1)
} else {
  console.log('[docs] All README links are valid.')
}
