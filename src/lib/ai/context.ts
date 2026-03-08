import { products, collections, shippingPolicies, reviews, businessInfo, sizeCharts, outfits } from '@/data/seed'

export function buildProductCatalog(): string {
  const collectionMap = new Map<string, typeof products>()
  for (const product of products) {
    const key = product.collection_handle
    if (!collectionMap.has(key)) collectionMap.set(key, [])
    collectionMap.get(key)!.push(product)
  }

  let catalog = '## Product Catalog\n\n'
  for (const [collHandle, prods] of collectionMap) {
    const coll = collections.find(c => c.handle === collHandle)
    catalog += `### ${coll?.title || collHandle}\n`
    if (coll?.description) catalog += `${coll.description}\n`
    for (const p of prods) {
      const desc = p.description?.replace(/<[^>]*>/g, '').trim() || ''
      const sizes = p.variants.map(v => v.size || v.title).join(', ')
      catalog += `- **${p.title}** (€${p.price}) — ${p.product_type} — Sizes: ${sizes} — /products/${p.handle}\n`
      if (desc.length > 0) catalog += `  ${desc.slice(0, 150)}\n`
    }
    catalog += '\n'
  }
  return catalog
}

export function buildShippingContext(): string {
  let text = '## Shipping Policies\n\n'
  for (const policy of shippingPolicies) {
    text += `- **${policy.region}**: ${policy.delivery_days}. ${policy.cost_info} Carriers: ${policy.carriers.join(', ')}\n`
  }
  text += `\n## Returns\n${businessInfo.returnPolicy}\n`
  return text
}

export function buildBusinessContext(): string {
  return `## About Vengoh\n- Company: ${businessInfo.company}\n- Address: ${businessInfo.address}\n- Email: ${businessInfo.email}\n- Phone: ${businessInfo.phone}\n- Hours: ${businessInfo.businessHours}\n`
}

export function buildReviewContext(): string {
  let text = '## Customer Reviews (selected)\n\n'
  for (const r of reviews) {
    text += `- ${r.author} (${r.rating}/5): "${r.body}"\n`
  }
  return text
}

export function buildSizeChartContext(): string {
  let text = '## Size Charts (measurements in cm)\n\n'
  for (const [productType, chart] of Object.entries(sizeCharts)) {
    text += `### ${productType} (${chart.unit})\n`
    text += `Fit: ${chart.fit}\n`
    for (const size of chart.sizes) {
      const measurements = Object.entries(size)
        .filter(([key]) => key !== 'label')
        .map(([key, val]) => `${key}: ${val}cm`)
        .join(', ')
      text += `- ${size.label}: ${measurements}\n`
    }
    text += '\n'
  }
  return text
}

export function buildOutfitContext(): string {
  let text = '## Curated Outfits\n\nWhen suggesting outfits, prefer these curated combinations. Present them using the [OUTFIT:handle] tag.\n\n'
  for (const outfit of outfits) {
    const outfitProducts = outfit.product_handles
      .map(h => products.find(p => p.handle === h))
      .filter(Boolean)
    const totalPrice = outfitProducts.reduce((sum, p) => sum + (p?.price || 0), 0)
    text += `- **${outfit.title}** (${outfit.occasion}) — €${totalPrice} — [OUTFIT:${outfit.handle}]\n`
    for (const p of outfitProducts) {
      if (p) text += `  - ${p.title} (€${p.price}) — /products/${p.handle}\n`
    }
    text += '\n'
  }
  return text
}

export function buildFullContext(): string {
  return [
    buildProductCatalog(),
    buildOutfitContext(),
    buildSizeChartContext(),
    buildShippingContext(),
    buildBusinessContext(),
    buildReviewContext(),
  ].join('\n\n')
}
