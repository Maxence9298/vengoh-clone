import Link from 'next/link'

export const metadata = {
  title: 'Contact Us | Vengoh Equestrian',
  description: 'Get in touch with Vengoh Equestrian. Based in Luxembourg, we are here to help with orders, sizing, and general inquiries.',
}

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-vengoh-accent">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Contact</span>
      </nav>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-gray-900 mb-3">Get in Touch</h1>
          <p className="text-gray-600">
            We&apos;d love to hear from you. Whether you have a question about our products,
            sizing, or anything else, our team is here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-xl mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-gray-700 mb-1">Subject</label>
                <select
                  id="subject"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent"
                >
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Sizing Help</option>
                  <option>Returns & Exchanges</option>
                  <option>Wholesale / B2B</option>
                  <option>Saddle Fitting</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-vengoh-accent text-white py-3 text-sm tracking-wider hover:bg-vengoh-accent/90 transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-xl mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">Company</h3>
                <p className="text-sm text-gray-600">Unbelievable Products S.a r.l.</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">Address</h3>
                <p className="text-sm text-gray-600">
                  74 Grand-Rue<br />
                  L-1660 Luxembourg<br />
                  Luxembourg
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">Email</h3>
                <a href="mailto:info@vengoh.com" className="text-sm text-vengoh-accent hover:underline">
                  info@vengoh.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">Phone</h3>
                <a href="tel:+352661930931" className="text-sm text-vengoh-accent hover:underline">
                  +352 661 930 931
                </a>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">Business Hours</h3>
                <p className="text-sm text-gray-600">Monday - Friday: 9:00 - 17:00 CET</p>
              </div>

              {/* Map placeholder */}
              <div className="mt-8">
                <div className="aspect-[4/3] bg-gray-100 rounded flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <p className="text-sm text-gray-400">Map - 74 Grand-Rue, Luxembourg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
