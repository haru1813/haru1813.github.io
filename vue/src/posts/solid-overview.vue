<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "solid-overview",
  title: "SOLID 원칙 개요",
  date: "2026-02-11",
  summary: "SOLID는 객체지향 설계의 5가지 핵심 원칙입니다. Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion를 한눈에 정리합니다.",
  category: "Technology/SOLID",
  tags: ["theory","solid","oop","design-principles"],
  content: ["## SOLID란?", "SOLID는 로버트 C. 마틴(Robert C. Martin)이 정리한 객체지향 설계의 5가지 핵심 원칙의 머리글자입니다.", "", "| 원칙 | 영어 | 한글 | 한 줄 요약 |", "|------|------|------|------------|", "| S | Single Responsibility | 단일 책임 | 한 클래스는 하나의 변경 이유만 |", "| O | Open/Closed | 개방-폐쇄 | 확장에는 열려 있고, 수정에는 닫혀 있어야 함 |", "| L | Liskov Substitution | 리스코프 치환 | 하위 타입은 상위 타입을 대체 가능해야 함 |", "| I | Interface Segregation | 인터페이스 분리 | 사용하지 않는 메서드에 의존하지 말 것 |", "| D | Dependency Inversion | 의존성 역전 | 구체가 아니라 추상에 의존할 것 |", "", "## 왜 SOLID를 지킬까", "- 유지보수성: 변경 범위를 줄이고, 버그를 줄임", "- 테스트 용이성: 의존성 분리/역전으로 테스트가 쉬워짐", "- 확장성: 새 기능 추가 시 기존 코드 수정 최소화", "", "---", "### 요약", "SOLID는 변경에 강한 설계를 위한 5가지 원칙입니다. SRP, OCP, LSP, ISP, DIP를 순서대로 익히면 좋습니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
