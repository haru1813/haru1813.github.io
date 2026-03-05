function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function processInline(s) {
  return escapeHtml(s)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}

export function mdToHtml(lines) {
  const out = []
  let inCode = false
  let codeLang = ''
  let codeBuf = []
  let listOpen = false
  let tableBuf = []

  const flushList = () => {
    if (listOpen) {
      out.push('</ul>')
      listOpen = false
    }
  }

  const flushTable = () => {
    if (tableBuf.length === 0) return
    const parseRow = (row) => row.split('|').slice(1, -1).map((c) => c.trim())
    const isSep = (r) => /^\|[\s\-:|]+\|$/.test(r.trim())
    const sepIdx = tableBuf.findIndex(isSep)
    const headerRows = sepIdx >= 0 ? tableBuf.slice(0, sepIdx) : tableBuf.slice(0, 1)
    const bodyRows = sepIdx >= 0 ? tableBuf.slice(sepIdx + 1) : tableBuf.slice(1)
    let html = '<table><thead><tr>'
    for (const cell of parseRow(headerRows[0] || '')) {
      html += `<th>${processInline(cell)}</th>`
    }
    html += '</tr></thead><tbody>'
    for (const r of bodyRows) {
      const cells = parseRow(r)
      if (cells.some(Boolean)) {
        html += '<tr>'
        for (const cell of cells) {
          html += `<td>${processInline(cell)}</td>`
        }
        html += '</tr>'
      }
    }
    html += '</tbody></table>'
    out.push(html)
    tableBuf = []
  }

  const flushCode = () => {
    if (!inCode) return
    if (codeLang === 'mermaid') {
      const raw = codeBuf.join('\n')
      out.push(`<div class="mermaid">${escapeHtml(raw)}</div>`)
    } else {
      const code = escapeHtml(codeBuf.join('\n'))
      out.push(`<pre><code${codeLang ? ` data-lang="${escapeHtml(codeLang)}"` : ''}>${code}</code></pre>`)
    }
    inCode = false
    codeLang = ''
    codeBuf = []
  }

  const isTableRow = (s) => /^\s*\|.+\|\s*$/.test(s)

  // 문자열에 \n이 있으면 각 줄을 별도로 처리 (테이블 인식용)
  const allLines = []
  for (const raw of lines || []) {
    const s = String(raw ?? '')
    for (const part of s.split('\n')) {
      allLines.push(part)
    }
  }

  for (const raw of allLines) {
    const line = String(raw ?? '')

    const codeFence = line.match(/^```(\w+)?\s*$/)
    if (codeFence) {
      if (!inCode) {
        flushList()
        flushTable()
        inCode = true
        codeLang = codeFence[1] || ''
      } else {
        flushCode()
      }
      continue
    }

    if (inCode) {
      codeBuf.push(line)
      continue
    }

    const h2 = line.match(/^##\s+(.*)$/)
    if (h2) {
      flushList()
      flushTable()
      out.push(`<h2>${processInline(h2[1])}</h2>`)
      continue
    }
    const h3 = line.match(/^###\s+(.*)$/)
    if (h3) {
      flushList()
      flushTable()
      out.push(`<h3>${processInline(h3[1])}</h3>`)
      continue
    }
    if (/^---\s*$/.test(line)) {
      flushList()
      flushTable()
      out.push('<hr />')
      continue
    }

    if (isTableRow(line)) {
      flushList()
      tableBuf.push(line)
      continue
    }

    if (tableBuf.length > 0) flushTable()

    const li = line.match(/^\-\s+(.*)$/)
    if (li) {
      if (!listOpen) {
        out.push('<ul>')
        listOpen = true
      }
      out.push(`<li>${processInline(li[1])}</li>`)
      continue
    }

    if (line.trim() === '') {
      flushList()
      flushTable()
      continue
    }

    flushList()
    out.push(`<p>${processInline(line)}</p>`)
  }

  flushList()
  flushTable()
  flushCode()
  return out.join('\n')
}
