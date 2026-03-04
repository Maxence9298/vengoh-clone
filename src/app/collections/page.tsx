import Link from 'next/link'
import { collections } from '@/data/seed'

export const metadata = {
  title: 'Collections | Vengoh Equestrian',
  description: 'Browse all Vengoh equestrian collections - base layers, breeches, vests, leggings, and more.',
}

export default function CollectionsPage() {
  // Show main product collections (not color/meta collections)
  const mainCollections = collections.filter(c =>
    ['azalea', 'daisy', 'lily', 'dahlia', 'camellia', 'iris', 'belts', 'kids',
     'competition', 'new-arrivals', 'best-sellers', 'winter', 'summer', 'gift-cards', 'services'].includes(c.handle)
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-vengoh-accent">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Collections</span>
      </nav>

      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl text-gray-900 mb-3">Our Collections</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our range of premium equestrian wear, each collection named after a flower
          and designed to bring elegance to the arena.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {mainCollections.map((collection) => (
          <Link
            key={collection.handle}
            href={`/collections/${collection.handle}`}
            className="group"
          >
            <div className="aspect-[3/4] bg-vengoh-primary/30 overflow-hidden mb-3 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/80 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <span className="font-serif text-2xl text-vengoh-accent">
                      {collection.title[0]}
                    </span>
                  </div>
                  <h2 className="font-serif text-lg text-gray-900">{collection.title}</h2>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
            </div>
            <p className="text-sm text-gray-600 group-hover:text-vengoh-accent transition-colors">
              {collection.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
