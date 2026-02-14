<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "docker-pros-cons-use-cases",
  title: "도커의 장점, 단점, 용도",
  date: "2026-02-11",
  summary: "도커의 장점(일관된 환경, 빠른 배포 등), 단점(보안·디버깅 한계 등), 적합한 용도를 정리합니다.",
  category: "Technology/Docker",
  tags: ["docker","pros","cons","use-cases","devops"],
  content: ["## 장점", "- 환경 일관성, 빠른 배포, 리소스 효율, 마이크로서비스에 적합", "", "## 단점", "- 보안·격리 한계, 디버깅 복잡도, 학습 곡선", "", "## 용도", "앱 배포, 로컬 개발, CI/CD, 테스트·스테이징, 마이크로서비스", "", "---", "### 요약", "도커는 환경 일관성과 배포 효율에서 강점이 있습니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
