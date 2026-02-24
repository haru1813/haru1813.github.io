<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "java-interface",
  title: "Java 인터페이스 (interface)",
  date: "2026-02-17",
  summary: "Java 인터페이스 정의, implements, 추상 메서드 구현을 정리합니다.",
  category: "Coding/Java",
  tags: ["java", "인터페이스", "interface", "implements", "basics"],
  content: [
    "## 인터페이스란?",
    "구현 클래스가 따라야 할 메서드 규약을 정의합니다. `interface`로 선언하고, 메서드는 기본적으로 `public abstract`입니다.",
    "",
    "```java",
    "public interface Soundable {",
    "    String sound();",
    "}",
    "```",
    "",
    "## implements",
    "클래스가 인터페이스를 구현할 때 `implements`를 사용합니다. **모든 추상 메서드를 반드시 구현**해야 합니다.",
    "",
    "```java",
    "public class Dog implements Soundable {",
    "    @Override",
    "    public String sound() {",
    "        return \"멍멍\";",
    "    }",
    "}",
    "",
    "public class Cat implements Soundable {",
    "    @Override",
    "    public String sound() {",
    "        return \"야옹\";",
    "    }",
    "}",
    "```",
    "",
    "## 다형성",
    "인터페이스 타입으로 구현 객체를 참조할 수 있습니다.",
    "",
    "```java",
    "Soundable dog = new Dog();",
    "Soundable cat = new Cat();",
    "System.out.println(dog.sound());  // 멍멍",
    "System.out.println(cat.sound());  // 야옹",
    "```",
    "",
    "---",
    "### 요약",
    "- `interface`로 추상 메서드 규약 정의",
    "- `implements`로 클래스가 구현",
    "- 구현 클래스는 모든 추상 메서드 오버라이드 필요"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
