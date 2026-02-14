<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "ssh-overview",
  title: "SSH(Secure Shell)란?",
  date: "2026-02-11",
  summary: "SSH는 네트워크를 통해 원격 컴퓨터에 안전하게 접속하거나 파일을 전송하는 프로토콜입니다. ssh, scp, sftp, 공개키 인증 등 핵심 개념을 정리합니다.",
  category: "Coding/Theory",
  tags: ["theory","ssh","security","network","remote"],
  content: ["## 한 줄 요약", "SSH(Secure Shell)는 네트워크를 통해 원격 컴퓨터에 암호화된 통신으로 접속하는 프로토콜입니다. 비밀번호 대신 키 기반 인증을 쓰면 더 안전합니다.", "", "## 주요 용도", "| 용도 | 설명 |", "|------|------|", "| 원격 로그인 | 서버에 ssh user@host로 접속해 명령 실행 |", "| 파일 전송 | scp, sftp로 암호화된 파일 송수신 |", "| Git·배포 | GitHub 등에 SSH 키로 인증, CI/CD에서 서버 접속 |", "", "## 기본 사용법", "", "### 원격 접속(ssh)", "```bash", "ssh user@hostname", "ssh -p 2222 user@hostname", "ssh -i ~/.ssh/my_key user@hostname", "```", "", "### 파일 전송(scp)", "```bash", "scp file.txt user@host:/path/to/dest", "scp user@host:/path/to/file.txt .", "scp -r ./mydir user@host:/path/", "```", "", "### SFTP", "```bash", "sftp user@host", "```", "", "## SSH 키 인증", "비밀번호 대신 공개키/비밀키 쌍으로 인증하면 더 안전합니다.", "", "```bash", "ssh-keygen -t ed25519", "ssh-copy-id user@host", "```", "", "## 클라이언트 설정(~/.ssh/config)", "```", "Host myserver", "    HostName 192.168.1.100", "    User deploy", "    IdentityFile ~/.ssh/my_key", "    Port 22", "```", "", "이후 ssh myserver만 입력해 접속 가능.", "", "---", "### 요약", "SSH는 원격 컴퓨터에 안전하게 접속하거나 파일을 전송하는 프로토콜입니다. ssh, scp, sftp를 쓰고, 공개키 인증으로 보안을 강화할 수 있습니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
