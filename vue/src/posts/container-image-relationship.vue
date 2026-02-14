<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "container-image-relationship",
  title: "컨테이너와 이미지의 관계",
  date: "2026-02-11",
  summary: "이미지는 읽기 전용 템플릿, 컨테이너는 그 이미지로부터 생성된 실행 인스턴스입니다.",
  category: "Technology/Docker",
  tags: ["docker","container","image","relationship","layers"],
  content: ["## 한 줄 요약", "- 이미지: 컨테이너를 만들기 위한 읽기 전용 템플릿", "- 컨테이너: 이미지를 기반으로 생성된, 실행 중인 인스턴스", "", "## 클래스와 객체 비유", "| 개념 | 프로그래밍 비유 |", "|------|-----------------|", "| 이미지 | 클래스(설계도) |", "| 컨테이너 | 객체(인스턴스) |", "", "다만 docker commit으로 컨테이너 → 이미지가 가능해 경계가 일방향만은 아닙니다.", "", "## 핵심 정리", "- 이미지가 있으면 컨테이너를 만들 수 있음", "- 같은 이미지 → 여러 컨테이너(1:N)", "", "---", "### 요약", "이미지는 읽기 전용 템플릿, 컨테이너는 그 이미지로부터 만들어진 실행 인스턴스입니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
