<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "strategy-pattern",
  title: "Strategy(전략) 패턴 [행위]",
  date: "2026-02-11",
  summary: "알고리즘을 교체 가능하게 만드는 패턴. 결제 방식, 정렬 방식 등에 사용됩니다.",
  category: "Technology/Design-Pattern",
  tags: ["theory","design-pattern","oop"],
  content: ["## Strategy(전략) 패턴이란?", "Strategy 패턴은 알고리즘(동작)을 교체 가능하게 만드는 패턴입니다. 결제 방식, 정렬 방식, 할인 정책처럼 '어떻게 할지'를 런타임에 바꿔 끼우고 싶을 때 사용합니다.", "", "핵심은 이거예요:", "- Strategy(인터페이스)를 여러 구현체가 구현하고, Context가 그 중 하나를 가지고 있음", "- `if/else`나 `switch`로 분기하는 대신 전략 객체를 주입해서 교체", "", "## 언제 필요할까", "- 같은 목적(결제, 정렬, 할인)에 대해 여러 방식이 있고, 상황에 따라 바꿔 쓰고 싶을 때", "- `if (type == A) ... else if (type == B) ...` 분기가 계속 늘어날 때", "- 알고리즘을 독립적으로 테스트하고 싶을 때", "", "## 장점/단점(현실적으로)", "### 장점", "- 분기문 감소, 가독성 향상", "- 새 전략 추가 시 기존 코드 수정 없이 구현체만 추가", "- 각 전략을 단위 테스트하기 쉬움", "", "### 단점", "- 전략 클래스가 늘어날 수 있음", "- 단순한 경우 람다/함수로 충분할 수 있음", "", "## Java 예제", "결제 방식을 카드/페이팔/암호화폐로 교체하는 예제입니다.", "", "### 1) Strategy(인터페이스)", "```java", "interface PaymentStrategy {", "    void pay(int amount);", "}", "```", "", "### 2) ConcreteStrategy", "```java", "class CardPayment implements PaymentStrategy {", "    public void pay(int amount) {", "        System.out.println(\"카드 결제: \" + amount);", "    }", "}", "class PayPalPayment implements PaymentStrategy {", "    public void pay(int amount) {", "        System.out.println(\"페이팔 결제: \" + amount);", "    }", "}", "```", "", "### 3) Context", "```java", "class Checkout {", "    private PaymentStrategy strategy;", "    public void setStrategy(PaymentStrategy s) { strategy = s; }", "    public void checkout(int amount) {", "        if (strategy == null) throw new IllegalStateException(\"strategy not set\");", "        strategy.pay(amount);", "    }", "}", "```", "", "### 4) Client", "```java", "Checkout c = new Checkout();", "c.setStrategy(new CardPayment());", "c.checkout(10000);", "c.setStrategy(new PayPalPayment());", "c.checkout(5000);", "```", "", "## 정리", "- Strategy는 알고리즘을 객체로 분리해 교체 가능하게 만드는 패턴입니다. Java의 `Comparator`, `ThreadPoolExecutor`의 `RejectedExecutionHandler` 등이 이 패턴을 사용합니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
