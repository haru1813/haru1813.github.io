import { copyFileSync, cpSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '../../')  // haru1813.github.io/
const dist = join(__dirname, '../dist')

for (const name of readdirSync(dist)) {
  cpSync(join(dist, name), join(root, name), { recursive: true })
}
copyFileSync(join(root, 'index.html'), join(root, '404.html'))
console.log('✓ 빌드 결과를 haru1813.github.io 루트에 복사했습니다.')
