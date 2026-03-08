<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { postList, getPostComponent } from '@/posts/registry'
import { catToSlug } from '@/utils/helpers'
import LayoutWithSidebar from '@/components/LayoutWithSidebar.vue'
import PostCard from '@/components/PostCard.vue'
import Pagination from '@/components/Pagination.vue'

const route = useRoute()
const router = useRouter()

const postMeta = computed(() =>
  postList.find((p) => String(p.id) === String(route.params.id))
)

const PostComponent = computed(() => getPostComponent(route.params.id))

const backHref = computed(() => {
  const cat = postMeta.value?.category
  if (!cat) return '/'
  return '/category/' + catToSlug(cat)
})

const categoryPosts = computed(() => {
  const cat = postMeta.value?.category
  if (!cat) return []
  return postList.filter(
    (p) => p?.category === cat && String(p.id) !== String(route.params.id)
  )
})

const categoryName = computed(() => {
  const cat = postMeta.value?.category
  if (!cat) return ''
  const parts = cat.split('/')
  return parts[parts.length - 1]
})
</script>

<template>
  <div class="container">
    <LayoutWithSidebar :posts="postList">
      <div class="breadcrumbs">
        <a :href="backHref" class="muted small" @click.prevent="router.push(backHref)">← 글 목록으로</a>
      </div>
      <article v-if="PostComponent" class="article">
        <component :is="PostComponent" />
      </article>
      <div v-else class="empty">
        <p>글을 찾을 수 없어요.</p>
      </div>
      <div v-if="postMeta" class="article-footer">
        <a class="btn secondary" href="#" @click.prevent="router.push(backHref)">목록</a>
      </div>

      <div v-if="categoryPosts.length > 0" class="related-posts">
        <div class="content-card">
          <div class="content-kicker muted">같은 카테고리</div>
          <h2 class="content-title" style="font-size: clamp(1.1rem, 1.6vw, 1.4rem);">
            {{ categoryName }}의 다른 글
          </h2>
          <div class="cat-posts">
            <Pagination :items="categoryPosts" :per-page="5">
              <template #default="{ items }">
                <PostCard v-for="p in items" :key="p.id" :post="p" />
              </template>
            </Pagination>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  </div>
</template>
