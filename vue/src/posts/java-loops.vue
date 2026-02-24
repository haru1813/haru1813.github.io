<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "java-loops",
  title: "Java 반복문 (for, while)",
  date: "2026-02-17",
  summary: "Java의 for, enhanced for(향상된 for), while 반복문 문법을 정리합니다.",
  category: "Coding/Java",
  tags: ["java", "반복문", "for", "while", "basics"],
  content: [
    "## for문",
    "```java",
    "for (int i = 0; i < array.length; i++) {",
    "    System.out.println(array[i]);",
    "}",
    "```",
    "",
    "## 향상된 for문 (Enhanced For)",
    "배열이나 컬렉션의 각 요소를 순회합니다.",
    "",
    "```java",
    "int[] scores = { 95, 71, 84, 93, 87 };",
    "int sum = 0;",
    "",
    "for (int score : scores) {",
    "    sum += score;",
    "}",
    "System.out.println(\"점수 총합 = \" + sum);",
    "```",
    "",
    "## 2차원 배열 순회",
    "```java",
    "for (int i = 0; i < array.length; i++) {",
    "    for (int index : array[i]) {",
    "        sum += index;",
    "    }",
    "}",
    "```",
    "",
    "## while문",
    "조건이 true인 동안 반복합니다.",
    "",
    "```java",
    "boolean run = true;",
    "while (run) {",
    "    System.out.println(\"메뉴를 선택하세요\");",
    "    int select = scanner.nextInt();",
    "    if (select == 5) run = false;",
    "}",
    "```",
    "",
    "## 무한 루프",
    "```java",
    "while (true) {",
    "    // break로 탈출",
    "}",
    "```",
    "",
    "---",
    "### 요약",
    "- `for (초기; 조건; 증감)` 또는 `for (타입 변수 : 배열)`",
    "- `while (조건)`로 반복",
    "- 향상된 for는 인덱스 없이 요소만 순회"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
