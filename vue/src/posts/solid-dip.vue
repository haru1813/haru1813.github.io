<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "solid-dip",
  title: "SOLID-Dependency Inversion Principle(의존성 역전 원칙)",
  date: "2026-02-11",
  summary: "의존성 역전 원칙(DIP)은 구체가 아니라 추상에 의존해야 한다는 원칙입니다.",
  category: "Technology/SOLID",
  tags: ["theory","solid","dip","oop"],
  content: ["## DIP란?", "Dependency Inversion Principle(의존성 역전 원칙)은 고수준 모듈은 저수준 모듈에 의존하면 안 되며, 둘 다 추상화에 의존해야 한다는 원칙입니다.", "", "## Unity C# 예제 (게임)", "`GameManager`가 `PlayerPrefsSaveManager`를 직접 쓰면, 저장 방식을 바꿀 때 GameManager도 수정해야 합니다. 추상에 의존합니다.", "", "### 위반 예", "```csharp", "public class GameManager : MonoBehaviour {", "    PlayerPrefsSaveManager _save = new PlayerPrefsSaveManager();", "    public void SaveGame() { _save.SaveToPlayerPrefs(); }", "}", "```", "", "### 개선 예", "```csharp", "public interface ISaveSystem {", "    void Save(string key, string data);", "    string Load(string key);", "}", "", "public class GameManager : MonoBehaviour {", "    ISaveSystem _save;  // Init 또는 DI로 주입", "    public void Init(ISaveSystem save) { _save = save; }", "    public void SaveGame() { _save.Save(\"game\", GetSaveData()); }", "}", "", "// PlayerPrefs, JSON 파일, 클라우드 등 구현체 교체 가능", "public class PlayerPrefsSaveManager : ISaveSystem { /* ... */ }", "```", "", "고수준(GameManager)은 `ISaveSystem`에만 의존하고, 저수준(PlayerPrefs 등)도 같은 추상을 구현합니다.", "", "---", "### 요약", "DIP는 구체가 아니라 추상(인터페이스, 추상클래스)에 의존하라는 원칙입니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
