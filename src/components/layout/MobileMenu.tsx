'use client'

import Link from 'next/link'
import { useState } from 'react'

type NavItem = {
  name: string
  href: string
  children?: { name: string; href: string }[]
}

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  navigation: NavItem[]
}

export default function MobileMenu({ open, onClose, navigation }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />

      {/* Panel */}
      <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-serif text-xl tracking-wider">VENGOH</span>
          <button onClick={onClose} className="p-2" aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
          {navigation.map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex-1 py-3 text-sm tracking-wide"
                >
                  {item.name}
                </Link>
                {item.children && (
                  <button
                    onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                    className="p-3"
                    aria-label={`Expand ${item.name}`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform ${expandedItem === item.name ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                )}
              </div>
              {item.children && expandedItem === item.name && (
                <div className="pl-4 pb-2 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={onClose}
                      className="block py-2 text-sm text-gray-600 hover:text-vengoh-accent"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-6 border-t mt-6 space-y-1">
            <Link href="/contact" onClick={onClose} className="block py-3 text-sm tracking-wide">
              Contact
            </Link>
            <Link href="/b2b" onClick={onClose} className="block py-3 text-sm tracking-wide">
              B2B / Wholesale
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
