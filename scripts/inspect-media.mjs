import { readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import ffmpegPath from 'ffmpeg-static'

const sourceDir = resolve(import.meta.dirname, '..', 'public', 'media', 'source')
for (const file of readdirSync(sourceDir).filter((name) => name.endsWith('.mp4')).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))) {
  const result = spawnSync(ffmpegPath, ['-hide_banner', '-i', join(sourceDir, file)], { encoding: 'utf8' })
  const match = result.stderr.match(/Video:.*?\b(\d{2,5})x(\d{2,5})\b/)
  console.log(`${file}: ${match ? `${match[1]}x${match[2]}` : 'unknown'}`)
}
