import Link from 'next/link'

const featured = [
  { name: 'Azalea', subtitle: 'Base Layers', href: '/collections/azalea', color: 'bg-pink-50' },
  { name: 'Camellia', subtitle: 'Breeches', href: '/collections/camellia', color: 'bg-amber-50' },
  { name: 'Lily', subtitle: 'Vests', href: '/collections/lily', color: 'bg-green-50' },
  { name: 'Dahlia', subtitle: 'Leggings', href: '/collections/dahlia', color: 'bg-purple-50' },
  { name: 'Iris', subtitle: 'Breeches', href: '/collections/iris', color: 'bg-blue-50' },
  { name: 'Belts', subtitle: 'Accessories', href: '/collections/belts', color: 'bg-orange-50' },
]

export default function FeaturedCollections() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-vengoh-accent text-sm tracking-[0.2em] uppercase mb-2">Explore</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Our Collections</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {featured.map((collection) => (
            <Link
              key={collection.name}
              href={collection.href}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <div className={`absolute inset-0 ${collection.color} transition-transform group-hover:scale-105 duration-500`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="font-serif text-lg text-vengoh-accent">{collection.name[0]}</span>
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-1">{collection.name}</h3>
                <p className="text-sm text-gray-600">{collection.subtitle}</p>
                <span className="mt-4 text-xs tracking-wider text-vengoh-accent uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Shop Now &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
