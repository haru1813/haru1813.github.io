<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "solid-isp",
  title: "SOLID-Interface Segregation Principle(인터페이스 분리 원칙)",
  date: "2026-02-11",
  summary: "인터페이스 분리 원칙(ISP)은 클라이언트가 사용하지 않는 메서드에 의존하지 않아야 한다는 원칙입니다.",
  category: "Technology/SOLID",
  tags: ["theory","solid","isp","oop"],
  content: ["## ISP란?", "Interface Segregation Principle(인터페이스 분리 원칙)은 클라이언트는 자신이 사용하지 않는 메서드에 의존해서는 안 된다는 원칙입니다.", "", "큰 인터페이스 하나보다, 작고 구체적인 인터페이스 여러 개가 낫습니다.", "", "## Unity C# 예제 (게임)", "`IEnemy`에 Move, Attack, Fly를 모두 넣으면, 지상 유닛은 Fly를 쓰지 않는데 의존하게 됩니다. 분리합니다.", "", "### 위반 예", "```csharp", "public interface IEnemy {", "    void Move(Vector3 target);", "    void Attack(GameObject target);", "    void Fly(float height);  // 지상 유닛은 불필요", "}", "", "public class GroundEnemy : IEnemy {", "    public void Fly(float height) { /* 빈 구현 또는 예외 */ }", "}", "```", "", "### 개선 예", "```csharp", "public interface IMovable { void Move(Vector3 target); }", "public interface IAttacker { void Attack(GameObject target); }", "public interface IFlyable { void Fly(float height); }", "", "public class GroundEnemy : IMovable, IAttacker { /* Fly 불필요 */ }", "public class FlyingEnemy : IMovable, IAttacker, IFlyable { /* 모두 구현 */ }", "```", "", "클라이언트는 필요한 인터페이스만 의존합니다.", "", "---", "### 요약", "ISP는 클라이언트별로 필요한 메서드만 노출하는 원칙입니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
