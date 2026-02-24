<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "java-abstract-class",
  title: "Java 추상 클래스 (abstract)",
  date: "2026-02-17",
  summary: "Java 추상 클래스, abstract 메서드, 구현 클래스에서의 오버라이드를 정리합니다.",
  category: "Coding/Java",
  tags: ["java", "추상클래스", "abstract", "basics"],
  content: [
    "## 추상 클래스란?",
    "`abstract`로 선언된 클래스입니다. **직접 인스턴스 생성이 불가**하고, 상속받은 하위 클래스에서만 인스턴스를 만듭니다.",
    "",
    "```java",
    "public abstract class Animal {",
    "    public String kind;",
    "",
    "    public abstract void sound();  // 추상 메서드",
    "}",
    "```",
    "",
    "## 추상 메서드",
    "몸체가 없고, 하위 클래스에서 **반드시 오버라이드**해야 합니다.",
    "",
    "```java",
    "public class Dog extends Animal {",
    "    public Dog() {",
    "        this.kind = \"포유류\";",
    "    }",
    "",
    "    @Override",
    "    public void sound() {",
    "        System.out.println(\"멍멍\");",
    "    }",
    "}",
    "",
    "public class Cat extends Animal {",
    "    public Cat() {",
    "        this.kind = \"포유류\";",
    "    }",
    "",
    "    @Override",
    "    public void sound() {",
    "        System.out.println(\"야옹\");",
    "    }",
    "}",
    "```",
    "",
    "## 추상 클래스 vs 인터페이스",
    "",
    "- **상속**: 추상 클래스는 단일 상속만, 인터페이스는 다중 구현 가능",
    "- **필드**: 추상 클래스는 인스턴스/정적 필드 가능, 인터페이스는 상수만",
    "- **생성자**: 추상 클래스는 있음, 인터페이스는 없음",
    "",
    "---",
    "### 요약",
    "- `abstract class`: 직접 new 불가, 상속으로만 사용",
    "- `abstract 메서드`: 하위 클래스에서 반드시 구현"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
