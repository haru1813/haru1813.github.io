<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "command-pattern",
  title: "Command(명령) 패턴 [행위]",
  date: "2026-02-11",
  summary: "요청을 객체로 캡슐화하는 패턴. 실행/취소/재시도, 큐에 넣기 등에 사용됩니다.",
  category: "Technology/Design-Pattern",
  tags: ["theory","design-pattern","oop"],
  content: ["## Command(명령) 패턴이란?", "Command 패턴은 요청(동작)을 객체로 캡슐화하는 패턴입니다. 실행, 취소(Undo), 재시도, 큐에 넣기, 로깅 등이 가능해집니다. 호출자(Invoker)와 수신자(Receiver)를 분리합니다.", "", "핵심은 이거예요:", "- Command 인터페이스에 `execute()`(필요 시 `undo()`)를 두고, 각 명령을 구현체로 캡슐화", "- Invoker는 Command만 알고, Receiver를 직접 알 필요 없음", "", "## 언제 필요할까", "- 실행을 나중으로 미루거나, 큐에 쌓아서 순서대로 처리하고 싶을 때", "- Undo/Redo 기능이 필요할 때", "- 작업 로깅, 재시도, 트랜잭션처럼 '요청' 단위로 다루고 싶을 때", "", "## 장점/단점(현실적으로)", "### 장점", "- 요청을 객체로 다룰 수 있어 큐잉, 로깅, Undo가 가능", "- Invoker와 Receiver 분리로 결합도 감소", "", "### 단점", "- Command 클래스가 많이 늘어날 수 있음", "- 단순한 경우 람다로 충분할 수 있음", "", "## Java 예제", "라이트 켜기/끄기를 Command로 캡슐화하고 Undo를 지원하는 예제입니다.", "", "### 1) Command(인터페이스)", "```java", "interface Command {", "    void execute();", "    void undo();", "}", "```", "", "### 2) Receiver", "```java", "class Light {", "    void on() { System.out.println(\"Light ON\"); }", "    void off() { System.out.println(\"Light OFF\"); }", "}", "```", "", "### 3) ConcreteCommand", "```java", "class LightOnCommand implements Command {", "    private final Light light;", "    LightOnCommand(Light light) { this.light = light; }", "    public void execute() { light.on(); }", "    public void undo() { light.off(); }", "}", "class LightOffCommand implements Command {", "    private final Light light;", "    LightOffCommand(Light light) { this.light = light; }", "    public void execute() { light.off(); }", "    public void undo() { light.on(); }", "}", "```", "", "### 4) Invoker & Client", "```java", "class RemoteControl {", "    private Command last;", "    void press(Command cmd) {", "        cmd.execute();", "        last = cmd;", "    }", "    void pressUndo() { if (last != null) { last.undo(); last = null; } }", "}", "RemoteControl rc = new RemoteControl();", "rc.press(new LightOnCommand(light));", "rc.pressUndo();  // Light OFF", "```", "", "## 정리", "- Command는 요청을 객체로 캡슐화해 실행/취소/큐잉을 가능하게 하는 패턴입니다. 에디터의 Undo, 작업 큐, 매크로 녹화 등에 사용됩니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
