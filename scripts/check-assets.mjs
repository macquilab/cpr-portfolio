const base = process.env.PORTFOLIO_URL ?? 'http://127.0.0.1:4173'
const paths = ['/', '/favicon.svg', '/og-card.svg']

for (let number = 1; number <= 10; number += 1) {
  for (const extension of ['jpg', 'mp4', 'webm']) {
    paths.push(`/media/optimized/sample-edit-${number}.${extension}`)
  }
}

const results = await Promise.all(paths.map(async (path) => {
  const response = await fetch(`${base}${path}`, { method: 'HEAD' })
  const length = Number(response.headers.get('content-length') ?? 0)
  return { path, ok: response.ok && (path === '/' || length > 0), status: response.status, length }
}))

const failures = results.filter((result) => !result.ok)
if (failures.length) {
  console.error(failures)
  process.exit(1)
}

const bytes = results.reduce((total, result) => total + result.length, 0)
console.log(`Verified ${results.length} resources (${(bytes / 1024 / 1024).toFixed(1)} MB total).`)
