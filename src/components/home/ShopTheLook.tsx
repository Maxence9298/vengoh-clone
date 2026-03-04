import Link from 'next/link'

const looks = [
  {
    title: 'The Classic Rider',
    description: 'Black Azalea base layer paired with Camellia breeches and leather belt.',
    products: ['azalea-base-layer-black', 'camellia-breeches-black', 'vengoh-belt-black'],
    color: 'bg-gray-50',
  },
  {
    title: 'Spring Competition',
    description: 'White Azalea base layer with Iris breeches for a polished competition look.',
    products: ['azalea-base-layer-white', 'iris-breeches-white'],
    color: 'bg-blue-50',
  },
  {
    title: 'Autumn Elegance',
    description: 'Sage green Lily vest with matching Camellia breeches for autumn rides.',
    products: ['lily-vest-sage-green', 'camellia-breeches-sage-green'],
    color: 'bg-green-50',
  },
]

export default function ShopTheLook() {
  return (
    <section className="py-16 sm:py-24 bg-vengoh-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-vengoh-accent text-sm tracking-[0.2em] uppercase mb-2">Inspiration</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">Shop the Look</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {looks.map((look) => (
            <div key={look.title} className={`${look.color} p-8 group`}>
              <div className="aspect-[3/4] bg-white/50 mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Look Preview</span>
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">{look.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{look.description}</p>
              <div className="space-y-1">
                {look.products.map((handle) => (
                  <Link
                    key={handle}
                    href={`/products/${handle}`}
                    className="block text-sm text-vengoh-accent hover:underline"
                  >
                    {handle.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
