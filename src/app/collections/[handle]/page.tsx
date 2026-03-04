import Link from 'next/link'
import { notFound } from 'next/navigation'
import { collections, products } from '@/data/seed'
import ProductCard from '@/components/products/ProductCard'

type Props = {
  params: Promise<{ handle: string }>
}

export async function generateMetadata({ params }: Props) {
  const { handle } = await params
  const collection = collections.find(c => c.handle === handle)
  if (!collection) return { title: 'Collection Not Found' }
  return {
    title: `${collection.title} | Vengoh Equestrian`,
    description: collection.description,
  }
}

export function generateStaticParams() {
  return collections.map((c) => ({ handle: c.handle }))
}

export default async function CollectionPage({ params }: Props) {
  const { handle } = await params
  const collection = collections.find(c => c.handle === handle)

  if (!collection) {
    notFound()
  }

  // Filter products that belong to this collection or have matching tags
  const collectionProducts = products.filter(
    p => p.collection_handle === handle || p.tags.includes(handle)
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-vengoh-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/collections" className="hover:text-vengoh-accent">Collections</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{collection.title}</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl text-gray-900 mb-3">{collection.title}</h1>
        {collection.description && (
          <p className="text-gray-600 max-w-2xl mx-auto">{collection.description}</p>
        )}
        <p className="text-sm text-gray-500 mt-2">{collectionProducts.length} products</p>
      </div>

      {/* Products grid */}
      {collectionProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {collectionProducts.map((product) => (
            <ProductCard
              key={product.handle}
              handle={product.handle}
              title={product.title}
              price={product.price}
              productType={product.product_type}
              imageUrl={product.images[0]?.url}
              imageAlt={product.images[0]?.alt_text}
              hoverImageUrl={product.images[1]?.url}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500">No products in this collection yet.</p>
          <Link href="/collections" className="text-vengoh-accent hover:underline mt-2 inline-block">
            Browse all collections
          </Link>
        </div>
      )}
    </div>
  )
}
