# haru1813.github.io (정적 블로그)

이 폴더는 GitHub Pages(user pages)로 배포할 수 있는 정적 블로그 템플릿입니다.

## 로컬에서 실행

Windows PowerShell:

```powershell
cd C:\Users\haru\Desktop\coding_study\haru1813.github.io
py -m http.server 5173
```

브라우저에서 `http://localhost:5173` 로 접속하세요.

## 글 추가 방법

`posts/posts.json`의 `posts` 배열에 항목을 추가하면 됩니다.

필드:
- `id`: URL에 쓰일 고유 값 (예: `"my-first-post"`)
- `title`: 제목
- `date`: `"YYYY-MM-DD"`
- `summary`: 목록에 보일 요약
- `tags`: 태그 배열
- `content`: 문자열 배열(간단 마크다운)

글 상세 URL 예:
- `post.html?id=hello-pages`

## GitHub Pages 배포(권장 흐름)

1. GitHub에 저장소를 **`haru1813.github.io`** 이름으로 생성
2. 이 폴더의 파일들을 저장소 루트에 커밋/푸시
3. 저장소 Settings → Pages에서:
   - Source: `Deploy from a branch`
   - Branch: `main` / root (`/`)
4. 잠시 후 `https://haru1813.github.io` 로 접속

