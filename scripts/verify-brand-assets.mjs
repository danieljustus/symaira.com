import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const brandRoot = path.join(root, 'brand-assets', 'symaira-com')
const manifest = JSON.parse(fs.readFileSync(path.join(brandRoot, 'manifest.json'), 'utf8'))

if (manifest.id !== 'symaira-com') {
  throw new Error(`Expected symaira-com approval manifest, got ${manifest.id}`)
}

const assets = [
  ['AppIcon.iconset/icon_16x16.png', 'favicon-16x16.png', 16, 16],
  ['web/favicon.ico', 'favicon.ico', 32, 32],
  ['AppIcon.iconset/icon_32x32.png', 'favicon-32x32.png', 32, 32],
  ['AppIcon.iconset/icon_128x128.png', 'favicon-128x128.png', 128, 128],
  ['AppIcon.iconset/icon_256x256.png', 'android-chrome-256x256.png', 256, 256],
  ['AppIcon.iconset/icon_512x512.png', 'android-chrome-512x512.png', 512, 512],
  ['web/apple-touch-icon.png', 'apple-touch-icon.png', 180, 180],
  ['web/favicon.svg', 'favicon.svg', 1024, 1024],
]

function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex')
}

function dimensions(filePath, buffer) {
  if (buffer.readUInt32BE(0) === 0x89504e47 && buffer.toString('ascii', 1, 4) === 'PNG') {
    return [buffer.readUInt32BE(16), buffer.readUInt32BE(20)]
  }

  if (buffer.readUInt32LE(0) === 0x00010000) {
    return [buffer[6] || 256, buffer[7] || 256]
  }

  const svg = buffer.toString('utf8')
  const width = svg.match(/\bwidth="(\d+)"/)?.[1]
  const height = svg.match(/\bheight="(\d+)"/)?.[1]
  if (!width || !height) {
    throw new Error(`${filePath} has no integer SVG dimensions`)
  }
  return [Number(width), Number(height)]
}

function verify(filePath, expectedHash, expectedWidth, expectedHeight) {
  const buffer = fs.readFileSync(filePath)
  const actualHash = sha256(buffer)
  if (actualHash !== expectedHash) {
    throw new Error(`${path.relative(root, filePath)} hash ${actualHash} != ${expectedHash}`)
  }
  const [width, height] = dimensions(filePath, buffer)
  if (width !== expectedWidth || height !== expectedHeight) {
    throw new Error(`${path.relative(root, filePath)} dimensions ${width}x${height} != ${expectedWidth}x${expectedHeight}`)
  }
}

for (const [sourceRelative, publicRelative, width, height] of assets) {
  const expectedHash = manifest.files[sourceRelative]
  if (!expectedHash) {
    throw new Error(`Approval manifest has no hash for ${sourceRelative}`)
  }

  const sourcePath = path.join(brandRoot, sourceRelative)
  const publicPath = path.join(root, 'public', publicRelative)
  const distPath = path.join(root, 'dist', publicRelative)
  verify(sourcePath, expectedHash, width, height)
  verify(publicPath, expectedHash, width, height)
  verify(distPath, expectedHash, width, height)
}

console.log(`Verified ${assets.length} approved symaira-com brand assets in public and dist`)
