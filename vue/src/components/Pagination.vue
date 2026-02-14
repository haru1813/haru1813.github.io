<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  items: { type: Array, default: () => [] },
  perPage: { type: Number, default: 10 },
})

const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(props.items.length / props.perPage))

const visibleItems = computed(() => {
  const start = (currentPage.value - 1) * props.perPage
  return props.items.slice(start, start + props.perPage)
})

const pageNumbers = computed(() => {
  const max = 5
  let begin = Math.max(1, currentPage.value - Math.floor(max / 2))
  let end = Math.min(totalPages.value, begin + max - 1)
  if (end - begin + 1 < max) begin = Math.max(1, end - max + 1)
  return Array.from({ length: end - begin + 1 }, (_, i) => begin + i)
})

watch(() => props.items, () => { currentPage.value = 1 }, { deep: true })

function goTo(page) {
  currentPage.value = Math.max(1, Math.min(page, totalPages.value))
}
</script>

<template>
  <template v-if="items.length > perPage">
    <slot :items="visibleItems"></slot>
    <nav class="pagination" aria-label="페이지네이션">
      <button
        v-if="currentPage > 1"
        type="button"
        class="pagination-btn"
        aria-label="이전 페이지"
        @click="goTo(currentPage - 1)"
      >
        ←
      </button>
      <button
        v-for="n in pageNumbers"
        :key="n"
        type="button"
        class="pagination-btn"
        :class="{ active: n === currentPage }"
        :aria-current="n === currentPage ? 'page' : undefined"
        @click="goTo(n)"
      >
        {{ n }}
      </button>
      <button
        v-if="currentPage < totalPages"
        type="button"
        class="pagination-btn"
        aria-label="다음 페이지"
        @click="goTo(currentPage + 1)"
      >
        →
      </button>
    </nav>
  </template>
  <slot v-else :items="items"></slot>
</template>
