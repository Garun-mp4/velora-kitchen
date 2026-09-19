type Props = { src: string; alt: string; className?: string; eager?: boolean; sizes?: string }

const widths: Record<string, number> = {
  '04-collection-lento-warm-oak.webp': 1024,
  '05-collection-nero-walnut.webp': 1024,
  '06-collection-pura-light.webp': 1024,
  '07-furniture-walk-in-wardrobe.webp': 1024,
  '08-furniture-living-wall.webp': 1024,
  '09-materials-oak-stone-detail.webp': 1024,
  '10-storage-drawer-detail.webp': 1024,
}

function srcSetFor(src: string) {
  if (!src.endsWith('.webp')) return undefined
  const stem = src.slice(0, -5)
  const filename = src.split('/').pop() ?? ''
  const originalWidth = widths[filename] ?? 1536
  return `${stem}-640.webp 640w, ${stem}-960.webp 960w, ${src} ${originalWidth}w`
}

export function ResponsiveImage({ src, alt, className = '', eager = false, sizes = '100vw' }: Props) {
  return <img src={src} srcSet={srcSetFor(src)} sizes={sizes} alt={alt} className={className} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" />
}
