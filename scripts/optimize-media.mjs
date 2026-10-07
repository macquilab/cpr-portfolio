import { existsSync, mkdirSync, readdirSync } from 'node:fs'
import { basename, dirname, join, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import ffmpegPath from 'ffmpeg-static'

const root = resolve(import.meta.dirname, '..')
const sourceDir = join(root, 'public', 'media', 'source')
const outputDir = join(root, 'public', 'media', 'optimized')

if (!ffmpegPath) throw new Error('ffmpeg-static binary is unavailable.')
mkdirSync(outputDir, { recursive: true })

const inputs = readdirSync(sourceDir)
  .filter((file) => /^sample-edit-(?:[1-9]|1[0-8])\.mp4$/i.test(file))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

if (!inputs.length) {
  console.error('No source videos found in public/media/source.')
  process.exit(1)
}

function run(args) {
  const result = spawnSync(ffmpegPath, ['-hide_banner', '-loglevel', 'warning', '-y', ...args], { stdio: 'inherit' })
  if (result.status !== 0) process.exit(result.status ?? 1)
}

for (const inputFile of inputs) {
  const input = join(sourceDir, inputFile)
  const slug = basename(inputFile, '.mp4')
  const mp4 = join(outputDir, `${slug}.mp4`)
  const webm = join(outputDir, `${slug}.webm`)
  const poster = join(outputDir, `${slug}.jpg`)
  const scale = "scale='if(gt(iw,ih),min(1280,iw),-2)':'if(gt(iw,ih),-2,min(1280,ih))'"

  console.log(`Optimizing ${inputFile}`)
  if (!existsSync(mp4)) run(['-i', input, '-vf', scale, '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '26', '-movflags', '+faststart', '-c:a', 'aac', '-b:a', '128k', mp4])
  if (!existsSync(webm)) run(['-i', input, '-vf', scale, '-c:v', 'libvpx-vp9', '-deadline', 'realtime', '-cpu-used', '8', '-crf', '36', '-b:v', '0', '-row-mt', '1', '-c:a', 'libopus', '-b:a', '96k', webm])
  if (!existsSync(poster)) run(['-ss', '00:00:01.500', '-i', input, '-frames:v', '1', '-vf', 'scale=960:-2', '-q:v', '3', poster])
}

console.log(`Optimized media written to ${outputDir}`)
