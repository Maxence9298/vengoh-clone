export type Database = {
  public: {
    Tables: {
      collections: {
        Row: {
          id: string
          handle: string
          title: string
          description: string | null
          image_url: string | null
          sort_order: number
          created_at: string
        }
        Insert: Omit<Collection, 'id' | 'created_at'> & { id?: string; created_at?: string }
        Update: Partial<Collection>
      }
      products: {
        Row: Product
        Insert: Omit<Product, 'id' | 'created_at'> & { id?: string; created_at?: string }
        Update: Partial<Product>
      }
      product_variants: {
        Row: ProductVariant
        Insert: Omit<ProductVariant, 'id'> & { id?: string }
        Update: Partial<ProductVariant>
      }
      product_images: {
        Row: ProductImage
        Insert: Omit<ProductImage, 'id'> & { id?: string }
        Update: Partial<ProductImage>
      }
      reviews: {
        Row: Review
        Insert: Omit<Review, 'id' | 'created_at'> & { id?: string; created_at?: string }
        Update: Partial<Review>
      }
      chat_conversations: {
        Row: ChatConversation
        Insert: Omit<ChatConversation, 'id' | 'created_at'> & { id?: string; created_at?: string }
        Update: Partial<ChatConversation>
      }
      chat_messages: {
        Row: ChatMessage
        Insert: Omit<ChatMessage, 'id' | 'created_at'> & { id?: string; created_at?: string }
        Update: Partial<ChatMessage>
      }
      shipping_policies: {
        Row: ShippingPolicy
        Insert: Omit<ShippingPolicy, 'id'> & { id?: string }
        Update: Partial<ShippingPolicy>
      }
    }
  }
}

export type Collection = {
  id: string
  handle: string
  title: string
  description: string | null
  image_url: string | null
  sort_order: number
  created_at: string
}

export type Product = {
  id: string
  shopify_id: number | null
  title: string
  handle: string
  description: string | null
  product_type: string | null
  vendor: string
  price: number
  compare_at_price: number | null
  tags: string[]
  collection_id: string | null
  available: boolean
  created_at: string
}

export type ProductWithRelations = Product & {
  variants: ProductVariant[]
  images: ProductImage[]
  collection: Collection | null
}

export type ProductVariant = {
  id: string
  product_id: string
  title: string
  size: string | null
  color: string | null
  price: number
  available: boolean
  sku: string | null
}

export type ProductImage = {
  id: string
  product_id: string
  url: string
  alt_text: string | null
  position: number
}

export type Review = {
  id: string
  product_id: string | null
  author: string
  rating: number
  body: string | null
  created_at: string
}

export type ChatConversation = {
  id: string
  session_id: string
  created_at: string
}

export type ChatMessage = {
  id: string
  conversation_id: string
  role: 'user' | 'assistant'
  content: string
  metadata: Record<string, unknown>
  created_at: string
}

export type ShippingPolicy = {
  id: string
  region: string
  delivery_days: string
  cost_info: string | null
  carriers: string[]
}
