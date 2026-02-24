<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "solid-ocp",
  title: "SOLID-Open/Closed Principle(개방-폐쇄 원칙)",
  date: "2026-02-11",
  summary: "개방-폐쇄 원칙(OCP)은 확장에는 열려 있고, 수정에는 닫혀 있어야 한다는 원칙입니다.",
  category: "Technology/SOLID",
  tags: ["theory","solid","ocp","oop"],
  content: ["## OCP란?", "Open/Closed Principle(개방-폐쇄 원칙)은 소프트웨어 요소는 확장에는 열려 있으나 수정에는 닫혀 있어야 한다는 원칙입니다.", "", "## 요약", "새 기능 추가 시 기존 코드를 수정하지 않고, 확장(새 클래스/인터페이스 구현)으로 처리합니다.", "", "## Unity C# 예제 (게임)", "데미지 타입별 계산을 `if/else`로 분기하면 새 타입 추가 시 기존 코드를 수정해야 합니다. 확장으로 처리합니다.", "", "### 위반 예 (수정에 열려 있음)", "```csharp", "public int CalculateDamage(int baseDmg, string damageType) {", "    if (damageType == \"Physical\") return baseDmg;", "    if (damageType == \"Fire\") return baseDmg * 2;", "    if (damageType == \"Ice\") return baseDmg + 10;", "    return baseDmg;", "}", "```", "", "### 개선 예 (확장에 열려 있음)", "```csharp", "public interface IDamageModifier { int Modify(int baseDamage); }", "public class PhysicalModifier : IDamageModifier { public int Modify(int d) => d; }", "public class FireModifier : IDamageModifier { public int Modify(int d) => d * 2; }", "public class IceModifier : IDamageModifier { public int Modify(int d) => d + 10; }", "", "public class DamageCalculator {", "    public int Calculate(int baseDmg, IDamageModifier modifier) => modifier.Modify(baseDmg);", "}", "```", "", "새 타입(Poison, Lightning) 추가 시 `IDamageModifier` 구현체만 추가하면 됩니다.", "", "---", "### 요약", "OCP는 확장에는 열려 있고 수정에는 닫혀 있어야 한다는 원칙입니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
