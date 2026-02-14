<script setup>
import { inject } from 'vue'
import Sidebar from './Sidebar.vue'

defineProps({
  posts: { type: Array, default: () => [] },
})

const drawer = inject('drawer', { close: () => {} })
</script>

<template>
  <div class="layout">
    <button
      class="drawer-scrim"
      type="button"
      aria-label="카테고리 닫기"
      @click="drawer.close()"
    ></button>
    <Sidebar :posts="posts" @close="drawer.close()" />
    <section class="content">
      <slot />
    </section>
  </div>
</template>
