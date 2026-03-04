'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type ProductCardProps = {
  handle: string
  title: string
  price: number
  compareAtPrice?: number | null
  imageUrl?: string
  imageAlt?: string
  hoverImageUrl?: string
  productType?: string
}

export default function ProductCard({
  handle,
  title,
  price,
  compareAtPrice,
  imageUrl,
  imageAlt,
  hoverImageUrl,
  productType,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isOnSale = compareAtPrice && compareAtPrice > price

  return (
    <Link
      href={`/products/${handle}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 mb-4">
        {/* Primary image */}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={imageAlt || title}
            fill
            className={`object-cover object-top transition-all duration-700 ${
              hoverImageUrl && isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}

        {/* Hover image */}
        {hoverImageUrl && (
          <Image
            src={hoverImageUrl}
            alt={`${title} - alternate view`}
            fill
            className={`object-cover object-top transition-all duration-700 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}

        {/* No image placeholder */}
        {!imageUrl && (
          <div className="absolute inset-0 bg-vengoh-primary/30 flex items-center justify-center">
            <span className="text-gray-400 text-sm font-serif">{title}</span>
          </div>
        )}

        {/* Sale badge */}
        {isOnSale && (
          <span className="absolute top-3 left-3 bg-vengoh-accent text-white text-[10px] tracking-wider px-2.5 py-1 uppercase">
            Sale
          </span>
        )}

        {/* Quick view overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="bg-white/90 backdrop-blur-sm text-center py-2.5 text-xs tracking-[0.2em] uppercase text-gray-900">
            Quick View
          </div>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1">
        {productType && (
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.15em]">{productType}</p>
        )}
        <h3 className="text-sm text-gray-900 group-hover:text-vengoh-accent transition-colors duration-300">
          {title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm">&euro;{price.toFixed(2)}</span>
          {isOnSale && (
            <span className="text-xs text-gray-400 line-through">&euro;{compareAtPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  )
}
