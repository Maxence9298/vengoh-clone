/**
 * Database Seeding Script
 *
 * Usage:
 *   npx tsx scripts/seed.ts
 *
 * Requires NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
 * environment variables to be set (or in .env.local)
 */

import { createClient } from '@supabase/supabase-js'
import { collections, products, reviews, shippingPolicies } from '../src/data/seed'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
  console.error('Set these in .env.local or as environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function seed() {
  console.log('Seeding database...\n')

  // 1. Seed collections
  console.log('Seeding collections...')
  const { data: collectionData, error: collectionError } = await supabase
    .from('collections')
    .upsert(collections.map(c => ({
      handle: c.handle,
      title: c.title,
      description: c.description,
      image_url: c.image_url,
      sort_order: c.sort_order,
    })), { onConflict: 'handle' })
    .select()

  if (collectionError) {
    console.error('Error seeding collections:', collectionError)
    return
  }
  console.log(`  Inserted ${collections.length} collections`)

  // Get collection ID map
  const { data: allCollections } = await supabase.from('collections').select('id, handle')
  const collectionMap = new Map(allCollections?.map(c => [c.handle, c.id]) || [])

  // 2. Seed products
  console.log('Seeding products...')
  for (const product of products) {
    const collectionId = collectionMap.get(product.collection_handle) || null

    const { data: productData, error: productError } = await supabase
      .from('products')
      .upsert({
        title: product.title,
        handle: product.handle,
        description: product.description,
        product_type: product.product_type,
        vendor: 'Vengoh',
        price: product.price,
        compare_at_price: ('compare_at_price' in product ? product.compare_at_price : null) as number | null,
        tags: product.tags,
        collection_id: collectionId,
        available: true,
      }, { onConflict: 'handle' })
      .select()
      .single()

    if (productError) {
      console.error(`  Error seeding product ${product.handle}:`, productError)
      continue
    }

    // Seed variants
    if (product.variants.length > 0) {
      const { error: variantError } = await supabase
        .from('product_variants')
        .upsert(product.variants.map(v => ({
          product_id: productData.id,
          title: v.title,
          size: v.size,
          color: null,
          price: v.price,
          available: true,
        })))

      if (variantError) {
        console.error(`  Error seeding variants for ${product.handle}:`, variantError)
      }
    }

    // Seed images
    if (product.images.length > 0) {
      const { error: imageError } = await supabase
        .from('product_images')
        .upsert(product.images.map(img => ({
          product_id: productData.id,
          url: img.url,
          alt_text: img.alt_text,
          position: img.position,
        })))

      if (imageError) {
        console.error(`  Error seeding images for ${product.handle}:`, imageError)
      }
    }
  }
  console.log(`  Inserted ${products.length} products with variants and images`)

  // 3. Seed reviews
  console.log('Seeding reviews...')
  const { data: allProducts } = await supabase.from('products').select('id, handle')
  const productMap = new Map(allProducts?.map(p => [p.handle, p.id]) || [])

  for (const review of reviews) {
    const productId = productMap.get(review.product_handle) || null
    const { error: reviewError } = await supabase
      .from('reviews')
      .insert({
        product_id: productId,
        author: review.author,
        rating: review.rating,
        body: review.body,
      })

    if (reviewError) {
      console.error(`  Error seeding review by ${review.author}:`, reviewError)
    }
  }
  console.log(`  Inserted ${reviews.length} reviews`)

  // 4. Seed shipping policies
  console.log('Seeding shipping policies...')
  for (const policy of shippingPolicies) {
    const { error: policyError } = await supabase
      .from('shipping_policies')
      .upsert({
        region: policy.region,
        delivery_days: policy.delivery_days,
        cost_info: policy.cost_info,
        carriers: policy.carriers,
      })

    if (policyError) {
      console.error(`  Error seeding shipping policy for ${policy.region}:`, policyError)
    }
  }
  console.log(`  Inserted ${shippingPolicies.length} shipping policies`)

  console.log('\nSeeding complete!')
}

seed().catch(console.error)
