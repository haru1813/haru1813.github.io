<script setup>
import ArticleHeader from '@/components/ArticleHeader.vue'
import ArticleBody from '@/components/ArticleBody.vue'

const post = {
  id: "lstm-gru",
  title: "LSTM과 GRU 셀",
  date: "2026-02-17",
  summary: "LSTM과 GRU는 RNN의 장기 의존성 문제를 해결하는 셀입니다. forget gate, cell state, dropout을 정리합니다.",
  category: "Technology/AI",
  tags: ["ai", "deep-learning", "lstm", "gru", "rnn", "keras"],
  content: [
    "## 기본 RNN의 한계",
    "SimpleRNN은 **길은 시퀀스**에서 **기울기 소실/폭발**이 발생해 **장기 의존성**을 학습하기 어렵습니다. LSTM과 GRU가 이 문제를 완화합니다.",
    "",
    "---",
    "## LSTM(Long Short-Term Memory)",
    "**LSTM**은 **셀 상태(cell state)**와 **게이트(forget, input, output)**를 두어 중요 정보를 오래 보존합니다.",
    "",
    "| 게이트 | 역할 |",
    "|--------|------|",
    "| forget gate | 기존 정보를 얼마나 잊을지 |",
    "| input gate | 새 정보를 얼마나 받을지 |",
    "| output gate | 현재 출력에 얼마나 반영할지 |",
    "",
    "```python",
    "model.add(keras.layers.LSTM(8))",
    "model.add(keras.layers.LSTM(8, dropout=0.3))  # 과적합 방지",
    "```",
    "",
    "---",
    "## GRU(Gated Recurrent Unit)",
    "**GRU**는 LSTM보다 **구조가 단순**하고, 파라미터가 적어 학습이 빠른 경우가 많습니다.",
    "",
    "```python",
    "model.add(keras.layers.GRU(8))",
    "model.add(keras.layers.GRU(8, dropout=0.3))",
    "```",
    "",
    "---",
    "## LSTM 전체 예시",
    "```python",
    "model = keras.Sequential()",
    "model.add(keras.layers.Embedding(500, 16, input_shape=(100,)))",
    "model.add(keras.layers.LSTM(8, dropout=0.3))",
    "model.add(keras.layers.Dense(1, activation='sigmoid'))",
    "",
    "model.compile(optimizer='adam', loss='binary_crossentropy', metrics='accuracy')",
    "model.fit(train_seq, train_target, epochs=5, validation_data=(val_seq, val_target))",
    "```",
    "",
    "---",
    "## return_sequences",
    "여러 LSTM/GRU 층을 쌓을 때는 **중간 층**에 `return_sequences=True`를 설정해 타임스텝별 출력을 넘깁니다.",
    "",
    "```python",
    "model.add(keras.layers.LSTM(8, return_sequences=True))  # (batch, timesteps, 8)",
    "model.add(keras.layers.LSTM(8))  # (batch, 8) - 마지막 타임스텝만",
    "```",
    "",
    "---",
    "## 정리",
    "| 용어 | 요약 |",
    "|------|------|",
    "| LSTM | 장기 의존성 학습, 셀 상태·게이트 |",
    "| GRU | LSTM보다 단순, 빠른 학습 |",
    "| dropout | RNN 내부 과적합 방지 |",
    "| return_sequences | 타임스텝별 출력 전달 |"
  ]
}
</script>

<template>
  <ArticleHeader :post="post" />
  <ArticleBody :content="post.content" />
</template>
