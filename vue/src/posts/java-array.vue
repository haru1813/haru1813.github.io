<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "java-array",
  title: "Java 배열 (Array)",
  date: "2026-02-17",
  summary: "Java 배열의 선언, 생성, 초기화, 2차원 배열, 참조 타입 배열을 정리합니다.",
  category: "Coding/Java",
  tags: ["java", "배열", "array", "basics"],
  content: [
    "## 1차원 배열",
    "```java",
    "int[] scores = { 95, 71, 84, 93, 87 };",
    "int[] arr = new int[5];",
    "arr[0] = 10;",
    "```",
    "",
    "## 2차원 배열",
    "```java",
    "int[][] mathScores = new int[2][3];",
    "for (int i = 0; i < mathScores.length; i++) {",
    "    for (int k = 0; k < mathScores[i].length; k++) {",
    "        System.out.println(mathScores[i][k]);",
    "    }",
    "}",
    "```",
    "",
    "## 가변 배열",
    "행마다 열 개수가 다를 수 있습니다.",
    "",
    "```java",
    "int[][] englishScores = new int[2][];",
    "englishScores[0] = new int[2];",
    "englishScores[1] = new int[3];",
    "",
    "int[][] javaScores = { { 95, 80 }, { 92, 96, 80 } };",
    "```",
    "",
    "## 참조 타입 배열",
    "배열에 객체 참조를 저장합니다. `==`는 참조 비교, `equals()`는 내용 비교입니다.",
    "",
    "```java",
    "String[] strArray = new String[3];",
    "strArray[0] = \"Java\";",
    "strArray[1] = \"Java\";",
    "strArray[2] = new String(\"Java\");",
    "",
    "System.out.println(strArray[0] == strArray[1]);  // true (같은 리터럴)",
    "System.out.println(strArray[0] == strArray[2]);  // false (다른 객체)",
    "System.out.println(strArray[0].equals(strArray[2]));  // true (내용 같음)",
    "```",
    "",
    "---",
    "### 요약",
    "- `타입[] 변수 = new 타입[길이]` 또는 `{값1, 값2}`",
    "- 2차원: `new int[행][열]` 또는 가변 `new int[행][]`",
    "- 참조 비교 `==`, 내용 비교 `equals()`"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
