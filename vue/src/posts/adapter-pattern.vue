<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "adapter-pattern",
  title: "Adapter(어댑터) 패턴 [구조]",
  date: "2026-02-11",
  summary: "인터페이스가 다른 객체를 우리가 기대하는 형태로 감싸는 패턴. 레거시·외부 라이브러리 연결에 유용합니다.",
  category: "Technology/Design-Pattern",
  tags: ["theory","design-pattern","oop"],
  content: ["## Adapter(어댑터) 패턴이란?", "Adapter 패턴은 인터페이스가 맞지 않는 객체를 우리가 기대하는 형태로 감싸서 연결하는 패턴입니다. 레거시 코드, 외부 라이브러리, 다른 팀의 모듈을 현재 코드에 맞게 붙일 때 사용합니다.", "", "핵심은 이거예요:", "- Adaptee(기존 객체)의 메서드를 Target(우리가 쓰는 인터페이스) 형태로 감싼다", "- 클라이언트는 Target만 알면 되고, 내부 구현(Adaptee)을 몰라도 됨", "", "## 언제 필요할까", "- 레거시나 외부 라이브러리 API가 우리 인터페이스와 다를 때", "- 기존 코드를 수정하지 않고 새 인터페이스에 맞게 연결하고 싶을 때", "- 여러 구현체를 하나의 공통 인터페이스로 통일해서 다루고 싶을 때", "", "## 장점/단점(현실적으로)", "### 장점", "- 기존 코드 수정 없이 새 인터페이스에 맞게 연결 가능", "- Adaptee와 클라이언트의 결합도를 낮춤", "", "### 단점", "- 어댑터 클래스가 늘어날 수 있음", "- Adaptee가 복잡하면 어댑터도 복잡해짐", "", "## Java 예제", "레거시 `LegacyLogger`(메서드명 `logMessage`)를 표준 `Logger` 인터페이스(`log`)에 맞추는 예제입니다.", "", "### 1) Target(우리가 쓰는 인터페이스)", "```java", "interface Logger {", "    void log(String message);", "}", "```", "", "### 2) Adaptee(레거시)", "```java", "class LegacyLogger {", "    public void logMessage(String msg) {", "        System.out.println(\"[Legacy] \" + msg);", "    }", "}", "```", "", "### 3) Adapter", "```java", "class LegacyLoggerAdapter implements Logger {", "    private final LegacyLogger legacy;", "    public LegacyLoggerAdapter(LegacyLogger legacy) { this.legacy = legacy; }", "    @Override", "    public void log(String message) {", "        legacy.logMessage(message);", "    }", "}", "```", "", "### 4) Client", "```java", "Logger logger = new LegacyLoggerAdapter(new LegacyLogger());", "logger.log(\"hello\");  // [Legacy] hello", "```", "", "## 정리", "- Adapter는 인터페이스가 다른 객체를 우리가 쓰는 형태로 감싸 연결하는 패턴입니다.", "- 레거시 통합, 외부 라이브러리 래핑에 자주 사용됩니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
