<script setup>
import { computed, onMounted, onUpdated, nextTick } from 'vue'
import { mdToHtml } from '@/utils/mdToHtml'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
})

const props = defineProps({
  content: { type: Array, default: () => [] },
})

const bodyHtml = computed(() => mdToHtml(props.content || []))

async function renderMermaid() {
  await nextTick()
  const els = document.querySelectorAll('.article-body .mermaid')
  if (els.length === 0) return

  els.forEach((el) => {
    el.removeAttribute('data-processed')
  })
  await mermaid.run({ nodes: els })
}

onMounted(renderMermaid)
onUpdated(renderMermaid)
</script>

<template>
  <div class="article-body prose" v-html="bodyHtml"></div>
</template>
