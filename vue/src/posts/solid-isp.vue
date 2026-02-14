<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "solid-isp",
  title: "SOLID-Interface Segregation Principle(인터페이스 분리 원칙)",
  date: "2026-02-11",
  summary: "인터페이스 분리 원칙(ISP)은 클라이언트가 사용하지 않는 메서드에 의존하지 않아야 한다는 원칙입니다.",
  category: "Technology/SOLID",
  tags: ["theory","solid","isp","oop"],
  content: ["## ISP란?", "Interface Segregation Principle(인터페이스 분리 원칙)은 클라이언트는 자신이 사용하지 않는 메서드에 의존해서는 안 된다는 원칙입니다.", "", "큰 인터페이스 하나보다, 작고 구체적인 인터페이스 여러 개가 낫습니다.", "", "---", "### 요약", "ISP는 클라이언트별로 필요한 메서드만 노출하는 원칙입니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
