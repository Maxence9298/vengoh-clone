export type MessageSegment =
  | { type: 'text'; content: string }
  | { type: 'product'; handle: string }
  | { type: 'outfit'; handle: string }

const TAG_REGEX = /\[(PRODUCT|OUTFIT):([a-z0-9-]+)\]/g

export function parseChatMessage(raw: string): MessageSegment[] {
  const segments: MessageSegment[] = []
  let lastIndex = 0

  for (const match of raw.matchAll(TAG_REGEX)) {
    const before = raw.slice(lastIndex, match.index)
    if (before) segments.push({ type: 'text', content: before })

    const kind = match[1].toLowerCase() as 'product' | 'outfit'
    segments.push({ type: kind, handle: match[2] })
    lastIndex = match.index! + match[0].length
  }

  const trailing = raw.slice(lastIndex)
  if (trailing) segments.push({ type: 'text', content: trailing })

  return segments.length > 0 ? segments : [{ type: 'text', content: raw }]
}
