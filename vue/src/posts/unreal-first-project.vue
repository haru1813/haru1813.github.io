<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "unreal-first-project",
  title: "Unreal Engine 첫 프로젝트 만들기",
  date: "2026-02-17",
  summary: "Unreal Engine에서 새 프로젝트를 만들고, 에디터 레이아웃과 폴더 구조를 파악합니다. Blueprint/C++ 선택, 템플릿 활용법을 정리합니다.",
  category: "Technology/Unreal",
  tags: ["unreal","project","editor","blueprint","c++","basics"],
  content: [
    "## 한 줄 요약",
    "Unreal Engine에서 **게임(Games)** 카테고리의 **Third Person** 또는 **First Person** 템플릿을 선택하면, 이미 캐릭터와 이동이 구현된 프로젝트가 생성됩니다. 바로 플레이 테스트가 가능합니다.",
    "",
    "## 새 프로젝트 만들기",
    "1. Epic Games Launcher → Unreal Engine → **Launch** 클릭",
    "2. **프로젝트 브라우저**에서 **게임(Games)** 카테고리 선택",
    "3. 템플릿 선택:",
    "   - **Third Person**: 3인칭 시점, 기본 캐릭터 포함",
    "   - **First Person**: 1인칭 시점",
    "   - **Blank**: 빈 프로젝트 (처음부터 구성)",
    "4. 프로젝트 설정:",
    "   - **프로젝트 이름**",
    "   - **경로**",
    "   - **Blueprint** 또는 **C++** (Blueprint가 스크립팅 없이 시작하기 쉬움)",
    "5. **생성(Create Project)** 클릭",
    "",
    "## 에디터 레이아웃 (한글 버전 기준)",
    "| 영역 | 설명 |",
    "|------|------|",
    "| 뷰포트 | 3D 씬 보기·편집, WASD+마우스로 카메라 이동 |",
    "| 월드 아웃라인 | 씬에 있는 모든 오브젝트 목록 |",
    "| 세부사항 | 선택한 오브젝트의 프로퍼티 |",
    "| 콘텐츠 브라우저 | 에셋(모델, 머티리얼, 블루프린트 등) 관리 |",
    "| 툴바 | 재생, 저장, 빌드 등 단축 버튼 |",
    "",
    "## 프로젝트 폴더 구조",
    "콘텐츠 브라우저는 프로젝트 폴더의 `Content` 디렉터리와 연결됩니다.",
    "",
    "| 폴더/파일 | 설명 |",
    "|------------|------|",
    "| Content/ | 에셋 저장 위치 (블루프린트, 스태틱 메시, 머티리얼 등) |",
    "| Config/ | 설정 파일 (DefaultEngine.ini 등) |",
    "| Source/ | C++ 소스 코드 (C++ 프로젝트일 때) |",
    "| .uproject | 프로젝트 메인 파일 |",
    "",
    "## Blueprint vs C++",
    "| 방식 | 특징 |",
    "|------|------|",
    "| Blueprint | 비주얼 스크립팅, 빠른 프로토타입, 초보자 친화적 |",
    "| C++ | 성능·복잡한 로직에 유리, 컴파일 필요 |",
    "",
    "처음에는 **Blueprint**로 시작하고, 필요할 때 C++로 전환하거나 혼합해 사용할 수 있습니다.",
    "",
    "## 재생 테스트",
    "툴바의 **재생(▶)** 버튼 또는 **Alt+P**로 에디터 안에서 바로 게임을 실행할 수 있습니다. **Esc**로 종료합니다.",
    "",
    "---",
    "### 요약",
    "프로젝트 브라우저에서 게임 템플릿을 선택해 프로젝트를 만들고, 뷰포트·월드 아웃라이너·디테일·콘텐츠 브라우저로 에디터를 사용합니다. Blueprint로 시작하면 코딩 없이 로직을 구현할 수 있습니다."
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
