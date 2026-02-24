<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "convolutional-neural-network",
  title: "합성곱 신경망(Convolutional Neural Network, CNN)",
  date: "2026-02-17",
  summary: "CNN은 이미지 등 격자 구조 데이터에 맞는 신경망입니다. Conv2D, MaxPooling2D, 필터, 패딩을 정리합니다.",
  category: "Technology/AI",
  tags: ["ai", "deep-learning", "cnn", "keras", "image-classification"],
  content: [
    "## 합성곱 신경망이란?",
    "**CNN**은 **합성곱(Convolution)** 연산을 사용해 이미지의 **공간적 특징**을 추출하는 신경망입니다. Dense만 사용하는 것보다 이미지 분류에 유리합니다.",
    "",
    "| 장점 | 설명 |",
    "|------|------|",
    "| 지역성 | 작은 영역(필터) 단위로 특징 추출 |",
    "| 파라미터 감소 | 가중치 공유로 파라미터 수 감소 |",
    "| 이동 불변성 | 위치가 바뀌어도 같은 특징 검출 |",
    "",
    "---",
    "## Conv2D",
    "**Conv2D**는 2D 이미지에 **필터(커널)**를 슬라이딩하며 합성곱 연산을 수행합니다.",
    "",
    "```python",
    "model.add(keras.layers.Conv2D(32, kernel_size=3, activation='relu',",
    "                              padding='same', input_shape=(28, 28, 1)))",
    "```",
    "",
    "| 파라미터 | 설명 |",
    "|----------|------|",
    "| 32 | 필터(출력 채널) 개수 |",
    "| kernel_size=3 | 3×3 커널 |",
    "| padding='same' | 출력 크기 유지 (zero padding) |",
    "",
    "---",
    "## MaxPooling2D",
    "**MaxPooling**은 윈도우 안에서 **최대값만** 취해 공간 크기를 줄입니다. 위치 민감도를 낮추고 파라미터를 줄입니다.",
    "",
    "```python",
    "model.add(keras.layers.MaxPooling2D(2))  # 2×2 윈도우, 스트라이드 2",
    "```",
    "",
    "---",
    "## CNN 전체 예시",
    "```python",
    "model = keras.Sequential()",
    "model.add(keras.layers.Conv2D(32, kernel_size=3, activation='relu', padding='same', input_shape=(28,28,1)))",
    "model.add(keras.layers.MaxPooling2D(2))",
    "model.add(keras.layers.Conv2D(64, kernel_size=3, activation='relu', padding='same'))",
    "model.add(keras.layers.MaxPooling2D(2))",
    "model.add(keras.layers.Flatten())",
    "model.add(keras.layers.Dense(100, activation='relu'))",
    "model.add(keras.layers.Dropout(0.4))",
    "model.add(keras.layers.Dense(10, activation='softmax'))",
    "",
    "train_scaled = train_input.reshape(-1, 28, 28, 1) / 255.0",
    "model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics='accuracy')",
    "model.fit(train_scaled, train_target, epochs=5, validation_data=(val_scaled, val_target))",
    "```",
    "",
    "---",
    "## 정리",
    "| 용어 | 요약 |",
    "|------|------|",
    "| CNN | 합성곱으로 이미지 특징 추출 |",
    "| Conv2D | 2D 합성곱 층 |",
    "| MaxPooling2D | 최대 풀링으로 크기 축소 |",
    "| padding='same' | 출력 크기 유지 |"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
