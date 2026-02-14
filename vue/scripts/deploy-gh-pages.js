import { execSync } from 'node:child_process'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '../../')

// 1. 빌드된 파일 추가
execSync('git add index.html 404.html assets favicon.ico', { cwd: root })

// 2. 변경 사항 있으면 커밋 후 gh-pages에 푸시
try {
  execSync('git diff --cached --quiet', { cwd: root })
} catch {
  execSync('git commit -m "Deploy"', { cwd: root })
}
execSync('git push origin HEAD:gh-pages --force', { cwd: root })


console.log('')
console.log('✓ gh-pages 브랜치에 반영했습니다.')
console.log('  GitHub → Settings → Pages → Source: gh-pages 브랜치 선택')
console.log('  https://haru1813.github.io 에서 확인하세요.')
