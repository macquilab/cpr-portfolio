import { createWriteStream } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pipeline } from 'node:stream/promises'
import { Readable } from 'node:stream'

const [encodedUrl, relativeOutput] = process.argv.slice(2)
if (!encodedUrl || !relativeOutput) {
  throw new Error('Usage: node scripts/download-url.mjs <base64url-url> <output>')
}

const url = Buffer.from(encodedUrl, 'base64url').toString('utf8')
const output = resolve(relativeOutput)
await mkdir(dirname(output), { recursive: true })

const response = await fetch(url)
if (!response.ok || !response.body) throw new Error(`Download failed with HTTP ${response.status}`)
await pipeline(Readable.fromWeb(response.body), createWriteStream(output))
console.log(`Saved ${relativeOutput}`)
