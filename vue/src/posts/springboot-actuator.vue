<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "springboot-actuator",
  title: "Spring Boot Actuator와 모니터링",
  date: "2026-02-11",
  summary: "Actuator 엔드포인트, 헬스체크, 메트릭, 커스텀 엔드포인트, 보안 설정까지 운영 환경에 필요한 모니터링 요소를 정리합니다.",
  category: "Technology/SpringBoot",
  tags: ["springboot","actuator","monitoring","health","metrics"],
  content: ["## Spring Boot Actuator란?", "Actuator는 애플리케이션의 헬스, 메트릭, 환경 정보 등을 HTTP 또는 JMX로 노출하는 Spring Boot 모듈입니다. 쿠버네티스 liveness/readiness 프로브, Prometheus, Grafana와 연동할 때 필수입니다.", "", "## 1) 의존성 및 기본 설정", "```xml", "<dependency>", "    <groupId>org.springframework.boot</groupId>", "    <artifactId>spring-boot-starter-actuator</artifactId>", "</dependency>", "```", "", "```yaml", "# application.yml", "management:", "  endpoints:", "    web:", "      exposure:", "        include: health, info, metrics  # 노출할 엔드포인트", "  endpoint:", "    health:", "      show-details: when_authorized  # 상세 정보(DB 연결 등)는 인증 시만", "```", "", "## 2) 기본 엔드포인트", "| 엔드포인트 | 설명 |", "|------------|------|", "| /actuator/health | 애플리케이션 및 DB, 디스크 등 상태 |", "| /actuator/info | 빌드 정보 등 (직접 설정) |", "| /actuator/metrics | JVM, HTTP, DB 등 메트릭 |", "| /actuator/env | 환경 변수, 설정값 |", "| /actuator/loggers | 로거 레벨 조회/변경 |", "", "## 3) Health 상세화", "```java", "@Component", "public class CustomHealthIndicator implements HealthIndicator {", "    private final RestTemplate restTemplate;", "", "    @Override", "    public Health health() {", "        try {", "            restTemplate.getForObject(\"https://external-api.com/status\", String.class);", "            return Health.up().withDetail(\"external-api\", \"OK\").build();", "        } catch (Exception e) {", "            return Health.down().withDetail(\"error\", e.getMessage()).build();", "        }", "    }", "}", "```", "", "## 4) Prometheus 메트릭 노출 (선택)", "```xml", "<dependency>", "    <groupId>io.micrometer</groupId>", "    <artifactId>micrometer-registry-prometheus</artifactId>", "</dependency>", "```", "", "```yaml", "management:", "  endpoints:", "    web:", "      exposure:", "        include: health, info, prometheus", "```", "", "`/actuator/prometheus`에서 Prometheus 형식 메트릭을 scrape할 수 있습니다.", "", "## 5) 커스텀 메트릭", "```java", "@Service", "public class OrderService {", "    private final Counter orderCounter;", "    private final Timer orderTimer;", "", "    public OrderService(MeterRegistry registry) {", "        orderCounter = registry.counter(\"orders.created\", \"status\", \"success\");", "        orderTimer = registry.timer(\"orders.process.time\");", "    }", "", "    public void createOrder(Order order) {", "        orderTimer.record(() -> {", "            // 주문 처리 로직", "            orderCounter.increment();", "        });", "    }", "}", "```", "", "## 6) 쿠버네티스 Liveness/Readiness", "```yaml", "livenessProbe:", "  httpGet:", "    path: /actuator/health/liveness", "    port: 8080", "readinessProbe:", "  httpGet:", "    path: /actuator/health/readiness", "    port: 8080", "```", "", "Spring Boot 2.3+에서는 `management.health.livenessstate`와 `readinessstate`를 사용해 k8s 프로브에 맞게 분리할 수 있습니다.", "", "## 7) 보안", "Actuator 엔드포인트는 민감 정보를 다룰 수 있으므로, Spring Security로 보호하고 IP 제한 또는 기본 인증을 적용하는 것이 좋습니다.", "", "## 정리", "Actuator는 운영 모니터링의 핵심 도구입니다. health + metrics만으로도 기본 운영이 가능하고, Prometheus/Grafana와 조합하면 강력한 관측성이 확보됩니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
