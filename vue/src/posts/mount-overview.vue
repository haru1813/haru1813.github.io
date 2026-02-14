<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "mount-overview",
  title: "마운트(Mount)란?",
  date: "2026-02-11",
  summary: "마운트는 저장 장치·파일시스템을 특정 경로(마운트 포인트)에 연결해 접근 가능하게 만드는 것입니다. Linux mount/umount, Windows 드라이브 문자, Docker 볼륨까지 정리합니다.",
  category: "Coding/Theory",
  tags: ["theory","mount","filesystem","linux","docker","storage"],
  content: ["## 한 줄 요약", "마운트(Mount)는 저장 장치나 파일시스템을 디렉터리 트리의 특정 경로에 붙여서 파일처럼 접근할 수 있게 만드는 것입니다.", "", "## 마운트란?", "컴퓨터에는 디스크, USB, 네트워크 공유 폴더 등 여러 저장 공간이 있습니다. 이들을 어디서 접근할지 정해 주는 것이 마운트입니다.", "", "- 마운트 포인트(Mount Point): 파일시스템이 붙는 디렉터리 경로", "- 마운트: 특정 경로에 저장 공간을 연결하는 행위", "- 언마운트(Unmount): 연결을 끊는 행위", "", "## Linux에서의 마운트", "```bash", "mount /dev/sdb1 /mnt/usb", "umount /mnt/usb", "mount", "df -h", "```", "", "### /etc/fstab", "시스템 부팅 시 자동으로 마운트하려면 /etc/fstab에 등록합니다.", "", "### bind mount", "이미 있는 디렉터리를 다른 경로에서도 보이게 할 때 사용합니다.", "", "```bash", "mount --bind /원본/경로 /다른/경로", "```", "", "## Windows에서의 마운트", "Windows는 드라이브 문자(C:, D:, E: 등)로 접근합니다. 새 디스크·USB를 꽂으면 자동 할당됩니다.", "", "## Docker에서의 마운트", "| 방식 | 설명 | 예시 |", "|------|------|------|", "| 볼륨 마운트 | 도커가 관리하는 볼륨을 컨테이너에 연결 | -v myvol:/app/data |", "| 바인드 마운트 | 호스트의 특정 경로를 그대로 연결 | -v /data:/app/data |", "", "---", "### 요약", "마운트는 디스크·USB·네트워크 공유·도커 볼륨을 특정 경로에 연결해 파일처럼 접근하게 만드는 것입니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
