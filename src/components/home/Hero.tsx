import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] bg-vengoh-primary flex items-center">
      {/* Background pattern/gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-vengoh-primary via-white/30 to-vengoh-primary" />
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-vengoh-accent text-sm tracking-[0.3em] uppercase mb-4">
          Premium Equestrian Fashion
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-gray-900 mb-6 leading-tight">
          Ride in Style
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Discover our luxury equestrian collections, designed in Luxembourg for the modern rider.
          Where elegance meets performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/collections"
            className="inline-block bg-vengoh-accent text-white px-8 py-3 text-sm tracking-wider hover:bg-vengoh-accent/90 transition-colors"
          >
            SHOP COLLECTIONS
          </Link>
          <Link
            href="/collections/new-arrivals"
            className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-colors"
          >
            NEW ARRIVALS
          </Link>
        </div>
      </div>
    </section>
  )
}
