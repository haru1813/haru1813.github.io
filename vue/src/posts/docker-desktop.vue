<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "docker-desktop",
  title: "도커 데스크톱(Docker Desktop)이란?",
  date: "2026-02-11",
  summary: "Docker Desktop은 Windows와 Mac에서 도커를 쉽게 사용할 수 있게 해주는 GUI 애플리케이션입니다.",
  category: "Technology/Docker",
  tags: ["docker","docker-desktop","gui","windows","mac","wsl2"],
  content: ["## 한 줄 요약", "Docker Desktop은 Windows·Mac에서 도커 엔진을 쉽게 설치·실행할 수 있게 해주는 GUI 애플리케이션입니다.", "", "## 주요 기능", "- WSL2(Hyper-V) 위에 Linux 도커 엔진 실행", "- 컨테이너·이미지·볼륨 GUI 관리", "", "---", "### 요약", "Docker Desktop은 Windows·Mac에서 도커를 쉽게 쓸 수 있게 해주는 앱입니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
