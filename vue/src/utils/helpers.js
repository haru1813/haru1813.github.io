export function formatDate(iso) {
  try {
    const d = new Date(iso)
    if (Number.isNaN(d.getTime())) return iso
    return d.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
  } catch {
    return iso
  }
}

export function readingTimeFromLines(lines) {
  const text = (lines || []).join('\n').replace(/```[\s\S]*?```/g, '').replace(/[#>*_\-]/g, ' ')
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 220))
  return `${minutes}분`
}

export function catToSlug(cat) {
  return String(cat || '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\//g, '-')
}
