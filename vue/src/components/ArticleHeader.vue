<script setup>
import { formatDate, readingTimeFromLines } from '@/utils/helpers'

defineProps({
  post: { type: Object, required: true },
})
</script>

<template>
  <header class="article-head">
    <h1>{{ post.title || '제목 없음' }}</h1>
    <div class="article-meta">
      <span class="muted small">{{ formatDate(post.date || '') }}</span>
      <span class="muted small">· 읽기 {{ readingTimeFromLines(post.content) }}</span>
    </div>
    <div class="tag-row">
      <span v-for="t in (post.tags || [])" :key="t" class="tag">#{{ t }}</span>
    </div>
  </header>
</template>
