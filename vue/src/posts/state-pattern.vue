<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "state-pattern",
  title: "State(상태) 패턴 [행위]",
  date: "2026-02-11",
  summary: "상태에 따라 동작이 달라질 때 조건문 대신 상태 객체로 분리하는 패턴.",
  category: "Technology/Design-Pattern",
  tags: ["theory","design-pattern","oop"],
  content: ["## State(상태) 패턴이란?", "State 패턴은 객체의 상태에 따라 동작이 달라질 때, `if/else`나 `switch` 대신 상태를 객체로 분리하는 패턴입니다. 각 상태를 별도 클래스로 두고, Context가 현재 상태 객체에 위임합니다.", "", "핵심은 이거예요:", "- State(인터페이스)를 여러 상태 클래스가 구현하고, Context가 현재 상태를 보유", "- 이벤트(버튼 클릭 등) 발생 시 현재 상태의 `handle()`를 호출하고, 필요하면 상태 전환", "", "## 언제 필요할까", "- 상태가 여러 개이고, 각 상태마다 동작이 크게 다를 때", "- `if (state == A) ... else if (state == B) ...` 분기가 계속 늘어날 때", "- 상태 전환 로직을 명확히 하고 싶을 때", "", "## 장점/단점(현실적으로)", "### 장점", "- 각 상태를 독립된 클래스로 관리해 가독성 향상", "- 새 상태 추가 시 기존 상태 수정 없이 클래스 추가", "- 상태 전환 로직이 상태 객체 내에 모여 유지보수가 쉬움", "", "### 단점", "- 상태가 적고 단순하면 오버엔지니어링일 수 있음", "- 상태 클래스가 늘어날 수 있음", "", "## Java 예제", "자동판매기(동전 없음/있음/매진) 상태를 State 패턴으로 구현한 예제입니다.", "", "### 1) State(인터페이스)", "```java", "interface VendingState {", "    void insertCoin();", "    void ejectCoin();", "    void select();", "}", "```", "", "### 2) ConcreteState", "```java", "class NoCoinState implements VendingState {", "    private final VendingMachine vm;", "    NoCoinState(VendingMachine vm) { this.vm = vm; }", "    public void insertCoin() {", "        System.out.println(\"동전 투입\");", "        vm.setState(vm.getHasCoinState());", "    }", "    public void ejectCoin() { System.out.println(\"동전 없음\"); }", "    public void select() { System.out.println(\"동전을 넣어주세요\"); }", "}", "", "class HasCoinState implements VendingState {", "    private final VendingMachine vm;", "    HasCoinState(VendingMachine vm) { this.vm = vm; }", "    public void insertCoin() { System.out.println(\"이미 동전 있음\"); }", "    public void ejectCoin() {", "        System.out.println(\"동전 반환\");", "        vm.setState(vm.getNoCoinState());", "    }", "    public void select() {", "        System.out.println(\"음료 선택\");", "        vm.setState(vm.getSoldState());", "    }", "}", "", "class SoldState implements VendingState {", "    private final VendingMachine vm;", "    SoldState(VendingMachine vm) { this.vm = vm; }", "    public void insertCoin() { System.out.println(\"대기 중\"); }", "    public void ejectCoin() { System.out.println(\"이미 선택됨\"); }", "    public void select() { System.out.println(\"음료 배출\"); vm.setState(vm.getNoCoinState()); }", "}", "```", "", "### 3) Context(VendingMachine)", "```java", "class VendingMachine {", "    private VendingState state;", "    private final VendingState noCoin, hasCoin, sold;", "    public VendingMachine() {", "        noCoin = new NoCoinState(this);", "        hasCoin = new HasCoinState(this);", "        sold = new SoldState(this);", "        state = noCoin;", "    }", "    void setState(VendingState s) { state = s; }", "    VendingState getNoCoinState() { return noCoin; }", "    VendingState getHasCoinState() { return hasCoin; }", "    VendingState getSoldState() { return sold; }", "    public void insertCoin() { state.insertCoin(); }", "    public void ejectCoin() { state.ejectCoin(); }", "    public void select() { state.select(); }", "}", "```", "", "## 정리", "- State 패턴은 상태에 따른 동작을 객체로 분리하는 패턴입니다. 유한 상태 기계(FSM), 주문 상태, 재생/일시정지 플레이어 등에 적합합니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
