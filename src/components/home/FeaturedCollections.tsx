import Image from 'next/image'
import Link from 'next/link'

const collections = [
  {
    name: 'Azalea',
    subtitle: 'Base Layers',
    description: 'Technical precision meets refined aesthetics. Our signature base layer, crafted for the discerning equestrian.',
    image: '/images/collections/azalea.png',
    href: '/collections/azalea',
    align: 'left' as const,
  },
  {
    name: 'Camellia',
    subtitle: 'Breeches',
    description: 'Italian fabric, full-seat silicone grip, and a silhouette that flatters. The breeches you deserve.',
    image: '/images/collections/camellia.png',
    href: '/collections/camellia',
    align: 'right' as const,
  },
  {
    name: 'Iris',
    subtitle: 'Breeches',
    description: 'High-waist design with knee grip. Modern, sleek, and undeniably elegant.',
    image: '/images/collections/iris.png',
    href: '/collections/iris',
    align: 'left' as const,
  },
]

export default function FeaturedCollections() {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-vengoh-accent text-xs tracking-[0.3em] uppercase mb-3">Collections</p>
          <h2 className="font-serif text-3xl sm:text-5xl text-gray-900 leading-tight">
            Each piece, a statement.
            <br />
            <span className="italic text-gray-400">Each collection, a story.</span>
          </h2>
        </div>

        {/* Alternating collection showcases */}
        <div className="space-y-24 sm:space-y-32">
          {collections.map((col) => (
            <div
              key={col.name}
              className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${
                col.align === 'right' ? 'md:direction-rtl' : ''
              }`}
            >
              <div className={`${col.align === 'right' ? 'md:order-2' : ''}`}>
                <Link href={col.href} className="block group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    <Image
                      src={col.image}
                      alt={col.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Link>
              </div>
              <div className={`flex flex-col justify-center ${col.align === 'right' ? 'md:order-1 md:text-right' : ''}`}>
                <p className="text-vengoh-accent text-xs tracking-[0.2em] uppercase mb-2">{col.subtitle}</p>
                <h3 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-4">{col.name}</h3>
                <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
                  {col.description}
                </p>
                <Link
                  href={col.href}
                  className={`text-xs tracking-[0.2em] uppercase text-gray-900 hover:text-vengoh-accent transition-colors inline-flex items-center gap-2 ${
                    col.align === 'right' ? 'md:self-end' : ''
                  }`}
                >
                  Explore {col.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
