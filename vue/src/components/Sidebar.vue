<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { catToSlug } from '@/utils/helpers'
import profileImg from '@/assets/images/profile.png'

const props = defineProps({
  posts: { type: Array, default: () => [] },
})

const route = useRoute()

const byCat = computed(() => {
  const m = new Map()
  for (const p of props.posts) {
    const c = p?.category ? String(p.category) : ''
    if (!c) continue
    m.set(c, (m.get(c) || 0) + 1)
  }
  return m
})

function countPrefix(prefix) {
  const pre = `${prefix}/`
  let sum = 0
  for (const [k, v] of byCat.value.entries()) {
    if (k.startsWith(pre)) sum += v
  }
  return sum
}

const currentCat = computed(() => {
  const slug = route.params.slug
  if (!slug) return '전체 보기'
  for (const [cat] of byCat.value.entries()) {
    if (catToSlug(cat) === slug) return cat
  }
  return ''
})

const groups = [
  { name: 'Domain', items: ['Domain/회계', 'Domain/주식', 'Domain/경제', 'Domain/세금', 'Domain/부동산', 'Domain/금융', 'Domain/법', 'Domain/Theory'] },
  { name: 'Coding', items: ['Coding/JavaScript', 'Coding/Python', 'Coding/Maria DB', 'Coding/Theory'] },
  {
    name: 'Technology',
    items: [
      'Technology/Git', 'Technology/AI', 'Technology/Design-Pattern', 'Technology/SOLID',
      'Technology/Android', 'Technology/SpringBoot', 'Technology/React', 'Technology/Docker',
      'Technology/Vue.js', 'Technology/VS CODE', 'Technology/Node', 'Technology/eclipse', 'Technology/Linux',
    ],
  },
  { name: 'Daily Life', items: ['Daily Life/Memo', 'Daily Life/Exercise', 'Daily Life/ETC', 'Daily Life/Bible'] },
]
</script>

<template>
  <aside class="sidebar" aria-label="카테고리">
    <div class="profile-card">
      <img
        class="profile-img"
        :src="profileImg"
        alt="프로필 이미지"
        width="240"
        height="240"
        @error="($e) => ($e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%23334%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%2399a%22 font-size=%2224%22%3EH%3C/text%3E%3C/svg%3E')"
      />
      <div class="profile-meta">
        <div class="profile-name">haru1813</div>
        <div class="profile-sub muted">dev blog</div>
      </div>
    </div>
    <div class="cat-box">
      <div class="cat-head">
        <span>카테고리</span>
        <button
          class="icon-btn drawer-close mobile-only"
          type="button"
          aria-label="카테고리 닫기"
          title="닫기"
          @click="$emit('close')"
        >
          <span class="icon">×</span>
        </button>
      </div>
      <div class="cat-root">
        <RouterLink
          class="cat-link"
          to="/"
          exact-active-class="router-link-active"
          @click="$emit('close')"
        >
          <span class="cat-label">전체 보기</span>
          <span class="cat-count">({{ posts.length }})</span>
        </RouterLink>
      </div>
      <details v-for="g in groups" :key="g.name" class="cat-group" open>
        <summary>
          <span class="cat-label">{{ g.name }}</span>
          <span class="cat-count">({{ countPrefix(g.name) }})</span>
        </summary>
        <div class="cat-items" role="list">
          <RouterLink
            v-for="cat in g.items"
            :key="cat"
            class="cat-link"
            :to="'/category/' + catToSlug(cat)"
            active-class="router-link-active"
            @click="$emit('close')"
          >
            <span class="cat-label">{{ cat.split('/').pop() }}</span>
            <span class="cat-count">({{ byCat.get(cat) || 0 }})</span>
          </RouterLink>
        </div>
      </details>
    </div>
  </aside>
</template>
