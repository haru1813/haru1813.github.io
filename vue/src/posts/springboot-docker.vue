<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "springboot-docker",
  title: "Spring Boot 애플리케이션 Docker 컨테이너화",
  date: "2026-02-11",
  summary: "Spring Boot 3.x와 Java 21 기반 Docker 이미지 빌드, 멀티 스테이지 빌드, Jib, 최적화 팁까지 정리합니다.",
  category: "Technology/SpringBoot",
  tags: ["springboot","docker","container","devops","kubernetes"],
  content: ["## Spring Boot를 Docker로 배포하기", "Spring Boot 애플리케이션을 Docker 이미지로 패키징하고 컨테이너에서 실행하는 방법을 정리합니다. Java 17/21 + Slim 베이스 이미지로 용량과 보안을 최적화할 수 있습니다.", "", "## 1) 기본 Dockerfile (멀티 스테이지)", "```dockerfile", "FROM eclipse-temurin:21-jdk-alpine AS builder", "WORKDIR /app", "", "COPY mvnw .", "COPY .mvn .mvn", "COPY pom.xml .", "RUN ./mvnw dependency:go-offline -B", "", "COPY src ./src", "RUN ./mvnw package -DskipTests -B", "", "FROM eclipse-temurin:21-jre-alpine", "WORKDIR /app", "", "RUN addgroup -g 1001 -S appgroup && adduser -u 1001 -S appuser -G appgroup", "COPY --from=builder /app/target/*.jar app.jar", "", "USER appuser", "EXPOSE 8080", "ENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]", "```", "", "## 2) Gradle Dockerfile", "```dockerfile", "FROM eclipse-temurin:21-jdk-alpine AS builder", "WORKDIR /app", "COPY . .", "RUN ./gradlew bootJar -x test --no-daemon", "", "FROM eclipse-temurin:21-jre-alpine", "WORKDIR /app", "COPY --from=builder /app/build/libs/*.jar app.jar", "EXPOSE 8080", "ENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]", "```", "", "## 3) Jib으로 Dockerfile 없이 빌드", "Google Jib을 사용하면 Dockerfile 없이 Gradle/Maven만으로 이미지를 빌드합니다.", "", "```xml", "<!-- Maven -->", "<plugin>", "    <groupId>com.google.cloud.tools</groupId>", "    <artifactId>jib-maven-plugin</artifactId>", "    <version>3.4.0</version>", "    <configuration>", "        <from>", "            <image>eclipse-temurin:21-jre-alpine</image>", "        </from>", "        <to>", "            <image>myregistry/my-app:latest</image>", "        </to>", "        <container>", "            <ports><port>8080</port></ports>", "            <user>1001:1001</user>", "        </container>", "    </configuration>", "</plugin>", "```", "", "```bash", "# 빌드 및 푸시", "mvn compile jib:build", "# 로컬 Docker만", "mvn compile jib:dockerBuild", "```", "", "## 4) Spring Boot 3.x 네이티브 이미지 (GraalVM)", "GraalVM Native Image로 초기 구동 시간을 크게 줄일 수 있습니다.", "", "```xml", "<plugin>", "    <groupId>org.graalvm.buildtools</groupId>", "    <artifactId>native-maven-plugin</artifactId>", "</plugin>", "```", "", "```bash", "./mvnw -Pnative native:compile", "```", "", "생성된 네이티브 실행 파일을 Alpine에 넣으면 수 MB 수준의 초경량 이미지가 됩니다.", "", "## 5) docker-compose 예제", "```yaml", "version: '3.8'", "services:", "  app:", "    build: .", "    ports:", "      - \"8080:8080\"", "    environment:", "      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/mydb", "      SPRING_DATASOURCE_USERNAME: user", "      SPRING_DATASOURCE_PASSWORD: pass", "    depends_on:", "      - db", "  db:", "    image: postgres:16-alpine", "    environment:", "      POSTGRES_DB: mydb", "      POSTGRES_USER: user", "      POSTGRES_PASSWORD: pass", "    volumes:", "      - dbdata:/var/lib/postgresql/data", "volumes:", "  dbdata:", "```", "", "## 6) 최적화 팁", "- JRE 베이스 이미지 사용 (JDK 불필요 시)", "- distroless 또는 alpine으로 이미지 크기 축소", "- 레이어 캐싱: 의존성 복사 → 소스 복사 순으로 Dockerfile 작성", "- `java -jar` 시 `-XX:+UseContainerSupport` 등 JVM 옵션으로 컨테이너 메모리 인식", "", "## 정리", "Spring Boot + Docker는 실무 표준 조합입니다. Jib이나 Buildpacks로 Dockerfile 없이 빌드할 수도 있고, GraalVM Native로 더 빠른 구동이 필요하면 네이티브 이미지를 고려하면 됩니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
