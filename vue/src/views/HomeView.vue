<script setup>
import { postList } from '@/posts/registry'
import LayoutWithSidebar from '@/components/LayoutWithSidebar.vue'
import PostCard from '@/components/PostCard.vue'
import Pagination from '@/components/Pagination.vue'
</script>

<template>
  <div class="container">
    <LayoutWithSidebar :posts="postList">
      <div class="content-card">
        <div class="content-kicker muted">홈</div>
        <h1 class="content-title">전체 카테고리</h1>
        <p class="content-desc muted">선택한 카테고리의 글 목록입니다.</p>
        <div class="cat-posts">
          <Pagination :items="postList" :per-page="10">
            <template #default="{ items }">
              <PostCard v-for="p in items" :key="p.id" :post="p" />
            </template>
          </Pagination>
        </div>
      </div>
    </LayoutWithSidebar>
  </div>
</template>
