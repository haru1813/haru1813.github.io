<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "solid-lsp",
  title: "SOLID-Liskov Substitution Principle(리스코프 치환 원칙)",
  date: "2026-02-11",
  summary: "리스코프 치환 원칙(LSP)은 하위 타입이 상위 타입을 대체했을 때 프로그램의 정확성이 깨지지 않아야 한다는 원칙입니다.",
  category: "Technology/SOLID",
  tags: ["theory","solid","lsp","oop"],
  content: ["## LSP란?", "Liskov Substitution Principle(리스코프 치환 원칙)은 하위 타입은 상위 타입을 대체했을 때, 프로그램의 정확성이 깨지지 않아야 한다는 원칙입니다.", "", "## 위반 예시", "Rectangle을 상속한 Square가 setWidth/setHeight 시 상위 타입과 다르게 동작하는 경우.", "", "## 개선 예시", "Square가 Rectangle을 상속하지 않고, 공통 인터페이스 Shape로 분리하면 LSP를 지킬 수 있습니다.", "", "---", "### 요약", "LSP는 하위 타입이 상위 타입의 계약을 지켜야 한다는 원칙입니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
