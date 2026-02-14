<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "factory-method-pattern",
  title: "Factory Method(팩토리 메서드) 패턴 [생성]",
  date: "2026-02-10",
  summary: "객체 생성 코드가 여기저기 퍼지고, 타입 분기가 늘어날 때 ‘생성 책임’을 한 곳으로 모으는 패턴이 Factory Method입니다. 생성은 서브클래스가, 사용은 상위 타입이 담당하게 만들 수 있어요.",
  category: "Technology/Design-Pattern",
  tags: ["theory","design-pattern","factory-method","java","oop"],
  content: ["## Factory Method란?", "Factory Method 패턴은 ‘객체를 생성하는 책임’을 별도의 메서드(팩토리 메서드)로 분리해서,", "클라이언트가 구체 클래스를 직접 `new` 하지 않도록 만드는 생성 패턴입니다.", "", "핵심은 이거예요:", "- 사용하는 쪽은 인터페이스(상위 타입)만 안다.", "- 무엇을 생성할지는 Creator(또는 그 서브클래스)가 결정한다.", "", "## 언제 필요할까", "- `if/else` 또는 `switch`로 타입을 나눠 `new` 하는 코드가 늘어난다", "- 생성 로직(기본값, 검증, 조립)이 반복된다", "- 같은 인터페이스를 구현한 다양한 구현체를 상황에 따라 바꿔 끼우고 싶다", "", "## 장점/단점(현실적으로)", "### 장점", "- 객체 생성 책임이 한 곳으로 모여 중복이 줄고, 변경에 강해짐", "- 클라이언트가 구체 타입에 덜 의존 → 테스트/확장이 쉬워짐", "", "### 단점", "- 클래스/구조가 늘어날 수 있음(작은 프로젝트에선 과할 수 있음)", "", "## Java 예제", "아래 예제는 “알림(Notification)”을 `EMAIL`/`SMS`로 생성하는 상황을 예로 듭니다.", "", "### 1) Product(인터페이스)와 ConcreteProduct", "```java", "interface Notification {", "    void send(String to, String message);", "}", "", "class EmailNotification implements Notification {", "    @Override", "    public void send(String to, String message) {", "        System.out.println(\"[EMAIL] to=\" + to + \" message=\" + message);", "    }", "}", "", "class SmsNotification implements Notification {", "    @Override", "    public void send(String to, String message) {", "        System.out.println(\"[SMS] to=\" + to + \" message=\" + message);", "    }", "}", "```", "", "### 2) Creator(팩토리 메서드 + 템플릿 메서드 느낌)", "```java", "abstract class NotificationService {", "    // Factory Method: 무엇을 만들지(구현체 선택)는 서브클래스가 결정", "    protected abstract Notification createNotification();", "", "    // 클라이언트가 호출하는 로직(공통 흐름)은 상위 클래스에 둔다", "    public void notify(String to, String message) {", "        // 공통 전처리/검증/로깅 등을 여기에 두기 좋다", "        if (to == null || to.isBlank()) throw new IllegalArgumentException(\"to is blank\");", "        if (message == null) message = \"\";", "", "        Notification notification = createNotification();", "        notification.send(to, message);", "    }", "}", "```", "", "### 3) ConcreteCreator", "```java", "class EmailNotificationService extends NotificationService {", "    @Override", "    protected Notification createNotification() {", "        return new EmailNotification();", "    }", "}", "", "class SmsNotificationService extends NotificationService {", "    @Override", "    protected Notification createNotification() {", "        return new SmsNotification();", "    }", "}", "```", "", "### 4) Client", "```java", "public class Main {", "    public static void main(String[] args) {", "        NotificationService service1 = new EmailNotificationService();", "        service1.notify(\"haru@example.com\", \"안녕하세요!\");", "", "        NotificationService service2 = new SmsNotificationService();", "        service2.notify(\"010-1234-5678\", \"문자 알림입니다.\");", "    }", "}", "```", "", "## 정리", "- Factory Method는 ‘new를 숨기는 패턴’이 아니라, 생성 책임을 분리해 변경에 강한 구조를 만드는 방법입니다.", "- 공통 흐름(검증/로깅/정책)은 상위 클래스에, 구현체 선택은 팩토리 메서드로 분리하면 깔끔해집니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
