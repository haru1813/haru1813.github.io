<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "solid-ocp",
  title: "SOLID-Open/Closed Principle(개방-폐쇄 원칙)",
  date: "2026-02-11",
  summary: "개방-폐쇄 원칙(OCP)은 확장에는 열려 있고, 수정에는 닫혀 있어야 한다는 원칙입니다.",
  category: "Technology/SOLID",
  tags: ["theory","solid","ocp","oop"],
  content: ["## OCP란?", "Open/Closed Principle(개방-폐쇄 원칙)은 소프트웨어 요소는 확장에는 열려 있으나 수정에는 닫혀 있어야 한다는 원칙입니다.", "", "## 요약", "새 기능 추가 시 기존 코드를 수정하지 않고, 확장(새 클래스/인터페이스 구현)으로 처리합니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
