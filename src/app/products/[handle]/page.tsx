import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products, collections, reviews as allReviews } from '@/data/seed'
import ProductGallery from '@/components/products/ProductGallery'
import VariantSelector from '@/components/products/VariantSelector'

type Props = {
  params: Promise<{ handle: string }>
}

export async function generateMetadata({ params }: Props) {
  const { handle } = await params
  const product = products.find(p => p.handle === handle)
  if (!product) return { title: 'Product Not Found' }
  return {
    title: `${product.title} | Vengoh Equestrian`,
    description: product.description?.replace(/<[^>]*>/g, '').slice(0, 160),
  }
}

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }))
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params
  const product = products.find(p => p.handle === handle)

  if (!product) {
    notFound()
  }

  const collection = collections.find(c => c.handle === product.collection_handle)
  const productReviews = allReviews.filter(r => r.product_handle === handle)

  // Create variant objects with IDs for the selector
  const variants = product.variants.map((v, i) => ({
    id: `variant-${i}`,
    title: v.title,
    size: v.size,
    color: null,
    price: v.price,
    available: true,
  }))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-vengoh-accent">Home</Link>
        <span className="mx-2">/</span>
        {collection && (
          <>
            <Link href={`/collections/${collection.handle}`} className="hover:text-vengoh-accent">
              {collection.title}
            </Link>
            <span className="mx-2">/</span>
          </>
        )}
        <span className="text-gray-900">{product.title}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image gallery */}
        <ProductGallery
          images={product.images.map((img, i) => ({ ...img, position: i }))}
          productTitle={product.title}
        />

        {/* Product info */}
        <div>
          {product.product_type && (
            <p className="text-sm text-vengoh-accent tracking-wider uppercase mb-1">
              {product.product_type}
            </p>
          )}
          <h1 className="font-serif text-3xl text-gray-900 mb-4">{product.title}</h1>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-medium">&euro;{product.price.toFixed(2)}</span>
          </div>

          {/* Variant selector */}
          {variants.length > 1 && (
            <div className="mb-6">
              <VariantSelector variants={variants} />
            </div>
          )}

          {/* Add to cart */}
          <button className="w-full bg-vengoh-accent text-white py-3 px-8 text-sm tracking-wider hover:bg-vengoh-accent/90 transition-colors mb-4">
            ADD TO CART
          </button>

          <button className="w-full border border-gray-300 text-gray-900 py-3 px-8 text-sm tracking-wider hover:border-vengoh-accent hover:text-vengoh-accent transition-colors mb-8">
            ADD TO WISHLIST
          </button>

          {/* Description */}
          {product.description && (
            <div className="border-t pt-6 mb-6">
              <h2 className="font-serif text-lg mb-3">Description</h2>
              <div
                className="text-sm text-gray-600 leading-relaxed prose prose-sm"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          )}

          {/* Details */}
          <div className="border-t pt-6 mb-6 space-y-3">
            <h2 className="font-serif text-lg mb-3">Details</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-gray-500">Brand</span>
              <span>Vengoh</span>
              <span className="text-gray-500">Type</span>
              <span>{product.product_type}</span>
              <span className="text-gray-500">Collection</span>
              <span>{collection?.title || 'N/A'}</span>
            </div>
          </div>

          {/* Shipping info */}
          <div className="border-t pt-6 space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-vengoh-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <span>Free shipping on orders over &euro;150</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-vengoh-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
              </svg>
              <span>14-day returns</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-vengoh-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <span>EU 3-7 business days delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews section */}
      {productReviews.length > 0 && (
        <section className="mt-16 border-t pt-12">
          <h2 className="font-serif text-2xl text-gray-900 mb-8">Customer Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {productReviews.map((review, i) => (
              <div key={i} className="bg-gray-50 p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      className={`w-4 h-4 ${j < review.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">&ldquo;{review.body}&rdquo;</p>
                <p className="text-sm font-medium">{review.author}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
