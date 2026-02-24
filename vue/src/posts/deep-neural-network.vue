<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "deep-neural-network",
  title: "심층 신경망(Deep Neural Network, DNN)",
  date: "2026-02-17",
  summary: "심층 신경망은 은닉층이 여러 개인 깊은 신경망입니다. ReLU, Flatten, 케라스 Sequential로 다층 구조를 만드는 방법을 정리합니다.",
  category: "Technology/AI",
  tags: ["ai", "deep-learning", "dnn", "keras", "relu"],
  content: [
    "## 심층 신경망이란?",
    "**심층 신경망(DNN)**은 **은닉층이 2개 이상**인 신경망입니다. 층을 쌓을수록 복잡한 패턴을 학습할 수 있지만, 과적합·기울기 소실 등 주의할 점이 있습니다.",
    "",
    "입력층 → 은닉층1 → 은닉층2 → ... → 출력층",
    "",
    "---",
    "## ReLU 활성화",
    "은닉층에서는 **ReLU**(Rectified Linear Unit)를 많이 사용합니다.",
    "",
    "ReLU(x) = max(0, x)",
    "",
    "sigmoid보다 **기울기 소실**이 덜하고, 양수 구간에서 기울기가 1이라 학습이 안정적입니다.",
    "",
    "---",
    "## Flatten",
    "2차원 이상의 입력(예: 28×28 이미지)을 **1차원으로 펼치는** 층입니다. Dense 층은 1차원 입력만 받기 때문에 필요합니다.",
    "",
    "```python",
    "model.add(keras.layers.Flatten(input_shape=(28, 28)))  # (28,28) → 784",
    "```",
    "",
    "---",
    "## 다층 심층 신경망 예시",
    "```python",
    "from tensorflow import keras",
    "",
    "model = keras.Sequential()",
    "model.add(keras.layers.Flatten(input_shape=(28, 28)))",
    "model.add(keras.layers.Dense(100, activation='relu'))   # 은닉층",
    "model.add(keras.layers.Dense(10, activation='softmax'))  # 출력층",
    "",
    "model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics='accuracy')",
    "model.fit(train_scaled, train_target, epochs=5, validation_data=(val_scaled, val_target))",
    "```",
    "",
    "---",
    "## model.summary()",
    "모델 구조와 파라미터 수를 확인합니다.",
    "",
    "```python",
    "model.summary()",
    "# Layer (type)         Output Shape       Param #",
    "# flatten (Flatten)     (None, 784)        0",
    "# dense (Dense)         (None, 100)        78500",
    "# dense_1 (Dense)       (None, 10)         1010",
    "# Total params: 79,510",
    "```",
    "",
    "---",
    "## 정리",
    "| 용어 | 요약 |",
    "|------|------|",
    "| 심층 신경망 | 은닉층이 2개 이상인 신경망 |",
    "| ReLU | 은닉층 활성화, 기울기 소실 완화 |",
    "| Flatten | 2D→1D 변환 |",
    "| validation_data | 검증용 데이터로 과적합 모니터링 |"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
