import Link from 'next/link'

export const metadata = {
  title: 'B2B / Wholesale | Vengoh Equestrian',
  description: 'Partner with Vengoh Equestrian for wholesale opportunities. Premium equestrian fashion for retailers and equestrian centers.',
}

export default function B2BPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-vengoh-accent">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">B2B / Wholesale</span>
      </nav>

      <div className="max-w-4xl mx-auto">
        {/* Hero section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl text-gray-900 mb-3">Wholesale Partnership</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our network of premium equestrian retailers. Vengoh offers competitive
            wholesale pricing, marketing support, and exclusive collections for our B2B partners.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-vengoh-primary/30">
            <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-vengoh-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>
            </div>
            <h3 className="font-serif text-lg mb-2">Competitive Pricing</h3>
            <p className="text-sm text-gray-600">
              Attractive margins with volume-based pricing tiers for all our product lines.
            </p>
          </div>
          <div className="text-center p-6 bg-vengoh-primary/30">
            <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-vengoh-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
            </div>
            <h3 className="font-serif text-lg mb-2">Marketing Support</h3>
            <p className="text-sm text-gray-600">
              Professional product photos, brand assets, and co-marketing opportunities.
            </p>
          </div>
          <div className="text-center p-6 bg-vengoh-primary/30">
            <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-vengoh-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
              </svg>
            </div>
            <h3 className="font-serif text-lg mb-2">Exclusive Access</h3>
            <p className="text-sm text-gray-600">
              Early access to new collections and exclusive B2B-only products.
            </p>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-gray-50 p-8 sm:p-12">
          <h2 className="font-serif text-2xl text-gray-900 mb-2 text-center">Apply for a Wholesale Account</h2>
          <p className="text-gray-600 text-sm text-center mb-8">
            Fill out the form below and our B2B team will get back to you within 2 business days.
          </p>

          <form className="max-w-xl mx-auto space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="b2bFirstName" className="block text-sm text-gray-700 mb-1">First Name *</label>
                <input
                  type="text"
                  id="b2bFirstName"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent bg-white"
                />
              </div>
              <div>
                <label htmlFor="b2bLastName" className="block text-sm text-gray-700 mb-1">Last Name *</label>
                <input
                  type="text"
                  id="b2bLastName"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent bg-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="b2bCompany" className="block text-sm text-gray-700 mb-1">Company Name *</label>
              <input
                type="text"
                id="b2bCompany"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent bg-white"
              />
            </div>
            <div>
              <label htmlFor="b2bEmail" className="block text-sm text-gray-700 mb-1">Business Email *</label>
              <input
                type="email"
                id="b2bEmail"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent bg-white"
              />
            </div>
            <div>
              <label htmlFor="b2bPhone" className="block text-sm text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                id="b2bPhone"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent bg-white"
              />
            </div>
            <div>
              <label htmlFor="b2bType" className="block text-sm text-gray-700 mb-1">Business Type *</label>
              <select
                id="b2bType"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent bg-white"
              >
                <option value="">Select...</option>
                <option>Equestrian Retailer</option>
                <option>Riding School / Center</option>
                <option>Online Store</option>
                <option>Distributor</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="b2bCountry" className="block text-sm text-gray-700 mb-1">Country *</label>
              <input
                type="text"
                id="b2bCountry"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent bg-white"
              />
            </div>
            <div>
              <label htmlFor="b2bMessage" className="block text-sm text-gray-700 mb-1">Tell us about your business</label>
              <textarea
                id="b2bMessage"
                rows={4}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent resize-none bg-white"
                placeholder="What products are you interested in? Expected order volumes? Any specific requirements?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-vengoh-accent text-white py-3 text-sm tracking-wider hover:bg-vengoh-accent/90 transition-colors"
            >
              SUBMIT APPLICATION
            </button>
            <p className="text-xs text-gray-500 text-center">
              By submitting, you agree to our privacy policy. We&apos;ll respond within 2 business days.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
