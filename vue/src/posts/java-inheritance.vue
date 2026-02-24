<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "java-inheritance",
  title: "Java 상속 (extends)",
  date: "2026-02-17",
  summary: "Java 상속, extends, super(), 메서드 오버라이딩, @Override를 정리합니다.",
  category: "Coding/Java",
  tags: ["java", "상속", "extends", "super", "basics"],
  content: [
    "## extends",
    "자식 클래스가 부모 클래스의 필드와 메서드를 물려받습니다.",
    "",
    "```java",
    "public class Parent {",
    "    public String nation;",
    "",
    "    public Parent() {",
    "        this(\"대한민국\");",
    "        System.out.println(\"Parent() call\");",
    "    }",
    "",
    "    public Parent(String nation) {",
    "        this.nation = nation;",
    "    }",
    "}",
    "",
    "public class Child extends Parent {",
    "    private String name;",
    "",
    "    public Child() {",
    "        this(\"홍길동\");",
    "    }",
    "",
    "    public Child(String name) {",
    "        super();  // 부모 생성자 호출 (첫 줄에 위치)",
    "        this.name = name;",
    "    }",
    "}",
    "```",
    "",
    "## super()",
    "자식 생성자에서 부모 생성자를 호출합니다. **반드시 첫 줄**에 있어야 합니다.",
    "",
    "## super.멤버",
    "부모 클래스의 필드나 메서드에 접근할 때 사용합니다.",
    "",
    "## 메서드 오버라이딩",
    "자식이 부모 메서드를 재정의합니다. `@Override`로 명시합니다.",
    "",
    "```java",
    "public class Dog extends Animal {",
    "    @Override",
    "    public void sound() {",
    "        System.out.println(\"멍멍\");",
    "    }",
    "}",
    "```",
    "",
    "---",
    "### 요약",
    "- `class Child extends Parent`",
    "- `super()`: 부모 생성자 호출 (첫 줄)",
    "- `@Override`: 오버라이딩 메서드 표시"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
