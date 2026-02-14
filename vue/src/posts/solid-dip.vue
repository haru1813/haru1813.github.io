<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "solid-dip",
  title: "SOLID-Dependency Inversion Principle(의존성 역전 원칙)",
  date: "2026-02-11",
  summary: "의존성 역전 원칙(DIP)은 구체가 아니라 추상에 의존해야 한다는 원칙입니다.",
  category: "Technology/SOLID",
  tags: ["theory","solid","dip","oop"],
  content: ["## DIP란?", "Dependency Inversion Principle(의존성 역전 원칙)은 고수준 모듈은 저수준 모듈에 의존하면 안 되며, 둘 다 추상화에 의존해야 한다는 원칙입니다.", "", "---", "### 요약", "DIP는 구체가 아니라 추상(인터페이스, 추상클래스)에 의존하라는 원칙입니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
