import Link from 'next/link'

type ProductCardProps = {
  handle: string
  title: string
  price: number
  compareAtPrice?: number | null
  imageUrl?: string
  imageAlt?: string
  productType?: string
}

export default function ProductCard({
  handle,
  title,
  price,
  compareAtPrice,
  imageUrl,
  imageAlt,
  productType,
}: ProductCardProps) {
  const isOnSale = compareAtPrice && compareAtPrice > price

  return (
    <Link href={`/products/${handle}`} className="group">
      <div className="aspect-[3/4] bg-gray-100 overflow-hidden mb-3 relative">
        {imageUrl ? (
          <div className="w-full h-full bg-vengoh-primary/20 flex items-center justify-center">
            <span className="text-gray-400 text-sm">{title}</span>
          </div>
        ) : (
          <div className="w-full h-full bg-vengoh-primary/20 flex items-center justify-center">
            <span className="text-gray-400 text-sm">{title}</span>
          </div>
        )}
        {isOnSale && (
          <span className="absolute top-2 left-2 bg-vengoh-accent text-white text-xs px-2 py-1">
            SALE
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
      </div>
      <div>
        {productType && (
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{productType}</p>
        )}
        <h3 className="text-sm text-gray-900 group-hover:text-vengoh-accent transition-colors">{title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-medium">&euro;{price.toFixed(2)}</span>
          {isOnSale && (
            <span className="text-sm text-gray-400 line-through">&euro;{compareAtPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  )
}
