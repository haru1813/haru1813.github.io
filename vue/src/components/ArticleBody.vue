<script setup>
import { computed } from 'vue'
import { mdToHtml } from '@/utils/mdToHtml'

const props = defineProps({
  content: { type: Array, default: () => [] },
})

const bodyHtml = computed(() => mdToHtml(props.content || []))
</script>

<template>
  <div class="article-body prose" v-html="bodyHtml"></div>
</template>
