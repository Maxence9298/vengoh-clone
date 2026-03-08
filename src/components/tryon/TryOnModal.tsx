'use client'

import Image from 'next/image'
import { useRef, useCallback, useEffect } from 'react'
import CameraCapture from './CameraCapture'
import type { TryOnData } from './useTryOn'

type TryOnModalProps = {
  tryOn: TryOnData
}

export default function TryOnModal({ tryOn }: TryOnModalProps) {
  const productImagePath = tryOn.selectedProducts[0]?.imagePath || ''
  const productTitle = tryOn.selectedProducts.map(p => p.title).join(' + ')
  const isMultiProduct = tryOn.selectedProducts.length > 1
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') tryOn.closeModal()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [tryOn])

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) return
    if (file.size > 10 * 1024 * 1024) {
      alert('L\'image doit faire moins de 10 Mo')
      return
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      tryOn.setUserPhoto(reader.result as string)
    }
    reader.readAsDataURL(file)
  }, [tryOn])

  const handleSubmit = useCallback(() => {
    tryOn.submitTryOn()
  }, [tryOn])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={tryOn.closeModal}
    >
      <div
        className="no-blur bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
          <h2 className="font-serif text-xl text-gray-900">Essayage Virtuel</h2>
          <button
            onClick={tryOn.closeModal}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fermer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {/* STATE: selecting */}
          {tryOn.state === 'selecting' && (
            <div className="space-y-6">
              <p className="text-sm text-gray-600 text-center">
                Uploadez une photo de vous pour {isMultiProduct ? 'essayer cet ensemble' : `voir comment vous porteriez le ${tryOn.selectedProducts[0]?.title || ''}`}
              </p>

              <div className="flex justify-center gap-2">
                {tryOn.selectedProducts.map((p, i) => (
                  <div key={i} className="relative w-20 h-28 bg-gray-50 flex-shrink-0">
                    <Image
                      src={p.imagePath}
                      alt={p.title}
                      fill
                      className="object-cover object-top"
                      sizes="80px"
                    />
                    {isMultiProduct && (
                      <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[9px] text-center py-0.5 truncate px-1">
                        {p.productType}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Upload option */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full border-2 border-dashed border-gray-300 py-8 px-4 flex flex-col items-center gap-3 hover:border-vengoh-accent hover:bg-vengoh-primary/10 transition-colors group"
              >
                <svg className="w-8 h-8 text-gray-400 group-hover:text-vengoh-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                <span className="text-sm text-gray-600 group-hover:text-vengoh-accent">
                  Uploader une photo
                </span>
                <span className="text-xs text-gray-400">JPG, PNG jusqu&apos;a 10 Mo</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 border-t" />
                <span className="text-xs text-gray-400 uppercase tracking-wider">ou</span>
                <div className="flex-1 border-t" />
              </div>

              {/* Camera option */}
              <button
                onClick={tryOn.switchToCamera}
                className="w-full border border-gray-300 py-4 px-4 flex items-center justify-center gap-2 hover:border-vengoh-accent hover:text-vengoh-accent transition-colors text-sm text-gray-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
                </svg>
                Prendre une photo
              </button>
            </div>
          )}

          {/* STATE: camera */}
          {tryOn.state === 'camera' && (
            <CameraCapture
              onCapture={tryOn.setUserPhoto}
              onBack={tryOn.switchToUpload}
            />
          )}

          {/* STATE: preview */}
          {tryOn.state === 'preview' && tryOn.userPhoto && (
            <div className="space-y-6">
              <p className="text-sm text-gray-600 text-center">Super ! Pret pour l&apos;essayage ?</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-2 text-center">Votre photo</p>
                  <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tryOn.userPhoto}
                      alt="Votre photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-2 text-center">
                    {isMultiProduct ? 'Ensemble' : 'Produit'}
                  </p>
                  {isMultiProduct ? (
                    <div className="grid grid-cols-2 gap-1 aspect-[3/4]">
                      {tryOn.selectedProducts.map((p, i) => (
                        <div key={i} className="relative bg-gray-50 overflow-hidden">
                          <Image src={p.imagePath} alt={p.title} fill className="object-cover object-top" sizes="100px" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                      <Image src={productImagePath} alt={productTitle} fill className="object-cover object-top" sizes="200px" />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={tryOn.clearUserPhoto}
                  className="flex-1 border border-gray-300 py-3 text-sm hover:border-vengoh-accent transition-colors"
                >
                  Changer de photo
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-vengoh-accent text-white py-3 text-sm tracking-wider hover:bg-vengoh-accent/90 transition-colors"
                >
                  ESSAYER
                </button>
              </div>
            </div>
          )}

          {/* STATE: processing */}
          {tryOn.state === 'processing' && (
            <div className="py-12 flex flex-col items-center gap-6">
              <div className="relative w-48 h-64 bg-gray-100 animate-pulse overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-900">Nous cr&eacute;ons votre look...</p>
                <p className="text-xs text-gray-400 mt-1">Cela prend g&eacute;n&eacute;ralement 10 &agrave; 30 secondes</p>
              </div>
            </div>
          )}

          {/* STATE: result */}
          {tryOn.state === 'result' && tryOn.resultImage && (
            <div className="space-y-6">
              <p className="text-sm text-vengoh-accent text-center font-medium">
                Voici le r&eacute;sultat !
              </p>

              <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tryOn.resultImage}
                  alt={`Vous portant le ${productTitle}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={tryOn.downloadResult}
                  className="flex-1 border border-gray-300 py-3 text-sm flex items-center justify-center gap-2 hover:border-vengoh-accent transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Sauvegarder
                </button>
                <button
                  onClick={tryOn.closeModal}
                  className="flex-1 bg-vengoh-accent text-white py-3 text-sm tracking-wider hover:bg-vengoh-accent/90 transition-colors"
                >
                  CONTINUER
                </button>
              </div>

              <button
                onClick={tryOn.clearUserPhoto}
                className="w-full text-center text-xs text-gray-400 hover:text-vengoh-accent transition-colors"
              >
                Essayer avec une autre photo
              </button>
            </div>
          )}

          {/* STATE: error */}
          {tryOn.state === 'error' && (
            <div className="py-12 flex flex-col items-center gap-4">
              <svg className="w-12 h-12 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
              <p className="text-sm text-gray-700 text-center">{tryOn.error}</p>
              <div className="flex gap-3">
                <button
                  onClick={tryOn.retry}
                  className="border border-gray-300 px-6 py-2 text-sm hover:border-vengoh-accent transition-colors"
                >
                  R&eacute;essayer
                </button>
                <button
                  onClick={tryOn.closeModal}
                  className="text-sm text-gray-400 hover:text-gray-600 px-4 py-2"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}

          {/* Footer disclaimer */}
          <p className="text-[10px] text-gray-400 mt-6 text-center">
            Propuls&eacute; par l&apos;IA. Les r&eacute;sultats sont approximatifs.
          </p>
        </div>
      </div>
    </div>
  )
}
