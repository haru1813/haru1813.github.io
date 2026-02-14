<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "docker-core-concepts",
  title: "도커 핵심 개념: 도커, 컨테이너, 도커 엔진, 이미지",
  date: "2026-02-11",
  summary: "도커(Docker)와 컨테이너, 도커 엔진, 이미지의 개념과 이들 간의 관계를 정리합니다.",
  category: "Technology/Docker",
  tags: ["docker","container","image","engine","devops"],
  content: ["## 한 줄 요약", "- 도커: 컨테이너 기반 앱을 실행·배포하는 플랫폼", "- 컨테이너: 격리된 실행 환경", "- 도커 엔진: 컨테이너를 생성·실행·관리하는 핵심 프로그램", "- 이미지: 컨테이너를 만들기 위한 읽기 전용 템플릿", "", "## 관계", "이미지 → 도커 엔진 → 컨테이너 생성·실행", "", "## 도커 엔진 구성", "| 구성요소 | 역할 |", "|----------|------|", "| dockerd | 데몬, 이미지 받아와 컨테이너 생성·실행·관리 |", "| containerd | 컨테이너 런타임 관리 |", "| runc | 실제 컨테이너 프로세스 생성 |", "", "---", "### 요약", "도커는 이미지로 컨테이너를 만들고, 도커 엔진(dockerd, containerd, runc)이 이를 관리합니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
