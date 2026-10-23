import fs from 'node:fs'
import path from 'node:path'

// Check the vendored marketing export and its exact bytes in the build.
const root = path.resolve(import.meta.dirname, '..')
const dist = process.env.DIST_DIR ? path.resolve(process.env.DIST_DIR) : path.join(root, 'dist')
const expected = [
  ['public/og-image.png', 1200, 630],
]

let missing = 0
for (const [relative, width, height] of expected) {
  const filePath = path.join(root, relative)
  if (!fs.existsSync(filePath)) {
    console.error(`MISSING ${relative} (${width}x${height} PNG, referenced by og:image/twitter:image)`)
    missing += 1
    continue
  }
  const buffer = fs.readFileSync(filePath)
  const isPng = buffer.length >= 24 && buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
  const actual = isPng ? [buffer.readUInt32BE(16), buffer.readUInt32BE(20)] : null
  if (!actual || actual[0] !== width || actual[1] !== height) {
    console.error(`BAD ${relative}: expected ${width}x${height} PNG, got ${actual ? actual.join('x') : 'not a PNG'}`)
    missing += 1
    continue
  }
  const builtPath = path.join(dist, path.basename(relative))
  if (!fs.existsSync(builtPath) || !buffer.equals(fs.readFileSync(builtPath))) {
    console.error(`BUILD COPY MISSING OR STALE ${relative}`)
    missing += 1
    continue
  }
  console.log(`ok ${relative} ${width}x${height}`)
}
process.exit(missing ? 1 : 0)
