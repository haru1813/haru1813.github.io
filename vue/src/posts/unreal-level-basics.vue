<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "unreal-level-basics",
  title: "레벨과 맵 만들기",
  date: "2026-02-17",
  summary: "Unreal Engine에서 레벨(맵)을 만들고, BSP·스태틱 메시로 바닥과 벽을 배치하는 방법을 정리합니다. 콘텐츠 브라우저, 배치 모드, 라이트까지 다룹니다.",
  category: "Technology/Unreal",
  tags: ["unreal","level","map","bsp","static-mesh","lighting","basics"],
  content: [
    "## 한 줄 요약",
    "**레벨(Level)**은 플레이어가 움직이는 공간입니다. BSP 브러시나 **스태틱 메시(Static Mesh)**로 바닥·벽·오브젝트를 배치하고, **라이트**를 넣어 조명을 설정합니다.",
    "",
    "## 새 레벨 만들기",
    "File → New Level → **Empty Level** 또는 **Basic** 선택. Basic은 기본 조명·플레이어 스타트가 포함된 빈 맵입니다.",
    "",
    "## BSP 브러시",
    "BSP(Blocking)는 에디터 안에서 빠르게 **바닥·벽·천장**을 만들 때 사용합니다.",
    "",
    "### 배치 방법",
    "1. **모드(Modes)** 패널에서 **BSP** 선택",
    "2. Box, Cone, Cylinder 등 브러시 형태 선택",
    "3. 뷰포트에서 드래그해 크기 지정",
    "4. **Geometry Edit** 모드로 꼭짓점 수정 가능",
    "",
    "BSP는 프로토타입에 유리하고, 나중에 스태틱 메시로 교체할 수 있습니다.",
    "",
    "## 스태틱 메시 배치",
    "FBX 등으로 가져온 메시나 Marketplace 에셋을 맵에 배치합니다.",
    "",
    "1. **콘텐츠 브라우저**에서 스태틱 메시 에셋 찾기",
    "2. 뷰포트로 **드래그 앤 드롭**",
    "3. **Details** 패널에서 위치·회전·스케일 조절",
    "",
    "## 자주 쓰는 액터",
    "| 액터 | 용도 |",
    "|------|------|",
    "| Player Start | 플레이어가 스폰되는 위치 |",
    "| Light (Directional, Point, Spot) | 조명 |",
    "| Camera | 시네마틱 시점 |",
    "| Trigger | 특정 영역 진입 시 이벤트 |",
    "",
    "**Player Start**는 반드시 한 개 이상 있어야 플레이 모드가 시작됩니다.",
    "",
    "## 라이팅",
    "| 라이트 종류 | 용도 |",
    "|-------------|------|",
    "| Directional Light | 태양광, 전체 조명 |",
    "| Point Light | 전구처럼 사방으로 퍼지는 조명 |",
    "| Spot Light | 한 방향으로 원뿔형 조명 |",
    "",
    "라이트를 배치한 뒤 **Build** (Ctrl+Shift+; 또는 Build 버튼)를 실행해 라이트를 구워야 최종 조명이 적용됩니다.",
    "",
    "## 저장과 테스트",
    "File → Save Current Level로 레벨을 저장합니다. `.umap` 파일로 Content 폴더에 저장됩니다.",
    "",
    "**플레이(Alt+P)**로 맵을 테스트하고, 캐릭터가 맵을 돌아다니는지 확인합니다.",
    "",
    "---",
    "### 요약",
    "레벨은 BSP 또는 스태틱 메시로 공간을 만들고, Player Start·라이트를 배치해 완성합니다. Basic 레벨로 시작해 BSP로 빠르게 공간을 만들고, 필요하면 스태틱 메시로 다듬습니다."
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
