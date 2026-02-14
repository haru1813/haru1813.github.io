<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "docker-hub",
  title: "도커 허브(Docker Hub)란?",
  date: "2026-02-11",
  summary: "Docker Hub는 도커 이미지를 저장·공유하는 공식 레지스트리 서비스입니다.",
  category: "Technology/Docker",
  tags: ["docker","docker-hub","registry","image","pull","push"],
  content: ["## 한 줄 요약", "Docker Hub는 도커 이미지를 저장·공유하는 클라우드 레지스트리입니다. GitHub가 코드를, Docker Hub는 이미지를 호스팅합니다.", "", "## 주요 기능", "| 기능 | 설명 |", "|------|------|", "| pull | docker pull로 이미지 받기 |", "| push | docker push로 이미지 올리기 |", "| 공개/비공개 | 저장소 공개 여부 설정 |", "", "---", "### 요약", "Docker Hub는 docker pull, docker push의 기본 대상 레지스트리입니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
