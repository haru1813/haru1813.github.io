<script setup>
import { RouterLink } from 'vue-router'
import { formatDate, readingTimeFromLines } from '@/utils/helpers'

defineProps({
  post: { type: Object, required: true },
})
</script>

<template>
  <RouterLink class="cat-post" :to="'/post/' + post.id">
    <h3 class="cat-post-title">{{ post.title || '제목 없음' }}</h3>
    <div class="cat-post-meta">
      <span class="muted small">{{ formatDate(post.date || '') }}</span>
      <span class="dot" aria-hidden="true"></span>
      <span class="muted small">읽기 {{ readingTimeFromLines(post.content) }}</span>
    </div>
    <p class="cat-post-summary muted">{{ post.summary || '' }}</p>
  </RouterLink>
</template>
