<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "python-variables-input",
  title: "Python 변수와 입출력",
  date: "2026-02-17",
  summary: "Python에서 변수 선언, input()으로 사용자 입력받기, int/float/str 자료형 변환을 정리합니다.",
  category: "Coding/Python",
  tags: ["python", "변수", "input", "자료형", "basics"],
  content: [
    "## 변수란?",
    "변수는 값을 저장하는 이름입니다. Python에서는 타입을 선언하지 않고 바로 할당합니다.",
    "",
    "```python",
    "pi = 3.14159265",
    "r = 10",
    "print(\"원의 둘레 =\", 2 * pi * r)",
    "print(\"원의 넓이 =\", pi * r * r)",
    "```",
    "",
    "## input() - 사용자 입력",
    "`input()`은 사용자로부터 문자열을 입력받습니다. **항상 문자열(str)**로 반환됩니다.",
    "",
    "```python",
    "string = input(\"입력> \")",
    "print(\"자료:\", string)",
    "print(\"자료형:\", type(string))  # <class 'str'>",
    "```",
    "",
    "## 자료형 변환",
    "숫자 연산을 하려면 문자열을 숫자로 변환해야 합니다.",
    "",
    "| 함수 | 설명 | 예시 |",
    "|------|------|------|",
    "| int() | 정수로 변환 | int(\"52\") → 52 |",
    "| float() | 실수로 변환 | float(\"52.273\") → 52.273 |",
    "| str() | 문자열로 변환 | str(52) → \"52\" |",
    "",
    "```python",
    "string_a = input(\"입력A> \")",
    "int_a = int(string_a)",
    "string_b = input(\"입력B> \")",
    "int_b = int(string_b)",
    "print(\"숫자 합:\", int_a + int_b)",
    "```",
    "",
    "## 실전 예: inch → cm 변환",
    "```python",
    "raw_input = input(\"inch 단위의 숫자를 입력해주세요: \")",
    "inch = int(raw_input)",
    "cm = inch * 2.54",
    "print(inch, \"inch는\", cm, \"cm입니다.\")",
    "```",
    "",
    "---",
    "### 요약",
    "- 변수는 `이름 = 값` 형태로 할당",
    "- `input()`은 항상 문자열 반환",
    "- `int()`, `float()`, `str()`로 자료형 변환"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
