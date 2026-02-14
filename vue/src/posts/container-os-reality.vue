<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "container-os-reality",
  title: "컨테이너에서 돌아가는 OS의 실체",
  date: "2026-02-11",
  summary: "컨테이너 안의 Alpine/Ubuntu는 전체 OS가 아니라 rootfs입니다. 커널은 호스트와 공유합니다.",
  category: "Technology/Docker",
  tags: ["docker","container","os","rootfs","kernel"],
  content: ["## 핵심", "컨테이너에 있는 건 OS 전체가 아니라 rootfs(파일 트리 + 도구)입니다. 커널은 호스트와 공유하고, Alpine/Ubuntu 베이스 이미지는 그 파일 구조와 유틸리티를 제공할 뿐입니다.", "", "---", "### 요약", "컨테이너의 OS는 rootfs이며, 커널은 호스트 것을 공유합니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
