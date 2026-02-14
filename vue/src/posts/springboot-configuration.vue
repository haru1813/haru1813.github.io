<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "springboot-configuration",
  title: "Spring Boot 설정(Configuration) 완전 정리",
  date: "2026-02-11",
  summary: "application.yml, 프로파일, @ConfigurationProperties, 외부 설정, 환경 변수, 우선순위까지 Spring Boot 설정의 모든 것을 정리합니다.",
  category: "Technology/SpringBoot",
  tags: ["springboot","configuration","yaml","profile","backend"],
  content: ["## Spring Boot 설정 개요", "Spring Boot는 `application.properties` 또는 `application.yml`을 기본 설정 파일로 사용합니다. 프로파일별 분리, 타입 세이프 바인딩, 외부 설정 오버라이드까지 한 번에 정리합니다.", "", "## 1) application.yml 기본 구조", "```yaml", "server:", "  port: 8080", "  servlet:", "    context-path: /api", "", "spring:", "  application:", "    name: my-service", "  datasource:", "    url: jdbc:postgresql://localhost:5432/mydb", "    username: ${DB_USER:default_user}", "    password: ${DB_PASSWORD}", "    driver-class-name: org.postgresql.Driver", "", "logging:", "  level:", "    root: INFO", "    com.myapp: DEBUG", "```", "", "## 2) 프로파일(Profile) 분리", "환경별로 다른 설정을 적용할 때 `spring.profiles.active`와 `application-{profile}.yml`을 사용합니다.", "", "```yaml", "# application.yml (공통)", "spring:", "  profiles:", "    active: ${SPRING_PROFILES_ACTIVE:local}", "", "# application-local.yml", "spring:", "  datasource:", "    url: jdbc:h2:mem:testdb", "", "# application-prod.yml", "spring:", "  datasource:", "    url: jdbc:postgresql://prod-db:5432/app", "    hikari:", "      maximum-pool-size: 20", "```", "", "```bash", "# 프로파일 지정", "java -jar app.jar --spring.profiles.active=prod", "# 또는 환경 변수", "export SPRING_PROFILES_ACTIVE=prod", "```", "", "## 3) @ConfigurationProperties", "설정값을 타입 세이프하게 바인딩합니다.", "", "```java", "@ConfigurationProperties(prefix = \"app.mail\")", "@Configuration", "public class MailProperties {", "    private String host = \"smtp.example.com\";", "    private int port = 587;", "    private String username;", "    private String password;", "", "    // getters, setters", "}", "```", "", "```yaml", "# application.yml", "app:", "  mail:", "    host: smtp.gmail.com", "    port: 587", "    username: ${MAIL_USER}", "    password: ${MAIL_PASS}", "```", "", "```java", "@RestController", "public class MailController {", "    private final MailProperties mail;", "    public MailController(MailProperties mail) { this.mail = mail; }", "}", "```", "", "## 4) 설정 로드 우선순위 (높은 것 먼저)", "1. 커맨드라인 인자 `--key=value`", "2. 환경 변수 (예: `SPRING_DATASOURCE_URL`)", "3. `config/application.yml` (실행 디렉터리)", "4. `./application.yml` (실행 디렉터리)", "5. `classpath:config/application.yml`", "6. `classpath:application.yml`", "", "## 5) 환경 변수 매핑", "`SPRING_DATASOURCE_URL` → `spring.datasource.url`로 자동 매핑됩니다. 대문자 + 언더스코어가 점(.)으로 변환됩니다.", "", "```yaml", "# YAML", "app:", "  api-key: abc123", "# 환경 변수: APP_API_KEY=xyz", "```", "", "## 6) @Value vs @ConfigurationProperties", "| @Value | @ConfigurationProperties |", "|--------|---------------------------|", "| 단일 값, SpEL 지원 | 그룹화, 타입 검증, Relaxed binding |", "| `@Value(\"${app.port}\")` | `@ConfigurationProperties(\"app\")` |", "| 가벼운 설정 | 여러 필드가 하나의 prefix로 묶일 때 |", "", "## 7) 설정 검증", "```java", "@ConfigurationProperties(prefix = \"app\")", "@Validated", "public class AppProperties {", "    @NotBlank", "    private String name;", "    @Min(1) @Max(65535)", "    private int port = 8080;", "}", "```", "", "## 정리", "Spring Boot 설정은 `application.yml` + 프로파일 + @ConfigurationProperties 조합으로 환경별 구성을 깔끔하게 관리할 수 있습니다. 12-Factor App처럼 환경 변수 오버라이드를 활용하면 클라우드/컨테이너 배포에 최적화됩니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
