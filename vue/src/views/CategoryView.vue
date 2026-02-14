<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { postList } from '@/posts/registry'
import LayoutWithSidebar from '@/components/LayoutWithSidebar.vue'
import PostCard from '@/components/PostCard.vue'
import Pagination from '@/components/Pagination.vue'
import { catToSlug } from '@/utils/helpers'

const route = useRoute()
const slug = computed(() => route.params.slug)

const categoryName = computed(() => {
  for (const p of postList) {
    if (p?.category && catToSlug(p.category) === slug.value) return p.category
  }
  return slug.value || ''
})

const filteredPosts = computed(() =>
  postList.filter((p) => p?.category && catToSlug(p.category) === slug.value)
)
</script>

<template>
  <div class="container">
    <LayoutWithSidebar :posts="postList">
      <div class="content-card">
        <div class="content-kicker muted">카테고리</div>
        <h1 class="content-title">{{ categoryName }}</h1>
        <p class="content-desc muted">선택한 카테고리의 글 목록입니다.</p>
        <div class="cat-posts">
          <div v-if="filteredPosts.length === 0" class="empty">이 카테고리에는 아직 글이 없어요.</div>
          <Pagination v-else :items="filteredPosts" :per-page="10">
            <template #default="{ items }">
              <PostCard v-for="p in items" :key="p.id" :post="p" />
            </template>
          </Pagination>
        </div>
      </div>
    </LayoutWithSidebar>
  </div>
</template>
