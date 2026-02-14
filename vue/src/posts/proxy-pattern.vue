<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "proxy-pattern",
  title: "Proxy(프록시) 패턴 [구조]",
  date: "2026-02-11",
  summary: "실제 객체 접근을 제어하는 대리 객체. 지연 로딩, 캐싱, 권한 체크에 사용됩니다.",
  category: "Technology/Design-Pattern",
  tags: ["theory","design-pattern","oop"],
  content: ["## Proxy(프록시) 패턴이란?", "Proxy 패턴은 실제 객체(Real Subject)에 대한 접근을 제어하는 대리 객체를 두는 패턴입니다. 클라이언트는 프록시를 통해 접근하고, 프록시가 지연 로딩, 캐싱, 권한 체크, 원격 호출 등을 중간에서 처리합니다.", "", "핵심은 이거예요:", "- Subject(인터페이스)를 Proxy와 RealSubject가 둘 다 구현", "- Proxy는 RealSubject를 감싸고, 호출 전후에 부가 제어(지연 생성, 캐싱, 권한 등)를 수행", "", "## 언제 필요할까", "- 무거운 객체를 실제로 쓰기 전까지 생성하지 않고 싶을 때(지연 로딩)", "- 같은 요청을 캐시해서 반복 호출을 줄이고 싶을 때", "- 권한 체크, 로깅 등 접근 제어를 중간에서 하고 싶을 때", "- 원격 객체를 로컬처럼 다루고 싶을 때(원격 프록시)", "", "## 장점/단점(현실적으로)", "### 장점", "- 지연 로딩으로 초기 부담 감소", "- 캐싱으로 성능 향상", "- 권한/로깅 등 관심사 분리", "", "### 단점", "- 호출 체인이 늘어나 디버깅이 복잡해질 수 있음", "- 프록시와 실제 객체 간 동기화 이슈 가능", "", "## Java 예제", "무거운 `HeavyImage`를 실제 로드 전까지 생성하지 않는 지연 로딩 프록시 예제입니다.", "", "### 1) Subject(인터페이스)", "```java", "interface Image {", "    void display();", "}", "```", "", "### 2) RealSubject", "```java", "class HeavyImage implements Image {", "    private final String path;", "    public HeavyImage(String path) {", "        this.path = path;", "        System.out.println(\"Loading heavy image: \" + path);", "    }", "    public void display() { System.out.println(\"Display: \" + path); }", "}", "```", "", "### 3) Proxy(지연 로딩)", "```java", "class ImageProxy implements Image {", "    private final String path;", "    private HeavyImage real;", "    public ImageProxy(String path) { this.path = path; }", "    public void display() {", "        if (real == null) real = new HeavyImage(path);", "        real.display();", "    }", "}", "```", "", "### 4) Client", "```java", "Image img = new ImageProxy(\"photo.jpg\");  // 아직 로드 안 됨", "img.display();  // 이 시점에 HeavyImage 생성 후 표시", "```", "", "## 정리", "- Proxy는 실제 객체 접근을 제어하는 대리 객체입니다. JPA의 Lazy Loading, RMI, Spring AOP 등에서 이 패턴이 사용됩니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
