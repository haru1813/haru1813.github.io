<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "java-class-object",
  title: "Java 클래스와 객체",
  date: "2026-02-17",
  summary: "Java 클래스 정의, 생성자, 필드, 메서드, getter/setter, static, final을 정리합니다.",
  category: "Coding/Java",
  tags: ["java", "클래스", "객체", "생성자", "basics"],
  content: [
    "## 클래스 정의",
    "```java",
    "public class Account {",
    "    private int balance;",
    "    public static final int MIN_BALANCE = 0;",
    "    public static final int MAX_BALANCE = 1000000;",
    "",
    "    public int getBalance() {",
    "        return this.balance;",
    "    }",
    "",
    "    public void setBalance(int balance) {",
    "        if (balance < MIN_BALANCE || balance > MAX_BALANCE) return;",
    "        this.balance = balance;",
    "    }",
    "}",
    "```",
    "",
    "## 생성자",
    "객체 생성 시 호출됩니다. 이름은 클래스와 동일합니다.",
    "",
    "```java",
    "public class Person {",
    "    private String name;",
    "",
    "    public Person(String name) {",
    "        this.name = name;",
    "    }",
    "}",
    "```",
    "",
    "## this",
    "- `this.필드`: 인스턴스 필드 접근",
    "- `this(인자)`: 같은 클래스의 다른 생성자 호출",
    "",
    "## static, final",
    "| 키워드 | 설명 |",
    "|--------|------|",
    "| static | 클래스 공유, 인스턴스 없이 접근 |",
    "| final | 상수, 한 번 할당 후 변경 불가 |",
    "",
    "```java",
    "public static final int MAX = 100;  // 클래스 상수",
    "Account.MAX  // 인스턴스 없이 접근",
    "```",
    "",
    "## 접근 제어자",
    "| 제어자 | 범위 |",
    "|--------|------|",
    "| public | 모든 패키지 |",
    "| protected | 같은 패키지 + 상속 클래스 |",
    "| (default) | 같은 패키지 |",
    "| private | 같은 클래스 |",
    "",
    "---",
    "### 요약",
    "- `class 클래스명 { 필드; 생성자; 메서드; }`",
    "- `this`로 자신의 필드/생성자 참조",
    "- `static final`: 클래스 상수"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
