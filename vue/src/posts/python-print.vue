<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "python-print",
  title: "print",
  date: "2026-02-11",
  summary: "Python의 print() 함수는 값을 화면에 출력하는 가장 기본적인 방법입니다.",
  category: "Coding/Python",
  tags: ["python","print","basics","output"],
  content: ["## print()란?", "print()는 Python에서 값을 표준 출력(화면)에 출력하는 내장 함수입니다.", "", "## 1) 하나만 출력", "```python", "print(\"hello world!\")", "print(42)", "print(3.14)", "```", "", "## 2) 여러 개 출력 (쉼표로 구분)", "여러 값을 쉼표로 나열하면 공백으로 구분되어 한 줄에 출력됩니다.", "", "```python", "print(10, 20, 30, 40, 50)", "```", "", "## 3) sep(구분자)와 end(끝 문자)", "- sep: 값들 사이에 들어갈 문자 (기본값: 공백)", "- end: 출력 끝에 붙을 문자 (기본값: 줄바꿈)", "", "```python", "print(1, 2, 3, sep=\"-\")   # 1-2-3", "print(\"A\", end=\"\")", "print(\"B\", end=\"\")", "print(\"C\")              # ABC", "```", "", "## 4) f-string 포맷팅 (Python 3.6+)", "```python", "name = \"김철수\"", "age = 25", "print(f\"이름: {name}, 나이: {age}\")", "print(f\"원의 넓이: {3.14 * 5 ** 2:.2f}\")", "```", "", "## 5) format() 메서드", "```python", "print(\"{}의 나이는 {}살입니다.\".format(\"홍길동\", 25))", "```", "", "## 6) 이스케이프 문자", "```python", "print(\"줄바꿈\\n두 번째 줄\")", "print(\"탭\\t사이\")", "print(\"따옴표: \\\"문자\\\"\")", "```", "", "---", "### 요약", "print()는 Python에서 화면에 값을 출력하는 기본 함수입니다. sep, end, f-string, format() 등으로 다양한 출력이 가능합니다."]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
