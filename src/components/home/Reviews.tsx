'use client'

import { useState } from 'react'

const reviews = [
  { author: 'Sophie L.', body: 'Absolutely love my Azalea base layer. The fabric is incredibly soft and the fit is impeccable.', location: 'Luxembourg' },
  { author: 'Marie C.', body: 'The Camellia breeches are the finest I have ever worn. Exceptional grip and all-day comfort.', location: 'Munich, Germany' },
  { author: 'Charlotte B.', body: 'The Iris breeches are simply stunning. The high waist is so flattering and the quality is unmatched.', location: 'Paris, France' },
  { author: 'Emma R.', body: 'Beautifully packaged, fast delivery, and the Dahlia leggings are now my absolute favorite.', location: 'Berlin, Germany' },
  { author: 'Nina W.', body: 'Competition day essential. The white Camellia breeches stay pristine longer than any other brand.', location: 'Amsterdam, Netherlands' },
]

export default function Reviews() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-vengoh-accent text-xs tracking-[0.3em] uppercase mb-3">Testimonials</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 mb-16">
          Trusted by riders across Europe
        </h2>

        {/* Active review */}
        <div className="min-h-[200px] flex flex-col items-center justify-center">
          <div className="flex gap-1 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-4 h-4 text-vengoh-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="font-serif text-xl sm:text-2xl text-gray-700 italic leading-relaxed max-w-2xl mb-8">
            &ldquo;{reviews[active].body}&rdquo;
          </blockquote>
          <div>
            <p className="text-sm font-medium text-gray-900">{reviews[active].author}</p>
            <p className="text-xs text-gray-400 mt-0.5">{reviews[active].location}</p>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-0.5 transition-all duration-500 ${
                i === active ? 'w-10 bg-vengoh-accent' : 'w-5 bg-gray-300'
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
