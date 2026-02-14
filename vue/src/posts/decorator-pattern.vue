<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "decorator-pattern",
  title: "Decorator(데코레이터) 패턴 [구조]",
  date: "2026-02-11",
  summary: "객체를 감싸서 기능을 동적으로 추가하는 패턴. 로그, 인증, 캐싱 등을 조합할 때 유용합니다.",
  category: "Technology/Design-Pattern",
  tags: ["theory","design-pattern","oop"],
  content: ["## Decorator(데코레이터) 패턴이란?", "Decorator 패턴은 객체를 감싸서 기능을 동적으로 추가하는 패턴입니다. 상속 대신 조합으로 로그, 인증, 캐싱, 압축 등을 유연하게 겹쳐 쓸 수 있습니다.", "", "핵심은 이거예요:", "- Component(인터페이스)를 구현한 Decorator가 Component를 감싸고, 호출 전후에 부가 작업 수행", "- 여러 Decorator를 겹쳐 써서 `new LogDecorator(new CacheDecorator(new RealService()))` 형태로 조합", "", "## 언제 필요할까", "- 기존 객체에 기능을 추가하고 싶지만 상속으로 클래스가 폭발하는 상황", "- 로그, 캐싱, 권한 체크 등을 조합해서 쓰고 싶을 때", "- 런타임에 기능을 붙였다 뗐다 하고 싶을 때", "", "## 장점/단점(현실적으로)", "### 장점", "- 단일 책임: 각 Decorator가 하나의 부가 기능만 담당", "- 조합 자유도: 원하는 것만 골라 겹쳐 쓸 수 있음", "- 기존 코드 수정 없이 확장 가능", "", "### 단점", "- 작은 객체가 많아져 구조가 복잡해 보일 수 있음", "- 호출 순서에 따라 결과가 달라질 수 있음", "", "## Java 예제", "`DataService`에 로깅과 캐싱을 Decorator로 추가하는 예제입니다.", "", "### 1) Component(인터페이스)", "```java", "interface DataService {", "    String fetch(String key);", "}", "```", "", "### 2) ConcreteComponent", "```java", "class RealDataService implements DataService {", "    public String fetch(String key) { return \"data:\" + key; }", "}", "```", "", "### 3) Decorator", "```java", "abstract class DataServiceDecorator implements DataService {", "    protected final DataService wrapped;", "    DataServiceDecorator(DataService w) { wrapped = w; }", "}", "", "class LoggingDecorator extends DataServiceDecorator {", "    LoggingDecorator(DataService w) { super(w); }", "    public String fetch(String key) {", "        System.out.println(\"fetch: \" + key);", "        return wrapped.fetch(key);", "    }", "}", "", "class CachingDecorator extends DataServiceDecorator {", "    private final java.util.Map<String, String> cache = new java.util.HashMap<>();", "    CachingDecorator(DataService w) { super(w); }", "    public String fetch(String key) {", "        if (cache.containsKey(key)) return cache.get(key);", "        String v = wrapped.fetch(key);", "        cache.put(key, v);", "        return v;", "    }", "}", "```", "", "### 4) Client", "```java", "DataService svc = new LoggingDecorator(new CachingDecorator(new RealDataService()));", "svc.fetch(\"a\");  // 로그 출력 후 DB 조회", "svc.fetch(\"a\");  // 로그 출력 후 캐시에서 반환", "```", "", "## 정리", "- Decorator는 객체를 감싸서 기능을 동적으로 추가하는 패턴입니다. Java I/O의 `BufferedReader`, `GZIPInputStream` 등이 이 패턴을 사용합니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
