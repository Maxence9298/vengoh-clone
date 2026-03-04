'use client'

import Link from 'next/link'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const navigation = [
  {
    name: 'Collections',
    href: '/collections',
    children: [
      { name: 'Azalea - Base Layers', href: '/collections/azalea' },
      { name: 'Daisy - Short Sleeve', href: '/collections/daisy' },
      { name: 'Lily - Vests', href: '/collections/lily' },
      { name: 'Dahlia - Leggings', href: '/collections/dahlia' },
      { name: 'Camellia - Breeches', href: '/collections/camellia' },
      { name: 'Iris - Breeches', href: '/collections/iris' },
      { name: 'Belts', href: '/collections/belts' },
    ],
  },
  { name: 'New Arrivals', href: '/collections/new-arrivals' },
  { name: 'Best Sellers', href: '/collections/best-sellers' },
  { name: 'Kids', href: '/collections/kids' },
  { name: 'Sale', href: '/collections/sale' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-vengoh-accent text-white text-center text-xs py-2 px-4">
        Free shipping on orders over €150 | Made in Europe
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-serif text-2xl tracking-wider font-medium">VENGOH</span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="text-sm tracking-wide hover:text-vengoh-accent transition-colors py-5 inline-block"
                  >
                    {item.name}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-lg border border-gray-100 py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-vengoh-primary hover:text-vengoh-accent transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center space-x-4">
              <button aria-label="Search" className="p-2 hover:text-vengoh-accent transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
              <button aria-label="Account" className="p-2 hover:text-vengoh-accent transition-colors hidden sm:block">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </button>
              <button aria-label="Cart" className="p-2 hover:text-vengoh-accent transition-colors relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 bg-vengoh-accent text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} navigation={navigation} />
    </>
  )
}
