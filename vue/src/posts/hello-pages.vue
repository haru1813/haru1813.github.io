<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "hello-pages",
  title: "블로그 소개",
  date: "2026-02-11",
  summary: "공부 기록을 차곡차곡 모으는 블로그입니다.",
  category: "Daily Life/ETC",
  tags: ["blog"],
  content: ["## 안녕하세요.", "haru1813 개발 블로그에 오신 것을 환영합니다.", "", "공부한 내용을 정리해 기록합니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
