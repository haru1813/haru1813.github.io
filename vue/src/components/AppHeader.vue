<script setup>
import { ref, onMounted, inject } from 'vue'

const theme = ref('dark')
const drawer = inject('drawer', { open: () => {}, close: () => {}, isOpen: ref(false) })

function applyTheme(t) {
  theme.value = t
  document.documentElement.dataset.theme = t
  try {
    localStorage.setItem('theme', t)
  } catch {}
}
function toggleTheme() {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}
function toggleMenu() {
  if (document.body.classList.contains('drawer-open')) {
    drawer.close()
  } else {
    drawer.open()
  }
}

onMounted(() => {
  try {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    applyTheme(saved || (prefersDark ? 'dark' : 'light'))
  } catch {}
})
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <RouterLink class="brand" to="/">
        <span class="brand-mark" aria-hidden="true">H</span>
        <span class="brand-text">
          <strong>하루 블로그</strong>
        </span>
      </RouterLink>
      <nav class="nav" aria-label="주요 메뉴">
        <a class="nav-link" href="https://github.com/haru1813" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
      <div class="header-actions">
        <button
          class="icon-btn mobile-only"
          type="button"
          aria-label="카테고리 열기"
          :aria-expanded="drawer.isOpen"
          title="카테고리"
          @click="toggleMenu"
        >
          <span class="icon">≡</span>
        </button>
        <button
          class="icon-btn"
          type="button"
          aria-label="테마 전환"
          title="테마 전환"
          @click="toggleTheme"
        >
          <span class="icon">{{ theme === 'dark' ? '☾' : '☀' }}</span>
        </button>
      </div>
    </div>
  </header>
</template>
