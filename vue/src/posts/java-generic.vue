<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "java-generic",
  title: "Java 제네릭 (Generic)",
  date: "2026-02-17",
  summary: "Java 제네릭 클래스, 타입 파라미터, 제한된 타입 파라미터를 정리합니다.",
  category: "Coding/Java",
  tags: ["java", "제네릭", "generic", "basics"],
  content: [
    "## 제네릭이란?",
    "클래스·메서드에서 사용할 타입을 **나중에 지정**할 수 있게 하는 기능입니다. 타입 안전성을 높입니다.",
    "",
    "```java",
    "public class Person<T> {",
    "    private T name;",
    "",
    "    public Person(T name) {",
    "        this.name = name;",
    "    }",
    "",
    "    public T getName() {",
    "        return name;",
    "    }",
    "}",
    "",
    "Person<String> p = new Person<>(\"홍길동\");",
    "```",
    "",
    "## 제한된 타입 파라미터",
    "`extends`로 상한을 둘 수 있습니다.",
    "",
    "```java",
    "public class Storage<T extends Product> {",
    "    private T item;",
    "}",
    "",
    "public class ChildProduct<T, M> extends Product<T> implements Storage<M> {",
    "}",
    "```",
    "",
    "## 와일드카드",
    "`?`, `? extends T`, `? super T`로 유연한 타입 제한을 둘 수 있습니다.",
    "",
    "```java",
    "public void printCourse(Course<?> course) { }   // 모든 타입",
    "public void printCourse(Course<? extends Student> course) { }  // Student 하위",
    "```",
    "",
    "## 컬렉션에서의 제네릭",
    "```java",
    "List<String> list = new ArrayList<>();",
    "Map<String, Integer> map = new HashMap<>();",
    "```",
    "",
    "---",
    "### 요약",
    "- `클래스명<T>`: 타입 파라미터",
    "- `extends`로 상한 제한",
    "- 컬렉션 `List<T>`, `Map<K,V>`에서 자주 사용"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
