'use client'

import { useCallback } from 'react'
import ProductGallery from '@/components/products/ProductGallery'
import TryOnModal from './TryOnModal'
import { useTryOn } from './useTryOn'

type GalleryImage = {
  url: string
  alt_text: string | null
  position: number
}

type TryOnGalleryWrapperProps = {
  images: GalleryImage[]
  productTitle: string
  productType: string
}

export default function TryOnGalleryWrapper({ images, productTitle, productType }: TryOnGalleryWrapperProps) {
  const tryOn = useTryOn()

  const handleOpenTryOn = useCallback(() => {
    tryOn.openModal({
      handle: 'current-product',
      imagePath: images[0]?.url || '',
      title: productTitle,
      productType,
    })
  }, [tryOn, images, productTitle, productType])

  return (
    <>
      <ProductGallery
        images={images}
        productTitle={productTitle}
        onTryOn={handleOpenTryOn}
      />
      {tryOn.state !== 'idle' && (
        <TryOnModal tryOn={tryOn} />
      )}
    </>
  )
}
