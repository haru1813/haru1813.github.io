<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "java-exception",
  title: "Java 예외 처리 (try-catch)",
  date: "2026-02-17",
  summary: "Java try-catch, catch 다중 처리, finally로 예외를 처리하는 방법을 정리합니다.",
  category: "Coding/Java",
  tags: ["java", "예외처리", "try", "catch", "basics"],
  content: [
    "## try-catch 기본",
    "예외가 발생할 수 있는 코드를 `try` 블록에 넣고, `catch`로 처리합니다.",
    "",
    "```java",
    "try {",
    "    Socket socket = serverSocket.accept();",
    "    // 예외 가능 코드",
    "} catch (Exception e) {",
    "    break;",
    "}",
    "```",
    "",
    "## 다중 catch",
    "예외 타입별로 다른 처리를 할 수 있습니다.",
    "",
    "```java",
    "try {",
    "    int result = Integer.parseInt(input);",
    "} catch (NumberFormatException e) {",
    "    System.out.println(\"숫자가 아닙니다\");",
    "} catch (Exception e) {",
    "    System.out.println(\"기타 오류: \" + e.getMessage());",
    "}",
    "```",
    "",
    "## finally",
    "예외 발생 여부와 관계없이 **항상** 실행됩니다. 리소스 정리 등에 사용합니다.",
    "",
    "```java",
    "try {",
    "    // risky code",
    "} catch (Exception e) {",
    "    e.printStackTrace();",
    "} finally {",
    "    // 항상 실행 (리소스 해제 등)",
    "}",
    "```",
    "",
    "## try-with-resources (Java 7+)",
    "AutoCloseable을 구현한 리소스는 자동으로 close됩니다.",
    "",
    "```java",
    "try (FileInputStream fis = new FileInputStream(\"file.txt\")) {",
    "    // 사용",
    "} catch (IOException e) {",
    "    // 처리",
    "}",
    "```",
    "",
    "---",
    "### 요약",
    "- `try { } catch (예외타입 e) { }`",
    "- `finally`: 예외 유무와 관계없이 실행",
    "- `try-with-resources`로 자동 close"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
