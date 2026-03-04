'use client'

import { useState } from 'react'

type Variant = {
  id: string
  title: string
  size: string | null
  color: string | null
  price: number
  available: boolean
}

type VariantSelectorProps = {
  variants: Variant[]
  onSelect?: (variant: Variant) => void
}

export default function VariantSelector({ variants, onSelect }: VariantSelectorProps) {
  const [selectedId, setSelectedId] = useState<string>(
    variants.find((v) => v.available)?.id || variants[0]?.id || ''
  )

  // Group by size and color
  const sizes = [...new Set(variants.filter((v) => v.size).map((v) => v.size))]
  const colors = [...new Set(variants.filter((v) => v.color).map((v) => v.color))]

  const handleSelect = (variant: Variant) => {
    setSelectedId(variant.id)
    onSelect?.(variant)
  }

  // If variants have sizes
  if (sizes.length > 0) {
    return (
      <div>
        <label className="text-sm font-medium text-gray-900 mb-2 block">
          Size: <span className="font-normal text-gray-600">{variants.find((v) => v.id === selectedId)?.size}</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => handleSelect(variant)}
              disabled={!variant.available}
              className={`min-w-[3rem] px-3 py-2 text-sm border transition-colors ${
                selectedId === variant.id
                  ? 'border-vengoh-accent bg-vengoh-accent text-white'
                  : variant.available
                  ? 'border-gray-300 hover:border-vengoh-accent'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed line-through'
              }`}
            >
              {variant.size || variant.title}
            </button>
          ))}
        </div>
      </div>
    )
  }

  // If variants have colors
  if (colors.length > 0) {
    return (
      <div>
        <label className="text-sm font-medium text-gray-900 mb-2 block">
          Color: <span className="font-normal text-gray-600">{variants.find((v) => v.id === selectedId)?.color}</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => handleSelect(variant)}
              disabled={!variant.available}
              className={`px-4 py-2 text-sm border transition-colors ${
                selectedId === variant.id
                  ? 'border-vengoh-accent bg-vengoh-accent text-white'
                  : variant.available
                  ? 'border-gray-300 hover:border-vengoh-accent'
                  : 'border-gray-200 text-gray-300 cursor-not-allowed'
              }`}
            >
              {variant.color || variant.title}
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Default - just show titles
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => handleSelect(variant)}
            disabled={!variant.available}
            className={`px-4 py-2 text-sm border transition-colors ${
              selectedId === variant.id
                ? 'border-vengoh-accent bg-vengoh-accent text-white'
                : variant.available
                ? 'border-gray-300 hover:border-vengoh-accent'
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
            }`}
          >
            {variant.title}
          </button>
        ))}
      </div>
    </div>
  )
}
