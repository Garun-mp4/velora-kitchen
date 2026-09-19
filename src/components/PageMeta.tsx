import { useEffect } from 'react'

export function PageMeta({ title, description }: { title: string; description?: string }) {
  useEffect(() => {
    document.title = `${title} — VELORA`
    if (description) {
      let node = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
      if (!node) {
        node = document.createElement('meta')
        node.name = 'description'
        document.head.appendChild(node)
      }
      node.content = description
    }
  }, [title, description])
  return null
}
