<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "java-basic-structure",
  title: "Java 기본 구조 (package, class, main)",
  date: "2026-02-17",
  summary: "Java 패키지, 클래스, main 메서드, System.out.println 등 프로그램의 기본 구조를 정리합니다.",
  category: "Coding/Java",
  tags: ["java", "패키지", "main", "기본구조", "basics"],
  content: [
    "## Java 프로그램 기본 구조",
    "```java",
    "package exam02_char;",
    "",
    "public class CharExample {",
    "    public static void main(String[] args) {",
    "        System.out.println(\"Hello\");",
    "    }",
    "}",
    "```",
    "",
    "## package",
    "클래스가 속한 패키지(폴더)를 선언합니다. **파일 첫 줄**에 위치합니다.",
    "",
    "```java",
    "package sec06.exam08_advanced_for;",
    "```",
    "",
    "## class",
    "Java는 클래스 단위로 구성됩니다. 파일명과 public 클래스명은 **동일**해야 합니다.",
    "",
    "## main 메서드",
    "프로그램 실행 시 가장 먼저 호출되는 진입점입니다.",
    "",
    "```java",
    "public static void main(String[] args) {",
    "    // 프로그램 시작",
    "}",
    "```",
    "",
    "| 요소 | 의미 |",
    "|------|------|",
    "| public | 외부에서 접근 가능 |",
    "| static | 클래스 로딩 시 실행, 인스턴스 없이 호출 |",
    "| void | 반환값 없음 |",
    "| String[] args | 명령행 인자 |",
    "",
    "## 출력",
    "```java",
    "System.out.println(\"한 줄 출력 후 줄바꿈\");",
    "System.out.print(\"줄바꿈 없음\");",
    "System.out.printf(\"%s\\t%d\\n\", name, score);",
    "```",
    "",
    "---",
    "### 요약",
    "- `package 패키지명;`",
    "- `public class 클래스명` (파일명과 동일)",
    "- `public static void main(String[] args)` 진입점"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
