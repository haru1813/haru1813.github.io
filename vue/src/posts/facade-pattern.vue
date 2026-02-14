<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "facade-pattern",
  title: "Facade(퍼사드) 패턴 [구조]",
  date: "2026-02-11",
  summary: "복잡한 하위 시스템을 단순한 창구로 감싸는 패턴. 클라이언트가 여러 모듈을 한 번에 호출할 수 있게 합니다.",
  category: "Technology/Design-Pattern",
  tags: ["theory","design-pattern","oop"],
  content: ["## Facade(퍼사드) 패턴이란?", "Facade 패턴은 복잡한 하위 시스템(여러 클래스, 모듈)을 단순한 창구(퍼사드)로 감싸는 패턴입니다. 클라이언트는 한 번의 호출로 여러 단계를 처리할 수 있게 됩니다.", "", "핵심은 이거예요:", "- 하위 시스템의 복잡한 흐름을 퍼사드 하나로 숨기고, 간단한 메서드로 제공", "- 클라이언트는 하위 모듈을 직접 알 필요 없이 퍼사드만 사용", "", "## 언제 필요할까", "- 여러 모듈을 연속으로 호출해야 하는 흐름이 반복될 때", "- 하위 시스템 API가 복잡해서 사용하기 어렵을 때", "- 하위 시스템을 바꿀 때 클라이언트 영향을 최소화하고 싶을 때", "", "## 장점/단점(현실적으로)", "### 장점", "- 클라이언트 코드가 단순해짐", "- 하위 시스템 변경 시 퍼사드만 수정하면 됨", "- 의존성 감소: 클라이언트가 여러 모듈에 직접 의존하지 않음", "", "### 단점", "- 퍼사드가 지나치게 비대해지면 God Object가 될 수 있음", "- 세밀한 제어가 필요하면 퍼사드를 통해서는 한계가 있음", "", "## Java 예제", "영화 재생을 위해 조명, 스크린, 프로젝터를 순서대로 제어하는 시나리오입니다.", "", "### 1) 하위 시스템", "```java", "class Lights {", "    void dim() { System.out.println(\"Lights dim\"); }", "}", "class Screen {", "    void down() { System.out.println(\"Screen down\"); }", "}", "class Projector {", "    void on() { System.out.println(\"Projector on\"); }", "    void play(String movie) { System.out.println(\"Playing: \" + movie); }", "}", "```", "", "### 2) Facade", "```java", "class HomeTheaterFacade {", "    private final Lights lights;", "    private final Screen screen;", "    private final Projector projector;", "    public HomeTheaterFacade(Lights l, Screen s, Projector p) {", "        lights = l; screen = s; projector = p;", "    }", "    public void watchMovie(String movie) {", "        lights.dim();", "        screen.down();", "        projector.on();", "        projector.play(movie);", "    }", "}", "```", "", "### 3) Client", "```java", "HomeTheaterFacade theater = new HomeTheaterFacade(new Lights(), new Screen(), new Projector());", "theater.watchMovie(\"인터스텔라\");  // 한 번에 조명→스크린→프로젝터→재생", "```", "", "## 정리", "- Facade는 복잡한 하위 시스템을 단순한 창구로 감싸는 패턴입니다. 라이브러리의 상위 API, 서비스 레이어가 이 역할을 하는 경우가 많습니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
