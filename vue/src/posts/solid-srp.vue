<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "solid-srp",
  title: "SOLID-Single Responsibility Principle(단일 책임 원칙)",
  date: "2026-02-11",
  summary: "단일 책임 원칙(SRP)은 한 클래스가 하나의 변경 이유만 가져야 한다는 원칙입니다.",
  category: "Technology/SOLID",
  tags: ["theory","solid","srp","oop"],
  content: ["## SRP란?", "Single Responsibility Principle(단일 책임 원칙)은 한 클래스가 하나의 책임만, 즉 하나의 변경 이유만 가져야 한다는 원칙입니다.", "", "## 위반 예시", "User 클래스가 사용자 정보 저장 + 이메일 발송 + 로그 기록을 모두 담당하면 SRP 위반입니다.", "", "```java", "public class User {", "    public void save() { /* DB 저장 */ }", "    public void sendEmail() { /* 이메일 발송 */ }", "    public void log() { /* 로그 기록 */ }", "}", "```", "", "## 개선 예시", "```java", "public class User { /* 데이터만 */ }", "public class UserRepository { public void save(User u) { } }", "public class EmailService { public void send(User u, String msg) { } }", "```", "", "---", "### 요약", "SRP는 하나의 클래스가 하나의 변경 이유만 가지도록 책임을 분리하는 원칙입니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
