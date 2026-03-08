'use client'

import Image from 'next/image'
import Link from 'next/link'

const TRYONABLE_TYPES = ['Base Layer', 'Breeches', 'Leggings', 'Vest']

type ChatProductCardProps = {
  handle: string
  title: string
  price: number
  imageUrl: string
  productType: string
  onTryOn: (handle: string) => void
}

export default function ChatProductCard({
  handle, title, price, imageUrl, productType, onTryOn
}: ChatProductCardProps) {
  const canTryOn = TRYONABLE_TYPES.includes(productType)

  return (
    <div className="flex gap-3 bg-white border border-gray-200 rounded-lg p-2 my-1">
      <div className="relative w-16 h-20 bg-gray-50 rounded overflow-hidden flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-top"
          sizes="64px"
        />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-gray-400">{productType}</p>
          <p className="text-xs font-medium text-gray-900 line-clamp-2 leading-tight">{title}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-semibold text-gray-900">€{price}</span>
          <div className="flex gap-1.5">
            <Link
              href={`/products/${handle}`}
              className="text-[10px] px-2 py-1 border border-vengoh-accent text-vengoh-accent rounded hover:bg-vengoh-accent hover:text-white transition-colors"
            >
              Voir
            </Link>
            {canTryOn && (
              <button
                onClick={() => onTryOn(handle)}
                className="text-[10px] px-2 py-1 bg-vengoh-accent text-white rounded hover:bg-vengoh-accent/90 transition-colors"
              >
                Essayer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
