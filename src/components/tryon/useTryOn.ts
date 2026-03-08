'use client'

import { useState, useCallback } from 'react'

export type TryOnState =
  | 'idle'
  | 'selecting'
  | 'camera'
  | 'preview'
  | 'processing'
  | 'result'
  | 'error'

export type TryOnProduct = {
  handle: string
  imagePath: string
  title: string
  productType: string
}

export type TryOnData = {
  state: TryOnState
  userPhoto: string | null
  resultImage: string | null
  error: string | null
  selectedProducts: TryOnProduct[]
  openModal: (initialProduct?: TryOnProduct) => void
  closeModal: () => void
  setUserPhoto: (photo: string) => void
  clearUserPhoto: () => void
  switchToCamera: () => void
  switchToUpload: () => void
  setProducts: (products: TryOnProduct[]) => void
  submitTryOn: () => Promise<void>
  retry: () => void
  downloadResult: () => void
}

export function useTryOn(): TryOnData {
  const [state, setState] = useState<TryOnState>('idle')
  const [userPhoto, setUserPhotoState] = useState<string | null>(null)
  const [resultImage, setResultImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [selectedProducts, setSelectedProductsState] = useState<TryOnProduct[]>([])

  const openModal = useCallback((initialProduct?: TryOnProduct) => {
    if (initialProduct) {
      setSelectedProductsState([initialProduct])
    }
    setState('selecting')
  }, [])

  const closeModal = useCallback(() => {
    setState('idle')
    setUserPhotoState(null)
    setResultImage(null)
    setError(null)
    setSelectedProductsState([])
  }, [])

  const setUserPhoto = useCallback((photo: string) => {
    setUserPhotoState(photo)
    setState('preview')
  }, [])

  const clearUserPhoto = useCallback(() => {
    setUserPhotoState(null)
    setState('selecting')
  }, [])

  const switchToCamera = useCallback(() => setState('camera'), [])
  const switchToUpload = useCallback(() => setState('selecting'), [])

  const setProducts = useCallback((products: TryOnProduct[]) => {
    setSelectedProductsState(products.slice(0, 4))
  }, [])

  const submitTryOn = useCallback(async () => {
    if (!userPhoto || selectedProducts.length === 0) return
    setState('processing')
    setError(null)

    try {
      const res = await fetch('/api/try-on', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userPhoto,
          products: selectedProducts.map(p => ({
            imagePath: p.imagePath,
            title: p.title,
            productType: p.productType,
          })),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to generate try-on image')
      }

      setResultImage(data.image)
      setState('result')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setState('error')
    }
  }, [userPhoto, selectedProducts])

  const retry = useCallback(() => {
    setError(null)
    setState('preview')
  }, [])

  const downloadResult = useCallback(() => {
    if (!resultImage) return
    const link = document.createElement('a')
    link.href = resultImage
    link.download = 'vengoh-try-on.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [resultImage])

  return {
    state, userPhoto, resultImage, error, selectedProducts,
    openModal, closeModal, setUserPhoto, clearUserPhoto,
    switchToCamera, switchToUpload, setProducts, submitTryOn, retry, downloadResult,
  }
}
