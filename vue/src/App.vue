<script setup>
import { ref, provide } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const drawerOpen = ref(false)
function openDrawer() {
  drawerOpen.value = true
  document.body.classList.add('drawer-open')
}
function closeDrawer() {
  drawerOpen.value = false
  document.body.classList.remove('drawer-open')
}
provide('drawer', {
  open: openDrawer,
  close: closeDrawer,
  isOpen: drawerOpen,
})
</script>

<template>
  <a class="skip" href="#content">본문으로 건너뛰기</a>
  <AppHeader />
  <main id="content" class="section" aria-label="메인">
    <RouterView />
  </main>
  <AppFooter />
</template>
