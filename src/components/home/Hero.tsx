'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const slides = [
  { image: '/images/brand/hero-1.jpg', alt: 'Vengoh equestrian lifestyle' },
  { image: '/images/brand/hero-2.jpg', alt: 'Vengoh rider in action' },
  { image: '/images/brand/hero-3.jpg', alt: 'Vengoh premium collection' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-white/80 text-xs sm:text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in">
          Luxembourg &middot; Since 2023
        </p>
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white mb-6 leading-[0.9]">
          Ride with
          <br />
          <span className="italic">Elegance</span>
        </h1>
        <p className="text-white/70 text-base sm:text-lg max-w-lg mb-10 leading-relaxed">
          Premium equestrian fashion designed for those who
          demand excellence in and out of the arena.
        </p>
        <Link
          href="/collections"
          className="border border-white text-white px-10 py-3.5 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-gray-900 transition-all duration-500"
        >
          Discover
        </Link>

        {/* Slide indicators */}
        <div className="absolute bottom-10 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-0.5 transition-all duration-500 ${
                i === current ? 'w-10 bg-white' : 'w-5 bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
