const reviews = [
  { author: 'Sophie L.', rating: 5, body: 'Absolutely love my Azalea base layer! The fabric is so soft and the fit is perfect. Worth every penny.', location: 'Luxembourg' },
  { author: 'Marie C.', rating: 5, body: 'The Camellia breeches are the best I have ever worn. The silicone grip is amazing and they are so comfortable for long rides.', location: 'Germany' },
  { author: 'Laura M.', rating: 5, body: 'My daughter loves her Lily kid vest! Perfect for chilly morning rides. Great quality.', location: 'Belgium' },
  { author: 'Charlotte B.', rating: 5, body: 'The Iris breeches are stunning. High waist is so flattering and the knee grip is excellent.', location: 'France' },
  { author: 'Emma R.', rating: 5, body: 'Fast shipping to Germany and beautifully packaged. The Dahlia leggings are my new favorite riding pants!', location: 'Germany' },
  { author: 'Nina W.', rating: 5, body: 'Competition day essential! The white Camellia breeches are perfect and stay clean longer than other brands.', location: 'Netherlands' },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-vengoh-accent text-sm tracking-[0.2em] uppercase mb-2">Testimonials</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900">What Our Riders Say</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Stars count={5} />
            <span className="text-sm text-gray-600">4.9/5 based on 200+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.author} className="bg-gray-50 p-6">
              <Stars count={review.rating} />
              <p className="text-gray-700 text-sm mt-4 mb-4 leading-relaxed">&ldquo;{review.body}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-vengoh-primary flex items-center justify-center">
                  <span className="text-vengoh-accent text-xs font-medium">{review.author[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{review.author}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
