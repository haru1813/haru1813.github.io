<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { postList, getPostComponent } from '@/posts/registry'
import { catToSlug } from '@/utils/helpers'

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
</script>

<template>
  <div class="container">
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
  </div>
</template>
