import Link from 'next/link'

const footerLinks = {
  shop: [
    { name: 'Base Layers', href: '/collections/base-layers' },
    { name: 'Breeches', href: '/collections/breeches' },
    { name: 'Leggings', href: '/collections/leggings' },
    { name: 'Vests', href: '/collections/vests' },
    { name: 'Belts', href: '/collections/belts' },
    { name: 'Kids', href: '/collections/kids' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'B2B / Wholesale', href: '/b2b' },
    { name: 'Careers', href: '/careers' },
  ],
  support: [
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Care Instructions', href: '/care' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Imprint', href: '/imprint' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-serif text-xl mb-2">Join the Vengoh Family</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive updates, exclusive offers, and 10% off your first order.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-900 border border-gray-700 rounded px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-vengoh-accent"
              />
              <button
                type="submit"
                className="bg-vengoh-accent hover:bg-vengoh-accent/90 text-white px-6 py-2 rounded text-sm tracking-wide transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-serif text-sm tracking-wider mb-4">SHOP</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-sm tracking-wider mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-sm tracking-wider mb-4">SUPPORT</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-sm tracking-wider mb-4">LEGAL</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="font-serif text-lg tracking-wider">VENGOH</span>
              <span className="text-gray-500 text-xs">|</span>
              <span className="text-gray-500 text-xs">Unbelievable Products S.a r.l.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-xs">Region:</span>
              <select className="bg-gray-900 border border-gray-700 rounded text-xs text-gray-400 px-2 py-1">
                <option>Europe (EUR €)</option>
                <option>United Kingdom (GBP £)</option>
                <option>United States (USD $)</option>
              </select>
            </div>
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Vengoh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
