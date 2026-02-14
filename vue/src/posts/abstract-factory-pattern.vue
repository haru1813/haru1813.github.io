<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "abstract-factory-pattern",
  title: "Abstract Factory(추상 팩토리) 패턴 [생성]",
  date: "2026-02-11",
  summary: "관련된 여러 객체(제품군)를 한 묶음으로 생성하는 패턴. 제품군 단위로 구현을 교체할 수 있습니다.",
  category: "Technology/Design-Pattern",
  tags: ["theory","design-pattern","oop"],
  content: ["## Abstract Factory(추상 팩토리) 패턴이란?", "Abstract Factory는 관련된 여러 객체(제품군)를 한 묶음으로 생성하는 패턴입니다. Factory Method가 하나의 제품을 만든다면, Abstract Factory는 서로 연관된 제품들을 함께 만들어 호환성을 보장합니다.", "", "핵심은 이거예요:", "- 클라이언트는 추상 팩토리만 알면 되고, 구체적인 구현체(제품군)는 몰라도 됨", "- 제품군 단위로 전체 구현을 교체할 수 있어 테마/OS별 UI, DB별 드라이버 등에 적합", "", "## 언제 필요할까", "- 여러 관련 객체를 함께 생성해야 하고, 그 조합이 여러 종류(테마, 벤더, 환경)로 나뉜다", "- 제품군 간의 호환성을 보장해야 한다(예: Windows 버튼 + Windows 스크롤바)", "- 런타임에 제품군을 바꿔 끼우고 싶다", "", "## 장점/단점(현실적으로)", "### 장점", "- 제품군 교체가 쉬움: 한 팩토리만 바꾸면 됨", "- 호환성 보장: 관련 객체끼리 항상 맞는 조합으로 생성", "", "### 단점", "- 새 제품 종류를 추가하려면 추상 팩토리와 모든 구현체를 수정해야 함", "- 클래스가 많이 늘어날 수 있음", "", "## Java 예제", "GUI 테마(라이트/다크)별로 버튼과 스크롤바를 생성하는 상황을 예로 듭니다.", "", "### 1) Abstract Product(추상 제품)", "```java", "interface Button { void render(); }", "interface ScrollBar { void render(); }", "```", "", "### 2) Abstract Factory(추상 팩토리)", "```java", "interface GUIFactory {", "    Button createButton();", "    ScrollBar createScrollBar();", "}", "```", "", "### 3) Concrete Product & Factory", "```java", "class LightButton implements Button {", "    public void render() { System.out.println(\"[Light] Button\"); }", "}", "class LightScrollBar implements ScrollBar {", "    public void render() { System.out.println(\"[Light] ScrollBar\"); }", "}", "class LightGUIFactory implements GUIFactory {", "    public Button createButton() { return new LightButton(); }", "    public ScrollBar createScrollBar() { return new LightScrollBar(); }", "}", "", "class DarkButton implements Button {", "    public void render() { System.out.println(\"[Dark] Button\"); }", "}", "class DarkScrollBar implements ScrollBar {", "    public void render() { System.out.println(\"[Dark] ScrollBar\"); }", "}", "class DarkGUIFactory implements GUIFactory {", "    public Button createButton() { return new DarkButton(); }", "    public ScrollBar createScrollBar() { return new DarkScrollBar(); }", "}", "```", "", "### 4) Client", "```java", "void buildUI(GUIFactory factory) {", "    Button btn = factory.createButton();", "    ScrollBar sb = factory.createScrollBar();", "    btn.render();", "    sb.render();", "}", "buildUI(new LightGUIFactory());  // 라이트 테마", "buildUI(new DarkGUIFactory());   // 다크 테마", "```", "", "## 정리", "- Abstract Factory는 관련된 여러 객체를 한 묶음으로 생성하고, 제품군 단위 교체를 가능하게 합니다.", "- 테마, 벤더, 플랫폼별 구현 교체에 적합합니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
