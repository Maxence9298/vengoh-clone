'use client'

import { useState } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-vengoh-accent text-white rounded-full shadow-lg hover:bg-vengoh-accent/90 transition-all hover:scale-105 flex items-center justify-center"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-vengoh-accent text-white p-4">
            <h3 className="font-serif text-lg">Vengoh Assistant</h3>
            <p className="text-white/80 text-xs mt-0.5">Ask me anything about our products!</p>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3">
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-vengoh-primary flex-shrink-0 flex items-center justify-center">
                <span className="text-vengoh-accent text-xs font-medium">V</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-gray-700">
                  Welcome to Vengoh! I&apos;m here to help you find the perfect equestrian wear. How can I assist you today?
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400 bg-gray-50 inline-block px-3 py-1 rounded-full">
                AI chat coming soon
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="border-t p-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent"
                disabled
              />
              <button
                disabled
                className="bg-vengoh-accent text-white px-4 py-2 rounded-lg text-sm opacity-50 cursor-not-allowed"
              >
                Send
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-1 text-center">Powered by Claude AI</p>
          </div>
        </div>
      )}
    </>
  )
}
