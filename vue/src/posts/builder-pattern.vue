<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "builder-pattern",
  title: "Builder(빌더) 패턴 [생성]",
  date: "2026-02-11",
  summary: "복잡한 객체를 단계적으로 생성하는 패턴. 가독성과 불변성을 높입니다.",
  category: "Technology/Design-Pattern",
  tags: ["theory","design-pattern","oop"],
  content: ["## Builder(빌더) 패턴이란?", "Builder 패턴은 생성자 파라미터가 많거나, 생성 과정이 여러 단계로 나뉠 때 객체를 단계적으로 만드는 패턴입니다. 플루언트 API로 가독성을 높이고, 선택적 파라미터를 다루기 쉽습니다.", "", "핵심은 이거예요:", "- 생성 로직을 Builder에 위임하고, 단계별로 값을 쌓아 최종 `build()`로 완성", "- 생성자에 매개변수 10개를 넘기는 대신 `builder.name(\"홍길동\").age(25).build()` 형태로 표현", "", "## 언제 필요할까", "- 생성자 파라미터가 많아서(4~5개 이상) 가독성이 떨어진다", "- 일부 필드는 선택적이고, 조합이 다양하다", "- 객체가 불변(immutable)이어야 할 때, 생성 후 변경 없이 한 번에 완성하고 싶다", "", "## 장점/단점(현실적으로)", "### 장점", "- 가독성: `new User(\"홍길동\", 25, \"서울\", \"010-1234-5678\", ...)` 대신 명시적인 메서드 체인", "- 유연성: 필수/선택 파라미터 구분, 기본값 적용이 쉬움", "- 불변성: build() 시점에 한 번만 생성해 이후 수정 불가", "", "### 단점", "- Builder 클래스/코드가 추가로 필요함", "- 작은 객체엔 과할 수 있음", "", "## Java 예제", "`User` 객체를 Builder로 생성하는 예제입니다.", "", "### 1) 생성 대상 클래스", "```java", "public class User {", "    private final String name;", "    private final int age;", "    private final String address;", "", "    private User(Builder b) {", "        this.name = b.name;", "        this.age = b.age;", "        this.address = b.address;", "    }", "", "    public static Builder builder() { return new Builder(); }", "", "    public static class Builder {", "        private String name;", "        private int age;", "        private String address = \"\";", "", "        public Builder name(String name) { this.name = name; return this; }", "        public Builder age(int age) { this.age = age; return this; }", "        public Builder address(String address) { this.address = address; return this; }", "        public User build() {", "            if (name == null) throw new IllegalArgumentException(\"name required\");", "            return new User(this);", "        }", "    }", "}", "```", "", "### 2) Client", "```java", "User u = User.builder()", "    .name(\"홍길동\")", "    .age(25)", "    .address(\"서울\")", "    .build();", "```", "", "## 정리", "- Builder는 복잡한 객체 생성을 단계적으로, 가독성 있게 만드는 패턴입니다.", "- Lombok의 `@Builder`나 Kotlin의 `apply {}`가 같은 사고방식을 줄여 써 준 것입니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
