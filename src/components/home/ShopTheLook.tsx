import Image from 'next/image'
import Link from 'next/link'

export default function ShopTheLook() {
  return (
    <section className="py-20 sm:py-32 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="text-vengoh-primary/80 text-xs tracking-[0.3em] uppercase mb-3">Our Philosophy</p>
            <h2 className="font-serif text-3xl sm:text-5xl leading-tight">
              Where performance
              <br />
              <span className="italic text-gray-400">meets luxury</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-gray-400 leading-relaxed max-w-md md:ml-auto">
              Every Vengoh garment is born from a simple belief: equestrians deserve clothing
              that performs as beautifully as it looks. Designed in Luxembourg, crafted in Europe.
            </p>
          </div>
        </div>

        {/* Image grid — editorial mosaic */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="col-span-2 row-span-2">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/lifestyle/lifestyle-1.jpg"
                alt="Vengoh equestrian lifestyle"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/lifestyle/sage-green.jpg"
                alt="Sage green collection"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
          <div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/lifestyle/lifestyle-3.jpg"
                alt="Vengoh rider"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
          <div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/lifestyle/baby-pink.jpg"
                alt="Baby pink collection"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
          <div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/lifestyle/navy-collection.jpg"
                alt="Navy collection"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/collections"
            className="border border-white/30 text-white px-10 py-3.5 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-gray-900 transition-all duration-500"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  )
}
