<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "singleton-pattern",
  title: "Singleton(싱글톤) 패턴 [생성]",
  date: "2026-02-11",
  summary: "인스턴스가 하나만 존재하도록 보장하는 패턴. 전역 공유 자원에 사용되지만, 테스트/멀티스레드에서 주의가 필요합니다.",
  category: "Technology/Design-Pattern",
  tags: ["theory","design-pattern","oop"],
  content: ["## Singleton(싱글톤) 패턴이란?", "Singleton 패턴은 클래스의 인스턴스가 애플리케이션 전체에서 하나만 존재하도록 보장하는 패턴입니다. 설정 관리자, DB 연결 풀, 로거 등 전역적으로 하나만 있으면 되는 자원에 사용됩니다.", "", "핵심은 이거예요:", "- 생성자를 외부에서 호출하지 못하게 막고, `getInstance()`로 항상 같은 인스턴스를 반환", "- 멀티스레드 환경에선 지연 초기화 시 동기화(synchronized, volatile)에 주의", "", "## 언제 필요할까", "- 전역적으로 하나의 인스턴스만 필요할 때(설정, 연결 풀, 캐시 매니저)", "- 그 인스턴스를 여러 곳에서 공유해야 할 때", "", "## 장점/단점(현실적으로)", "### 장점", "- 인스턴스 하나만 유지해 리소스 절약", "- 전역 접근 포인트 제공", "", "### 단점", "- 테스트에서 목(mock) 교체가 어려움", "- 멀티스레드에서 동시 생성 방지 처리가 필요", "- 전역 상태가 되어 결합도가 올라갈 수 있음", "", "## Java 예제", "### 1) 단순 Eager Singleton", "```java", "public class ConfigManager {", "    private static final ConfigManager INSTANCE = new ConfigManager();", "    private ConfigManager() { }", "    public static ConfigManager getInstance() { return INSTANCE; }", "}", "```", "", "### 2) Lazy Singleton (멀티스레드 고려)", "```java", "public class DatabasePool {", "    private static volatile DatabasePool instance;", "    private DatabasePool() { }", "    public static DatabasePool getInstance() {", "        if (instance == null) {", "            synchronized (DatabasePool.class) {", "                if (instance == null) instance = new DatabasePool();", "            }", "        }", "        return instance;", "    }", "}", "```", "", "### 3) Enum Singleton (가장 권장되는 방식)", "```java", "public enum Logger {", "    INSTANCE;", "    public void log(String msg) { System.out.println(msg); }", "}", "Logger.INSTANCE.log(\"hello\");", "```", "", "## Unity C# 예제 (게임)", "GameManager를 전역 단일 인스턴스로 유지합니다. `MonoBehaviour` 상속 시 씬 전환에도 살아남도록 `DontDestroyOnLoad`를 사용합니다.", "", "### 1) 싱글톤 GameManager", "```csharp", "using UnityEngine;", "", "public class GameManager : MonoBehaviour {", "    private static GameManager _instance;", "", "    public static GameManager Instance {", "        get {", "            if (_instance == null) {", "                _instance = FindObjectOfType<GameManager>();", "                if (_instance == null) {", "                    var go = new GameObject(\"GameManager\");", "                    _instance = go.AddComponent<GameManager>();", "                }", "                DontDestroyOnLoad(_instance.gameObject);", "            }", "            return _instance;", "        }", "    }", "", "    public int Score { get; set; }", "    public int Stage { get; set; } = 1;", "", "    private void Awake() {", "        if (_instance != null && _instance != this) {", "            Destroy(gameObject);", "            return;", "        }", "        DontDestroyOnLoad(gameObject);", "    }", "}", "```", "", "### 2) 다른 스크립트에서 사용", "```csharp", "// 아무 스크립트에서든 호출 가능", "void AddScore(int points) {", "    GameManager.Instance.Score += points;", "}", "", "void LoadNextStage() {", "    GameManager.Instance.Stage++;", "    SceneManager.LoadScene(\"Stage\" + GameManager.Instance.Stage);", "}", "```", "", "### 3) 주의사항", "- `Awake`에서 이미 인스턴스가 있으면 자기 자신을 파괴해 중복 방지", "- `FindObjectOfType`는 부하가 있으므로 `Instance` getter에서만 필요 시 호출", "- 테스트 시 `Instance`를 mock으로 교체하기 어려우므로, 필요하면 `ServiceLocator` 등 DI 패턴 고려", "", "## 정리", "- Singleton은 전역 단일 인스턴스를 보장하는 패턴이지만, 테스트와 멀티스레드에서 주의가 필요합니다.", "- Spring의 `@Scope(\"singleton\")`처럼 DI 프레임워크에서 관리하는 것이 더 테스트하기 좋을 수 있습니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
