'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { products, outfits } from '@/data/seed'
import { parseChatMessage } from '@/lib/ai/parse-chat-message'
import ChatProductCard from './ChatProductCard'
import ChatOutfitCard from './ChatOutfitCard'
import TryOnModal from '@/components/tryon/TryOnModal'
import { useTryOn, type TryOnProduct } from '@/components/tryon/useTryOn'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const tryOn = useTryOn()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleTryOnFromChat = useCallback((handle: string) => {
    const product = products.find(p => p.handle === handle)
    if (!product) return
    tryOn.openModal({
      handle: product.handle,
      imagePath: product.images[0]?.url || '',
      title: product.title,
      productType: product.product_type || '',
    })
  }, [tryOn])

  const handleTryOnOutfitFromChat = useCallback((handles: string[]) => {
    const outfitProducts: TryOnProduct[] = handles
      .map(h => products.find(p => p.handle === h))
      .filter(Boolean)
      .map(p => ({
        handle: p!.handle,
        imagePath: p!.images[0]?.url || '',
        title: p!.title,
        productType: p!.product_type || '',
      }))
    tryOn.setProducts(outfitProducts)
    tryOn.openModal()
  }, [tryOn])

  function renderAssistantMessage(content: string) {
    const segments = parseChatMessage(content)
    return (
      <div className="space-y-1">
        {segments.map((seg, i) => {
          if (seg.type === 'text') {
            return seg.content.trim() ? (
              <p key={i} className="text-sm whitespace-pre-wrap">{seg.content}</p>
            ) : null
          }
          if (seg.type === 'product') {
            const product = products.find(p => p.handle === seg.handle)
            if (!product) return null
            return (
              <ChatProductCard
                key={i}
                handle={product.handle}
                title={product.title}
                price={product.price}
                imageUrl={product.images[0]?.url || ''}
                productType={product.product_type || ''}
                onTryOn={handleTryOnFromChat}
              />
            )
          }
          if (seg.type === 'outfit') {
            const outfit = outfits.find(o => o.handle === seg.handle)
            if (!outfit) return null
            const outfitProducts = outfit.product_handles
              .map(h => products.find(p => p.handle === h))
              .filter(Boolean)
              .map(p => ({
                handle: p!.handle,
                title: p!.title,
                price: p!.price,
                imageUrl: p!.images[0]?.url || '',
                productType: p!.product_type || '',
              }))
            const totalPrice = outfitProducts.reduce((sum, p) => sum + p.price, 0)
            return (
              <ChatOutfitCard
                key={i}
                outfitTitle={outfit.title}
                occasion={outfit.occasion}
                products={outfitProducts}
                totalPrice={totalPrice}
                onTryOnOutfit={handleTryOnOutfitFromChat}
              />
            )
          }
          return null
        })}
      </div>
    )
  }

  async function sendMessage() {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')

    const updatedMessages = [...messages, { role: 'user' as const, content: userMessage }]
    setMessages(updatedMessages)
    setIsLoading(true)

    // Add empty assistant message for streaming
    setMessages(prev => [...prev, { role: 'assistant', content: '' }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          messages: messages,
        }),
      })

      if (!res.ok || !res.body) throw new Error('Failed to connect')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const lines = decoder.decode(value).split('\n').filter(Boolean)
        for (const line of lines) {
          try {
            const data = JSON.parse(line)
            if (data.type === 'text') {
              setMessages(prev => {
                const updated = [...prev]
                const last = updated[updated.length - 1]
                if (last && last.role === 'assistant') {
                  updated[updated.length - 1] = {
                    ...last,
                    content: last.content + data.text,
                  }
                }
                return updated
              })
            } else if (data.type === 'error') {
              setMessages(prev => {
                const updated = [...prev]
                updated[updated.length - 1] = { role: 'assistant', content: data.error }
                return updated
              })
            }
          } catch {
            // skip unparseable chunks
          }
        }
      }
    } catch {
      setMessages(prev => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          role: 'assistant',
          content: "I apologize, but I'm having trouble connecting. Please try again in a moment.",
        }
        return updated
      })
    } finally {
      setIsLoading(false)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

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
            <h3 className="font-serif text-lg">Veno Assistant</h3>
            <p className="text-white/80 text-xs mt-0.5">Ask me anything about our products!</p>
          </div>

          {/* Messages */}
          <div className="h-[28rem] overflow-y-auto p-4 space-y-3">
            {/* Welcome message */}
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-vengoh-primary flex-shrink-0 flex items-center justify-center">
                <span className="text-vengoh-accent text-xs font-medium">V</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-gray-700">
                  Welcome to Veno! I&apos;m here to help you find the perfect equestrian wear. How can I assist you today?
                </p>
              </div>
            </div>

            {/* Conversation messages */}
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-vengoh-primary flex-shrink-0 flex items-center justify-center">
                    <span className="text-vengoh-accent text-xs font-medium">V</span>
                  </div>
                )}
                <div
                  className={`rounded-lg p-3 max-w-[85%] ${
                    msg.role === 'user'
                      ? 'bg-vengoh-accent text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {msg.role === 'assistant'
                    ? renderAssistantMessage(msg.content || '\u00A0')
                    : <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  }
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && messages[messages.length - 1]?.content === '' && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-vengoh-primary flex-shrink-0 flex items-center justify-center">
                  <span className="text-vengoh-accent text-xs font-medium">V</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-vengoh-accent"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className={`bg-vengoh-accent text-white px-4 py-2 rounded-lg text-sm transition-opacity ${
                  isLoading || !input.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-vengoh-accent/90'
                }`}
              >
                Send
              </button>
            </div>
            <p className="text-[10px] text-gray-400 mt-1 text-center">Powered by Gemini AI</p>
          </div>
        </div>
      )}

      {/* Try-on modal triggered from chat */}
      {tryOn.state !== 'idle' && <TryOnModal tryOn={tryOn} />}
    </>
  )
}
