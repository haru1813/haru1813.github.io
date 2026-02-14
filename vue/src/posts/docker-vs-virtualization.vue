<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "docker-vs-virtualization",
  title: "도커 vs 가상화 기술(VM) 차이점",
  date: "2026-02-11",
  summary: "도커(컨테이너)와 전통적인 가상화(VM)의 차이를 정리합니다.",
  category: "Technology/Docker",
  tags: ["docker","virtualization","vm","container","comparison"],
  content: ["## 한눈에 비교", "| 구분 | 가상화(VM) | 도커(컨테이너) |", "|------|------------|----------------|", "| 격리 단위 | VM 전체(Guest OS 포함) | 프로세스·파일시스템·네트워크 |", "| OS | 각 VM마다 Guest OS 필요 | 호스트 커널 공유 |", "| 부팅 시간 | 수십 초~수 분 | 1초 이내 |", "", "---", "### 요약", "도커는 커널을 공유해 VM보다 가볍고 빠릅니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
