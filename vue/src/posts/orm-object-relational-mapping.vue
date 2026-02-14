<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "orm-object-relational-mapping",
  title: "ORM(Object-Relational Mapping) 정리",
  date: "2026-02-10",
  summary: "ORM은 객체(코드)와 관계형 DB(테이블) 사이를 매핑해 SQL을 ‘직접 다루는 부담’을 줄여주는 도구입니다. 편해지는 만큼, 성능/쿼리/트랜잭션 감각은 꼭 같이 가져가야 합니다.",
  category: "Coding/Theory",
  tags: ["theory","db","orm","backend"],
  content: ["## ORM이란?", "ORM(Object-Relational Mapping)은 프로그램의 객체(클래스/인스턴스)를 DB의 테이블/행과 연결(매핑)해서, 데이터를 객체처럼 다룰 수 있게 해주는 기술/라이브러리입니다.", "", "쉽게 말하면:", "- DB에는 `users` 테이블이 있고", "- 코드에는 `User` 클래스가 있을 때", "- ORM이 둘 사이를 연결해 `User`를 저장/조회할 수 있게 해줍니다.", "", "## 왜 ORM을 쓸까", "- 생산성: CRUD를 빠르게 만들 수 있음", "- 유지보수: SQL 문자열을 여기저기 흩뿌리지 않게 됨", "- 안전성: 파라미터 바인딩/쿼리 빌더로 인젝션 위험을 줄임(그래도 설계가 중요)", "- 이식성(일부): DB가 바뀌어도 코드 변경을 줄일 수 있음(완전한 이식성은 기대하면 안 됨)", "", "## ORM이 해주는 것(대표 기능)", "- 매핑: 클래스 필드 ↔ 테이블 컬럼", "- 쿼리 생성: 조건/정렬/페이징 등", "- 변경 감지(Dirty Checking): 객체 수정 사항을 추적해 UPDATE를 생성", "- 관계 매핑: 1:N, N:1, N:M 등", "- 트랜잭션 단위 작업: 같은 트랜잭션에서 일관되게 처리하도록 도움", "", "## 대표 ORM 라이브러리/프레임워크(언어별)", "ORM은 언어/생태계마다 스타일이 달라요. 아래는 많이 쓰이는 선택지들입니다.", "", "### Java/Kotlin", "- JPA: 자바 ORM 표준(스펙) 자체 (구현체가 필요)", "- Hibernate: 가장 널리 쓰이는 JPA 구현체", "- Spring Data JPA: 리포지토리/쿼리 메서드 등으로 JPA 사용을 더 편하게", "", "### Python", "- Django ORM: Django에 포함된 ORM(Active Record 스타일)", "- SQLAlchemy: 파이썬에서 매우 널리 쓰이는 ORM/쿼리 빌더(강력한 표현력)", "- Peewee: 가볍고 단순한 ORM", "", "### JavaScript/TypeScript(Node.js)", "- Prisma: 스키마 기반 + 타입 생성 + 마이그레이션 경험이 좋은 편", "- TypeORM: 데코레이터 기반 ORM(프로젝트/버전에 따라 선호가 갈림)", "- Sequelize: 오래된 생태계, 다양한 DB 지원", "- MikroORM: Unit of Work/Identity Map 등 DDD 친화적 기능 강조", "", "### .NET(C#)", "- Entity Framework Core(EF Core): 대표적인 ORM", "- Dapper: 흔히 “마이크로 ORM”으로 불리며, SQL을 직접 쓰되 매핑을 편하게", "", "### Ruby", "- ActiveRecord(Rails): Rails의 기본 ORM", "", "### PHP", "- Eloquent(Laravel): Laravel의 기본 ORM", "- Doctrine ORM: PHP에서 널리 쓰이는 Data Mapper 스타일 ORM", "", "### Go", "- GORM: 가장 유명한 ORM 중 하나", "- 참고: `sqlc`는 ORM이라기보다 SQL을 기반으로 타입 안전한 코드를 생성하는 도구", "", "## ORM이 아닌데 함께 자주 언급되는 것", "- MyBatis(Java): ORM이라기보다 SQL Mapper에 가깝습니다. SQL을 직접 작성하고 매핑만 도와줍니다.", "", "## ORM을 쓸 때 꼭 알아야 하는 함정", "### 1) N+1 문제", "- 관계를 가진 데이터를 조회할 때, 예상보다 쿼리가 N번 추가로 나가는 문제", "- 해결 방향: 조인/페치 조인, eager/lazy 전략 이해, 쿼리 확인", "", "### 2) Lazy Loading(지연 로딩)과 트랜잭션 범위", "- 관계 데이터가 “필요할 때” 로딩되는데, 트랜잭션이 끝난 뒤 접근하면 오류가 날 수 있음", "- 해결 방향: 조회 시점 설계(필요한 데이터는 미리 로딩), 계층 분리 규칙 만들기", "", "### 3) ORM을 써도 SQL을 모르면 결국 막힌다", "- 인덱스, 조인, 실행 계획, 페이징 방식 같은 DB 기본기는 여전히 중요", "", "## 실무에서의 좋은 습관", "- 항상 쿼리를 확인: “내가 생각한 쿼리”가 실제로 나가는지 로그로 보기", "- 성능 기준을 정하기: 느려지는 지점은 대부분 ‘조회’에서 터짐", "- 도메인 모델과 조회 모델 분리도 고려: 복잡한 조회는 DTO/전용 쿼리로", "- 트랜잭션 경계를 명확히: 어디서 시작/끝나는지", "", "---", "### 요약", "ORM은 개발을 빠르게 해주지만, 그만큼 ‘쿼리가 보이지 않아서’ 성능 문제가 생기기 쉽습니다.", "따라서 ORM을 쓰더라도 SQL/인덱스/트랜잭션/조회 최적화 감각은 같이 키우는 게 중요합니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
