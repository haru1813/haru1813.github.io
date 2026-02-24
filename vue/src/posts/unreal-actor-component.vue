<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "unreal-actor-component",
  title: "Actor와 컴포넌트",
  date: "2026-02-17",
  summary: "Unreal Engine에서 Actor는 씬에 배치 가능한 오브젝트이고, 컴포넌트는 그 기능을 구성합니다. Pawn, Character, Actor 계층과 자주 쓰는 컴포넌트를 정리합니다.",
  category: "Technology/Unreal",
  tags: ["unreal","actor","component","pawn","character","basics"],
  content: [
    "## 한 줄 요약",
    "**Actor**는 월드(씬)에 배치할 수 있는 오브젝트의 기본 클래스입니다. **컴포넌트(Component)**는 Actor에 붙어 위치·모양·물리·입력 등 기능을 제공합니다.",
    "",
    "## Actor 계층 구조",
    "| 클래스 | 설명 |",
    "|--------|------|",
    "| AActor | 모든 배치 가능 오브젝트의 부모 |",
    "| APawn | 조종 가능한 오브젝트 (AI 또는 플레이어) |",
    "| ACharacter | 캐릭터 전용 (Capsule, Skeletal Mesh, Character Movement) |",
    "| AStaticMeshActor | 스태틱 메시를 가진 기본 Actor |",
    "",
    "캐릭터(플레이어, AI)는 **Character**를 상속하면 이동·충돌·애니메이션 설정이 이미 갖춰져 있습니다.",
    "",
    "## 자주 쓰는 컴포넌트",
    "",
    "### Scene / Root",
    "Actor의 루트. 다른 컴포넌트의 부모가 됩니다.",
    "",
    "### Static Mesh / Skeletal Mesh",
    "| 컴포넌트 | 용도 |",
    "|----------|------|",
    "| Static Mesh | 건물, 바닥 등 변형 없는 모델 |",
    "| Skeletal Mesh | 캐릭터, 애니메이션 있는 모델 |",
    "",
    "### Collision (Capsule, Box, Sphere)",
    "충돌 영역을 정의합니다. Character는 기본적으로 **Capsule Collision**을 가집니다.",
    "",
    "### Character Movement",
    "Character 전용. 걷기·점프·공중 이동·경사 처리 등을 담당합니다.",
    "",
    "### Camera",
    "시점(1인칭/3인칭)을 담당합니다. Spring Arm과 함께 사용해 시점을 부드럽게 따라가게 할 수 있습니다.",
    "",
    "### Spring Arm",
    "카메라가 플레이어를 따라가면서 장애물에 가리지 않도록 거리·각도를 조절합니다.",
    "",
    "## 컴포넌트 추가 방법",
    "1. Actor/Blueprint 선택",
    "2. **Add** 버튼 또는 **Components** 패널에서 우클릭",
    "3. 추가할 컴포넌트 선택 (Static Mesh, Collision, Camera 등)",
    "",
    "## Blueprint에서 컴포넌트 접근",
    "Get Component by Class 노드로 특정 컴포넌트를 찾아, 그 컴포넌트의 함수·변수를 호출할 수 있습니다.",
    "",
    "예: Character Movement 컴포넌트의 Jump(), Add Movement Input() 등.",
    "",
    "---",
    "### 요약",
    "Actor는 씬에 배치 가능한 오브젝트이고, 컴포넌트로 메시·충돌·이동·카메라 등을 붙입니다. Character = Pawn + Capsule + Character Movement + Skeletal Mesh 조합으로, 캐릭터 게임의 기본이 됩니다."
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
