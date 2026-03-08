'use client'

import Image from 'next/image'
import Link from 'next/link'

type OutfitProduct = {
  handle: string
  title: string
  price: number
  imageUrl: string
  productType: string
}

type ChatOutfitCardProps = {
  outfitTitle: string
  occasion: string
  products: OutfitProduct[]
  totalPrice: number
  onTryOnOutfit: (handles: string[]) => void
}

export default function ChatOutfitCard({
  outfitTitle, occasion, products, totalPrice, onTryOnOutfit
}: ChatOutfitCardProps) {
  return (
    <div className="bg-vengoh-primary/20 border border-vengoh-accent/20 rounded-lg p-3 my-1">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-serif text-sm text-gray-900">{outfitTitle}</h4>
        <span className="text-[9px] uppercase tracking-wider bg-vengoh-accent/10 text-vengoh-accent px-1.5 py-0.5 rounded">
          {occasion}
        </span>
      </div>

      <div className="flex gap-1.5 overflow-x-auto pb-2">
        {products.map((p) => (
          <Link key={p.handle} href={`/products/${p.handle}`} className="flex-shrink-0 group">
            <div className="relative w-12 h-16 bg-gray-50 rounded overflow-hidden">
              <Image
                src={p.imageUrl}
                alt={p.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform"
                sizes="48px"
              />
            </div>
            <p className="text-[8px] text-gray-500 text-center mt-0.5 w-12 truncate">{p.productType}</p>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-between mt-1">
        <span className="text-xs font-semibold text-gray-900">€{totalPrice}</span>
        <button
          onClick={() => onTryOnOutfit(products.map(p => p.handle))}
          className="text-[10px] px-3 py-1.5 bg-vengoh-accent text-white rounded hover:bg-vengoh-accent/90 transition-colors"
        >
          Essayer l&apos;ensemble
        </button>
      </div>
    </div>
  )
}
