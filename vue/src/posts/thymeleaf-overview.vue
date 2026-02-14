<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'
import { content } from './thymeleaf-overview-content.js'

const post = {
  id: "thymeleaf-overview",
  title: "Thymeleaf 템플릿 엔진 완전 정리",
  date: "2026-02-11",
  summary: "Thymeleaf는 Spring Boot에서 가장 많이 쓰이는 서버 사이드 HTML 템플릿 엔진입니다. th:text, th:each, 표현식, 폼 바인딩, Fragment, Spring Security 연동까지 정리합니다.",
  category: "Technology/SpringBoot",
  tags: ["springboot", "thymeleaf", "template", "html", "backend"],
  content
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
