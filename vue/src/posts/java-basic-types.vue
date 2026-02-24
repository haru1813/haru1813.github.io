<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "java-basic-types",
  title: "Java 기본 타입과 변수",
  date: "2026-02-17",
  summary: "Java의 기본(원시) 타입 int, double, char, boolean과 변수 선언, 리터럴, 유니코드를 정리합니다.",
  category: "Coding/Java",
  tags: ["java", "기본타입", "변수", "char", "int", "basics"],
  content: [
    "## 기본 타입 (Primitive Type)",
    "Java의 기본 타입은 8가지입니다. 참조 타입과 달리 값 자체를 저장합니다.",
    "",
    "| 타입 | 크기 | 범위/설명 |",
    "|------|------|----------|",
    "| byte | 1 byte | -128 ~ 127 |",
    "| short | 2 byte | -32768 ~ 32767 |",
    "| int | 4 byte | 정수 기본 |",
    "| long | 8 byte | 정수 (L 접미사) |",
    "| float | 4 byte | 실수 (f 접미사) |",
    "| double | 8 byte | 실수 기본 |",
    "| char | 2 byte | 유니코드 문자 1개 |",
    "| boolean | 1 bit | true / false |",
    "",
    "## 변수 선언",
    "```java",
    "int score = 90;",
    "double avg = 85.5;",
    "boolean run = true;",
    "char grade = 'A';",
    "```",
    "",
    "## char 타입",
    "char는 문자 1개를 저장합니다. 작은따옴표 `'`를 사용하고, 유니코드로도 지정 가능합니다.",
    "",
    "```java",
    "char c1 = 'A';",
    "char c2 = 65;        // 'A'와 동일",
    "char c3 = '\\u0041'; // 유니코드 'A'",
    "",
    "char c4 = '가';",
    "char c5 = 44032;     // '가'의 코드",
    "char c6 = '\\uAC00'; // 유니코드 '가'",
    "",
    "int uniCode = c1;    // char → int (코드값)",
    "```",
    "",
    "## 리터럴",
    "| 리터럴 | 예시 |",
    "|--------|------|",
    "| 정수 | 10, 100L |",
    "| 실수 | 3.14, 3.14f |",
    "| 문자 | 'A', '가' |",
    "| 문자열 | \"Hello\" (String) |",
    "| 논리 | true, false |",
    "",
    "---",
    "### 요약",
    "- 기본 타입 8종: byte, short, int, long, float, double, char, boolean",
    "- char는 유니코드 문자 1개, 작은따옴표 사용",
    "- 리터럴: 정수 L, 실수 f 접미사"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
