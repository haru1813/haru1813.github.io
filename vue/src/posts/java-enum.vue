<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "java-enum",
  title: "Java 열거형 (enum)",
  date: "2026-02-17",
  summary: "Java enum 정의, 상수 사용, switch와 함께 사용하는 방법을 정리합니다.",
  category: "Coding/Java",
  tags: ["java", "enum", "열거형", "basics"],
  content: [
    "## enum이란?",
    "한정된 상수 목록을 정의하는 타입입니다. `enum` 키워드로 선언합니다.",
    "",
    "```java",
    "public enum Week {",
    "    SUNDAY,",
    "    MONDAY,",
    "    TUESDAY,",
    "    WEDNESDAY,",
    "    THURSDAY,",
    "    FRIDAY,",
    "    SATURDAY",
    "}",
    "```",
    "",
    "## enum 사용",
    "```java",
    "Week today = Week.MONDAY;",
    "Week[] days = Week.values();  // 모든 상수 배열",
    "",
    "for (Week day : days) {",
    "    System.out.println(day);",
    "}",
    "```",
    "",
    "## switch와 enum",
    "```java",
    "Week today;",
    "switch (weekNumber) {",
    "    case 1: today = Week.SUNDAY; break;",
    "    case 2: today = Week.MONDAY; break;",
    "    case 3: today = Week.TUESDAY; break;",
    "    // ...",
    "}",
    "```",
    "",
    "## enum 메서드",
    "| 메서드 | 설명 |",
    "|--------|------|",
    "| values() | 모든 상수 배열 반환 |",
    "| valueOf(String) | 이름으로 상수 반환 |",
    "| name() | 상수 이름 문자열 |",
    "| ordinal() | 순번 (0부터) |",
    "",
    "---",
    "### 요약",
    "- `enum 이름 { 상수1, 상수2, ... }`",
    "- 타입 안전한 상수 집합",
    "- switch문에서 자주 사용"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
