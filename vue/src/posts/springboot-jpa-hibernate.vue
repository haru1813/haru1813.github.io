<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "springboot-jpa-hibernate",
  title: "📚 JPA와 하이버네이트(Spring Boot에서 이해하기)",
  date: "2026-02-10",
  summary: "JPA는 ‘표준(스펙)’, Hibernate는 ‘대표 구현체’입니다. Spring Boot에서는 이 둘이 어떻게 연결되는지, 그리고 실무에서 어디가 자주 헷갈리는지 정리합니다.",
  category: "Technology/SpringBoot",
  tags: ["springboot","jpa","hibernate","backend","db"],
  content: ["## 한 줄 요약", "- JPA: 자바 ORM 표준(인터페이스/규약)", "- Hibernate: JPA를 구현한 구현체(라이브러리)", "- Spring Data JPA: JPA 사용을 더 편하게 만드는 스프링 모듈", "", "## Spring Boot에서의 구조(그림 대신 문장으로)", "- 애플리케이션 코드는 JPA(표준 API)를 사용", "- 실제 동작(쿼리 생성/실행)은 Hibernate가 담당", "- Spring Boot는 설정을 자동으로 구성(데이터소스/트랜잭션/엔티티매니저 등)", "", "## 왜 ‘JPA를 쓴다’고 말하지만 Hibernate가 보일까", "JPA는 표준이라서 “JPA만 설치”해선 실제로 동작하지 않습니다. 구현체가 필요하고, Spring Boot는 기본적으로 Hibernate를 많이 사용합니다.", "", "## 핵심 개념 4가지", "### 1) 영속성 컨텍스트(Persistence Context)", "- 엔티티를 관리하는 “1차 캐시 + 변경 감지 + 동일성 보장” 공간", "- 같은 트랜잭션 안에서 같은 id를 조회하면 같은 객체처럼 다뤄짐(동일성)", "", "### 2) 변경 감지(Dirty Checking)", "- 엔티티 필드를 바꾸면, 커밋 시점에 ORM이 UPDATE를 만들어 반영", "- 그래서 ‘save를 안 했는데 업데이트가 된다’ 같은 현상이 자연스러운 동작일 수 있음", "", "### 3) 지연 로딩(Lazy Loading)과 N+1", "- 관계 엔티티를 “필요할 때” 불러오는 방식이 흔함", "- 설계를 잘못하면 N+1 문제가 발생(조회 쿼리 폭증)", "", "### 4) 트랜잭션 경계(@Transactional)", "- JPA/Hibernate는 트랜잭션 범위에 강하게 의존", "- Lazy Loading이 트랜잭션 밖에서 터지는 이유도 대부분 여기서 발생", "", "## 실무 팁(꼭 해두면 좋은 것)", "- SQL 로그를 항상 확인: 내가 의도한 쿼리가 나가는지 보기", "- 조회는 특히 조심: 성능 문제는 대개 조회에서 터짐(조인/인덱스/페이징)", "- 복잡한 조회는 엔티티가 아니라 DTO/전용 쿼리로 분리하는 것도 전략", "- “JPA를 쓴다” = “SQL을 몰라도 된다”가 절대 아님", "", "---", "### 요약", "Spring Boot에서 JPA를 사용한다는 말은 보통 Hibernate를 통해 JPA 표준을 사용한다는 뜻입니다.", "그리고 성능/버그의 대부분은 트랜잭션, 지연 로딩, 쿼리에서 생기니 여기를 중심으로 공부하면 좋습니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
