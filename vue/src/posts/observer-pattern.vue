<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "observer-pattern",
  title: "Observer(관찰자) 패턴 [행위]",
  date: "2026-02-11",
  summary: "상태 변화를 구독자에게 알리는 패턴. 이벤트/구독 모델의 기반입니다.",
  category: "Technology/Design-Pattern",
  tags: ["theory","design-pattern","oop"],
  content: ["## Observer(관찰자) 패턴이란?", "Observer 패턴은 객체(Subject)의 상태가 바뀔 때 구독자(Observer)들에게 자동으로 알림을 보내는 패턴입니다. 이벤트/구독 모델, MVC의 모델-뷰 연동, 반응형 UI의 기반이 됩니다.", "", "핵심은 이거예요:", "- Subject가 Observer 목록을 갖고, 상태 변경 시 `notify()`로 모두에게 알림", "- Observer는 Subject에 등록(구독)하고, 알림을 받으면 자신의 로직 실행", "", "## 언제 필요할까", "- 한 객체의 변경을 여러 객체가 알아야 할 때", "- 이벤트 기반, 구독/발행(pub-sub) 구조가 필요할 때", "- UI와 데이터의 동기화(데이터 변경 시 화면 갱신)", "", "## 장점/단점(현실적으로)", "### 장점", "- Subject와 Observer의 느슨한 결합: Subject는 Observer 목록만 알고, 구체 타입을 몰라도 됨", "- 동적으로 구독/해제 가능", "", "### 단점", "- Observer가 많으면 notify 순서, 예외 처리에 주의", "- 메모리 누수: 구독 해제를 빼먹으면 GC되지 않을 수 있음", "", "## Java 예제", "새 글 발행 시 구독자에게 알리는 예제입니다.", "", "### 1) Observer(인터페이스)", "```java", "interface Subscriber {", "    void onNewPost(String title);", "}", "```", "", "### 2) Subject", "```java", "import java.util.ArrayList;", "import java.util.List;", "", "class Blog {", "    private final List<Subscriber> subscribers = new ArrayList<>();", "    public void subscribe(Subscriber s) { subscribers.add(s); }", "    public void unsubscribe(Subscriber s) { subscribers.remove(s); }", "    public void publish(String title) {", "        for (Subscriber s : subscribers) s.onNewPost(title);", "    }", "}", "```", "", "### 3) ConcreteObserver", "```java", "class EmailSubscriber implements Subscriber {", "    public void onNewPost(String title) {", "        System.out.println(\"[Email] 새 글이 올라왔습니다: \" + title);", "    }", "}", "```", "", "### 4) Client", "```java", "Blog blog = new Blog();", "blog.subscribe(new EmailSubscriber());", "blog.publish(\"디자인 패턴 정리\");  // [Email] 새 글이 올라왔습니다: ...", "```", "", "## 정리", "- Observer는 상태 변화를 구독자에게 알리는 패턴입니다. Java의 `PropertyChangeListener`, RxJava, Vue의 반응형 시스템 등이 같은 사고방식을 사용합니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
