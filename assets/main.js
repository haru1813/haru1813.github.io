const POSTS_URL = "./posts/posts.json";

function $(sel, root = document) {
  return root.querySelector(sel);
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" });
  } catch {
    return iso;
  }
}

function readingTimeFromLines(lines) {
  const text = (lines || []).join("\n").replace(/```[\s\S]*?```/g, "").replace(/[#>*_\-]/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes}분`;
}

function uniqueTags(posts) {
  const s = new Set();
  for (const p of posts) for (const t of p.tags || []) s.add(t);
  return Array.from(s).sort((a, b) => a.localeCompare(b));
}

function mdToHtml(lines) {
  // 아주 간단한 마크다운 렌더러(헤더/리스트/코드블럭/문단)
  const out = [];
  let inCode = false;
  let codeLang = "";
  let codeBuf = [];
  let listOpen = false;

  const flushList = () => {
    if (listOpen) {
      out.push("</ul>");
      listOpen = false;
    }
  };

  const flushCode = () => {
    if (!inCode) return;
    const code = escapeHtml(codeBuf.join("\n"));
    out.push(`<pre><code${codeLang ? ` data-lang="${escapeHtml(codeLang)}"` : ""}>${code}</code></pre>`);
    inCode = false;
    codeLang = "";
    codeBuf = [];
  };

  for (const raw of lines || []) {
    const line = String(raw ?? "");

    const codeFence = line.match(/^```(\w+)?\s*$/);
    if (codeFence) {
      if (!inCode) {
        flushList();
        inCode = true;
        codeLang = codeFence[1] || "";
      } else {
        flushCode();
      }
      continue;
    }

    if (inCode) {
      codeBuf.push(line);
      continue;
    }

    const h2 = line.match(/^##\s+(.*)$/);
    if (h2) {
      flushList();
      out.push(`<h2>${escapeHtml(h2[1])}</h2>`);
      continue;
    }
    const h3 = line.match(/^###\s+(.*)$/);
    if (h3) {
      flushList();
      out.push(`<h3>${escapeHtml(h3[1])}</h3>`);
      continue;
    }
    if (/^---\s*$/.test(line)) {
      flushList();
      out.push("<hr />");
      continue;
    }

    const li = line.match(/^\-\s+(.*)$/);
    if (li) {
      if (!listOpen) {
        out.push("<ul>");
        listOpen = true;
      }
      out.push(`<li>${escapeHtml(li[1])}</li>`);
      continue;
    }

    if (line.trim() === "") {
      flushList();
      continue;
    }

    flushList();
    // inline code `...`
    const withInlineCode = escapeHtml(line).replace(/`([^`]+)`/g, "<code>$1</code>");
    out.push(`<p>${withInlineCode}</p>`);
  }

  flushList();
  flushCode();
  return out.join("\n");
}

async function loadPosts() {
  // file:// 로 페이지를 열면 fetch가 막힐 수 있어 전역 데이터(window.__POSTS__)를 fallback으로 사용
  let data = null;
  try {
    const res = await fetch(POSTS_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`posts.json 로드 실패: ${res.status}`);
    data = await res.json();
  } catch {
    data = typeof window !== "undefined" ? window.__POSTS__ : null;
  }

  const posts = data && Array.isArray(data.posts) ? data.posts : [];
  // 최신순 정렬
  posts.sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  return posts;
}

function initThemeToggle() {
  const btn = $("#themeToggle");
  if (!btn) return;

  const apply = (t) => {
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch {}
    const icon = btn.querySelector(".icon");
    if (icon) icon.textContent = t === "dark" ? "☾" : "☀";
  };

  // 초기 아이콘
  apply(document.documentElement.dataset.theme || "dark");

  btn.addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme || "dark";
    apply(cur === "dark" ? "light" : "dark");
  });
}

function renderHome(posts) {
  const grid = $("#postGrid");
  const empty = $("#emptyState");
  const q = $("#q");
  const tagSel = $("#tag");
  if (!grid || !q || !tagSel) return;

  // 태그 옵션 구성
  const tags = uniqueTags(posts);
  for (const t of tags) {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = `#${t}`;
    tagSel.appendChild(opt);
  }

  const state = { query: "", tag: "" };

  const matches = (p) => {
    const qq = state.query.trim().toLowerCase();
    const tt = state.tag;
    if (tt && !(p.tags || []).includes(tt)) return false;
    if (!qq) return true;
    const hay = `${p.title || ""} ${p.summary || ""} ${(p.tags || []).join(" ")}`.toLowerCase();
    return hay.includes(qq);
  };

  const cardHtml = (p) => {
    const href = `./post.html?id=${encodeURIComponent(p.id)}`;
    const tagsHtml = (p.tags || [])
      .slice(0, 5)
      .map((t) => `<a class="tag" href="./#posts" data-tag="${escapeHtml(t)}">#${escapeHtml(t)}</a>`)
      .join("");

    return `
      <a class="card" href="${href}">
        <h3 class="card-title">${escapeHtml(p.title || "제목 없음")}</h3>
        <div class="card-meta">
          <span class="muted small">${escapeHtml(formatDate(p.date || ""))}</span>
          <span class="dot" aria-hidden="true"></span>
          <span class="muted small">읽기 ${escapeHtml(readingTimeFromLines(p.content))}</span>
        </div>
        <div class="muted">${escapeHtml(p.summary || "")}</div>
        <div class="tag-row">${tagsHtml}</div>
      </a>
    `;
  };

  const paint = () => {
    const items = posts.filter(matches);
    grid.innerHTML = items.map(cardHtml).join("");
    empty.hidden = items.length !== 0;

    // 카드 안 태그 클릭 시 필터 적용(해시 이동 없이)
    grid.querySelectorAll("[data-tag]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const t = el.getAttribute("data-tag") || "";
        tagSel.value = t;
        state.tag = t;
        paint();
      });
    });
  };

  q.addEventListener("input", () => {
    state.query = q.value;
    paint();
  });

  tagSel.addEventListener("change", () => {
    state.tag = tagSel.value;
    paint();
  });

  paint();
}

function getParam(name) {
  const u = new URL(window.location.href);
  return u.searchParams.get(name);
}

function renderPost(posts) {
  const id = getParam("id");
  const article = $("#article");
  const title = $("#title");
  const date = $("#date");
  const body = $("#body");
  const tagsEl = $("#tags");
  const rt = $("#readingTime");
  const backToList = $("#backToList");
  const backToListBtn = $("#backToListBtn");
  if (!article || !title || !date || !body || !tagsEl) return;

  const p = posts.find((x) => String(x.id) === String(id)) || null;
  if (!p) {
    title.textContent = "글을 찾을 수 없어요.";
    date.textContent = "";
    if (rt) rt.textContent = "";
    body.innerHTML = `<p class="muted">주소가 올바른지 확인해주세요. (예: <code>post.html?id=hello-pages</code>)</p>`;
    tagsEl.innerHTML = "";
    document.title = "글 없음 | haru1813 블로그";
    return;
  }

  // 글의 category가 있으면 해당 카테고리 목록으로 돌아가게 링크 세팅
  const cat = p.category ? String(p.category) : "전체 보기";
  const listHref = `./index.html?cat=${encodeURIComponent(cat)}`;
  if (backToList) backToList.setAttribute("href", listHref);
  if (backToListBtn) backToListBtn.setAttribute("href", listHref);

  title.textContent = p.title || "제목 없음";
  date.textContent = formatDate(p.date || "");
  if (rt) rt.textContent = `· 읽기 ${readingTimeFromLines(p.content)}`;
  body.innerHTML = mdToHtml(p.content || []);

  tagsEl.innerHTML = (p.tags || [])
    .map((t) => `<span class="tag" title="태그">#${escapeHtml(t)}</span>`)
    .join("");

  document.title = `${p.title} | haru1813 블로그`;
}

function setYear() {
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

async function initCategories() {
  const title = $("#categoryTitle");
  const desc = $("#categoryDesc");
  const list = $("#categoryPosts");
  const empty = $("#categoryEmpty");
  const links = Array.from(document.querySelectorAll("[data-cat]"));
  if (!title || !desc || !list || !empty || links.length === 0) return;

  const menuToggle = $("#menuToggle");
  const scrim = $("#drawerScrim");
  const closeBtn = $("#drawerClose");

  const openDrawer = () => {
    document.body.classList.add("drawer-open");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
  };
  const closeDrawer = () => {
    document.body.classList.remove("drawer-open");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
  };
  const toggleDrawer = () => {
    if (document.body.classList.contains("drawer-open")) closeDrawer();
    else openDrawer();
  };

  if (menuToggle) menuToggle.addEventListener("click", toggleDrawer);
  if (scrim) scrim.addEventListener("click", closeDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });

  const u = new URL(window.location.href);
  const initial = u.searchParams.get("cat") || "전체 보기";

  let posts = [];
  try {
    posts = await loadPosts();
  } catch {
    posts = [];
  }

  const setCounts = () => {
    const byCat = new Map();
    for (const p of posts) {
      const c = p && p.category ? String(p.category) : "";
      if (!c) continue;
      byCat.set(c, (byCat.get(c) || 0) + 1);
    }

    const countPrefix = (prefix) => {
      const pre = `${prefix}/`;
      let sum = 0;
      for (const [k, v] of byCat.entries()) {
        if (k.startsWith(pre)) sum += v;
      }
      return sum;
    };

    const totalEl = document.querySelector("[data-cat-total]");
    if (totalEl) totalEl.textContent = `(${posts.length})`;

    document.querySelectorAll("[data-cat-count]").forEach((el) => {
      const k = el.getAttribute("data-cat-count") || "";
      el.textContent = `(${byCat.get(k) || 0})`;
    });

    document.querySelectorAll("[data-cat-group-count]").forEach((el) => {
      const g = el.getAttribute("data-cat-group-count") || "";
      el.textContent = `(${countPrefix(g)})`;
    });
  };

  const filterByCat = (cat) => {
    if (cat === "전체 보기") return posts;
    return posts.filter((p) => String(p.category || "") === String(cat));
  };

  const renderList = (cat) => {
    const items = filterByCat(cat);
    list.innerHTML = items
      .map((p) => {
        const href = `./post.html?id=${encodeURIComponent(p.id)}`;
        return `
          <a class="cat-post" href="${href}">
            <h3 class="cat-post-title">${escapeHtml(p.title || "제목 없음")}</h3>
            <div class="cat-post-meta">
              <span class="muted small">${escapeHtml(formatDate(p.date || ""))}</span>
              <span class="dot" aria-hidden="true"></span>
              <span class="muted small">읽기 ${escapeHtml(readingTimeFromLines(p.content))}</span>
            </div>
            <p class="cat-post-summary muted">${escapeHtml(p.summary || "")}</p>
          </a>
        `;
      })
      .join("");
    empty.hidden = items.length !== 0;
  };

  const setActive = (cat) => {
    for (const el of links) {
      el.setAttribute("aria-current", String(el.dataset.cat) === String(cat) ? "true" : "false");
    }
    title.textContent = cat === "전체 보기" ? "전체 카테고리" : cat;
    desc.textContent = "선택한 카테고리의 글 목록입니다.";
    renderList(cat);
  };

  links.forEach((el) => {
    el.addEventListener("click", () => {
      const cat = el.dataset.cat || "";
      setActive(cat);
      closeDrawer();
      // URL에만 반영(페이지 리로드 없음)
      try {
        const next = new URL(window.location.href);
        next.searchParams.set("cat", cat);
        window.history.replaceState({}, "", next.toString());
      } catch {}
    });
  });

  setCounts();
  setActive(initial);
}

async function main() {
  setYear();
  initThemeToggle();

  // 홈: 카테고리만 표시(글/검색 비활성)
  if ($("#categories")) {
    await initCategories();
    return;
  }

  // 글 상세만 posts 로드
  if ($("#article")) {
    let posts = [];
    try {
      posts = await loadPosts();
    } catch (e) {
      const title = $("#title");
      const body = $("#body");
      if (title && body) {
        title.textContent = "글 데이터를 불러오지 못했어요.";
        body.innerHTML = `<p class="muted">파일 경로/JSON 형식을 확인해주세요. (${escapeHtml(String(e.message || e))})</p>`;
      }
      return;
    }
    renderPost(posts);
  }
}

main();

