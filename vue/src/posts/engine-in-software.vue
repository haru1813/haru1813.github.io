<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "engine-in-software",
  title: "엔진(Engine)이란?",
  date: "2026-02-11",
  summary: "소프트웨어에서 엔진은 특정 기능을 담당하는 핵심 컴포넌트를 말합니다.",
  category: "Coding/Theory",
  tags: ["theory","engine","architecture","basics"],
  content: ["## 엔진이란?", "소프트웨어에서 엔진은 특정 기능을 담당하는 핵심 컴포넌트를 말합니다.", "", "| 종류 | 예시 |", "|------|------|", "| 검색 엔진 | Elasticsearch |", "| 게임 엔진 | Unity, Unreal |", "| JS 엔진 | V8, SpiderMonkey |", "| 렌더링 엔진 | Blink, WebKit |", "", "---", "### 요약", "엔진은 특정 기능의 핵심 구현체입니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
