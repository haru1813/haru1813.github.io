<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "solid-lsp",
  title: "SOLID-Liskov Substitution Principle(리스코프 치환 원칙)",
  date: "2026-02-11",
  summary: "리스코프 치환 원칙(LSP)은 하위 타입이 상위 타입을 대체했을 때 프로그램의 정확성이 깨지지 않아야 한다는 원칙입니다.",
  category: "Technology/SOLID",
  tags: ["theory","solid","lsp","oop"],
  content: ["## LSP란?", "Liskov Substitution Principle(리스코프 치환 원칙)은 하위 타입은 상위 타입을 대체했을 때, 프로그램의 정확성이 깨지지 않아야 한다는 원칙입니다.", "", "## 위반 예시", "Rectangle을 상속한 Square가 setWidth/setHeight 시 상위 타입과 다르게 동작하는 경우.", "", "## 개선 예시", "Square가 Rectangle을 상속하지 않고, 공통 인터페이스 Shape로 분리하면 LSP를 지킬 수 있습니다.", "", "## Unity C# 예제 (게임)", "`IDamageable`를 구현한 적은 모두 `TakeDamage`가 일관되게 동작해야 합니다. 상위 타입을 대체했을 때 예상과 다르게 동작하면 LSP 위반입니다.", "", "### 위반 예", "```csharp", "public interface IDamageable { void TakeDamage(int amount); }", "", "public class Enemy : IDamageable {", "    public void TakeDamage(int amount) { hp -= amount; }", "}", "", "// 유령은 '피해를 무시' - 상위 타입 대체 시 동작이 달라짐", "public class GhostEnemy : IDamageable {", "    public void TakeDamage(int amount) { /* 아무것도 안 함 - LSP 위반 */ }", "}", "```", "", "### 개선 예", "```csharp", "public interface IDamageable { void TakeDamage(int amount); }", "", "// 유령은 물리 공격에만 면역이면, 별도 인터페이스로", "public interface IPhysicalDamageable : IDamageable { }", "", "public class GhostEnemy : IDamageable {", "    public void TakeDamage(int amount) {", "        // 유령도 '데미지를 받는다' - 0이라도 감소 연산 적용 등", "        // 또는 IDamageable을 상속하지 않고 IElementalDamageable만 구현", "    }", "}", "```", "", "핵심: `IDamageable`로 교체했을 때 호출자는 '데미지가 적용된다'고 기대할 수 있어야 합니다.", "", "---", "### 요약", "LSP는 하위 타입이 상위 타입의 계약을 지켜야 한다는 원칙입니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
