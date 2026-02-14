<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "server-overview",
  title: "서버(Server)란?",
  date: "2026-02-11",
  summary: "서버는 클라이언트의 요청에 응답하는 프로그램 또는 컴퓨터입니다.",
  category: "Coding/Theory",
  tags: ["theory","server","architecture","backend"],
  content: ["## 서버란?", "서버는 클라이언트의 요청을 받아 응답을 제공하는 프로그램, 또는 그 프로그램이 실행되는 컴퓨터를 말합니다.", "", "## 대표 서버 종류", "| 종류 | 역할 | 예시 |", "|------|------|------|", "| 웹 서버 | HTTP 요청, 정적 파일 제공 | Nginx, Apache, Caddy |", "| 애플리케이션 서버 | 동적 로직, DB 연동 | Tomcat, Node.js, Spring Boot |", "| DB 서버 | 데이터 저장·조회 | MySQL, PostgreSQL, MongoDB |", "| 메일 서버 | 이메일 발송·수신 | Postfix, SendGrid |", "| 파일 서버 | 파일 공유·저장 | NAS, FTP, S3 |", "| DNS 서버 | 도메인 → IP 변환 | Google DNS, BIND |", "| 프록시 서버 | 요청 대신 전달, 캐싱 | Nginx, Squid, Cloudflare |", "| DHCP 서버 | IP 자동 할당 | 라우터 내장, dnsmasq |", "| 인증 서버 | 로그인, 토큰 발급 | LDAP, Keycloak, Auth0 |", "", "---", "### 요약", "서버는 클라이언트 요청에 응답하는 프로그램/장비입니다. 웹·앱·DB·메일·파일·DNS·프록시·DHCP·인증 서버 등 다양한 종류가 있습니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
