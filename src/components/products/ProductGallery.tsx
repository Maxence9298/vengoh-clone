'use client'

import { useState } from 'react'

type ProductGalleryProps = {
  images: { url: string; alt_text: string | null; position: number }[]
  productTitle: string
}

export default function ProductGallery({ images, productTitle }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (images.length === 0) {
    return (
      <div className="aspect-[3/4] bg-vengoh-primary/20 flex items-center justify-center">
        <span className="text-gray-400">No image available</span>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">
        <div className="w-full h-full bg-vengoh-primary/20 flex items-center justify-center">
          <span className="text-gray-500 text-lg">{productTitle}</span>
        </div>

        {/* Prev/Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 transition-colors"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-16 h-20 bg-gray-100 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                activeIndex === index ? 'border-vengoh-accent' : 'border-transparent'
              }`}
            >
              <div className="w-full h-full bg-vengoh-primary/20 flex items-center justify-center">
                <span className="text-gray-400 text-[8px]">{index + 1}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
