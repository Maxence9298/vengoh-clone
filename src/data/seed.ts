// Seed data for Vengoh Equestrian
// Scraped from vengoh.com/fr - all products, collections, and business data
// Last updated: 2026-03-08

export const collections = [
  // Product line collections
  { handle: 'azalea', title: 'Azalea', description: 'Premium long-sleeve base layers for equestrian athletes', image_url: '/images/collections/azalea.png', sort_order: 1 },
  { handle: 'dahlia', title: 'Dahlia', description: 'Luxury riding leggings collection', image_url: '/images/collections/dahlia.png', sort_order: 2 },
  { handle: 'daisy', title: 'Daisy', description: 'Short sleeve base layers', image_url: '/images/collections/daisy.jpg', sort_order: 3 },
  { handle: 'iris', title: 'Iris', description: 'Competition breeches collection - Coupe 300', image_url: '/images/collections/iris.png', sort_order: 4 },
  { handle: 'camellia', title: 'Camellia', description: 'Premium riding breeches - Coupe 200', image_url: '/images/collections/camellia.png', sort_order: 5 },
  { handle: 'lily', title: 'Lily', description: 'Equestrian vests and gilets', image_url: '/images/collections/lily.png', sort_order: 6 },
  { handle: 'starlette', title: 'Starlette', description: 'Premium competition base layers with rhinestone details', image_url: '/images/collections/azalea.png', sort_order: 7 },
  { handle: 'belts', title: 'Belts', description: 'Premium leather riding belts - Style 1.5', image_url: '/images/collections/belts.png', sort_order: 8 },

  // Category collections
  { handle: 'coupe-100', title: 'Coupe 100', description: 'Riding leggings - the most comfortable cut', image_url: '/images/collections/dahlia.png', sort_order: 9 },
  { handle: 'coupe-200', title: 'Coupe 200', description: 'Camellia breeches - mid-rise with full seat grip', image_url: '/images/collections/camellia.png', sort_order: 10 },
  { handle: 'coupe-300', title: 'Coupe 300', description: 'Iris breeches - high-waist with knee grip', image_url: '/images/collections/iris.png', sort_order: 11 },
  { handle: 'tops', title: 'Tops', description: 'All tops - base layers and vests', image_url: '/images/collections/azalea.png', sort_order: 12 },
  { handle: 'base-layers', title: 'Base Layers', description: 'All base layer tops', image_url: '/images/collections/azalea.png', sort_order: 13 },
  { handle: 'breeches', title: 'Breeches', description: 'All riding breeches', image_url: '/images/collections/camellia.png', sort_order: 14 },
  { handle: 'leggings', title: 'Leggings', description: 'Riding leggings', image_url: '/images/collections/dahlia.png', sort_order: 15 },
  { handle: 'vests', title: 'Vests', description: 'Riding vests and gilets', image_url: '/images/collections/lily.png', sort_order: 16 },
  { handle: 'kid', title: 'Kids', description: 'Kids equestrian collection', image_url: '/images/collections/lily.png', sort_order: 17 },
  { handle: 'limited-editions', title: 'Limited Editions', description: 'Exclusive limited edition pieces', image_url: '/images/collections/iris.png', sort_order: 18 },
  { handle: 'new-arrivals', title: 'New Arrivals', description: 'Latest products', image_url: '/images/collections/iris.png', sort_order: 19 },
  { handle: 'best-sellers', title: 'Best Sellers', description: 'Our most popular items', image_url: '/images/collections/azalea.png', sort_order: 20 },
  { handle: 'gift-cards', title: 'Gift Cards', description: 'Vengoh gift cards', image_url: '/images/collections/gift-cards.png', sort_order: 21 },
  { handle: 'services', title: 'Services', description: 'Professional equestrian services', image_url: '/images/collections/camellia.png', sort_order: 22 },
  { handle: 'women', title: 'Women', description: "Women's equestrian collection", image_url: '/images/collections/azalea.png', sort_order: 23 },
  { handle: 'accessories', title: 'Accessories', description: 'Equestrian accessories', image_url: '/images/collections/belts.png', sort_order: 24 },
  { handle: 'winter', title: 'Winter', description: 'Winter riding collection', image_url: '/images/collections/winter.jpg', sort_order: 25 },
  { handle: 'summer', title: 'Summer', description: 'Summer riding collection', image_url: '/images/collections/summer.jpg', sort_order: 26 },
  { handle: 'competition', title: 'Competition', description: 'Competition-ready equestrian wear', image_url: '/images/collections/iris.png', sort_order: 27 },
  { handle: 'sale', title: 'Sale', description: 'Items on sale', image_url: '/images/collections/dahlia.png', sort_order: 28 },
]

export const products = [
  // ============================================================
  // AZALEA BASE LAYERS (Long Sleeve) - €99
  // ============================================================
  { title: 'Vengoh Azalea Base Layers Black/Grey', handle: 'azalea-base-layer-black', description: '<p>The Azalea base layer is our signature long-sleeve top, designed for the modern equestrian. Made with premium technical fabric that wicks moisture and provides UV protection. Features a half-zip collar and thumbhole cuffs for a perfect fit under your riding jacket.</p>', product_type: 'Base Layer', price: 99, tags: ['base-layer', 'azalea', 'women', 'black', 'grey', 'long-sleeve', 'tops'], collection_handle: 'azalea', variants: [{ title: 'XXS', size: 'XXS', price: 99 }, { title: 'XS', size: 'XS', price: 99 }, { title: 'S', size: 'S', price: 99 }, { title: 'M', size: 'M', price: 99 }, { title: 'L', size: 'L', price: 99 }, { title: 'XL', size: 'XL', price: 99 }], images: [{ url: '/images/products/azalea-black-1.png', alt_text: 'Vengoh Azalea Base Layers Black/Grey - Front', position: 0 }, { url: '/images/products/azalea-black-2.png', alt_text: 'Vengoh Azalea Base Layers Black/Grey - Back', position: 1 }] },
  { title: 'Vengoh Azalea Base Layers Navy', handle: 'azalea-base-layer-navy', description: '<p>The Azalea base layer in classic navy. Premium technical fabric with moisture-wicking properties and UV protection. Half-zip collar and thumbhole cuffs.</p>', product_type: 'Base Layer', price: 99, tags: ['base-layer', 'azalea', 'women', 'navy', 'long-sleeve', 'tops'], collection_handle: 'azalea', variants: [{ title: 'XXS', size: 'XXS', price: 99 }, { title: 'XS', size: 'XS', price: 99 }, { title: 'S', size: 'S', price: 99 }, { title: 'M', size: 'M', price: 99 }, { title: 'L', size: 'L', price: 99 }, { title: 'XL', size: 'XL', price: 99 }], images: [{ url: '/images/products/azalea-navy-1.png', alt_text: 'Vengoh Azalea Base Layers Navy - Front', position: 0 }, { url: '/images/products/azalea-navy-2.png', alt_text: 'Vengoh Azalea Base Layers Navy - Back', position: 1 }] },
  { title: 'Vengoh Azalea Base Layers Burgundy', handle: 'azalea-base-layer-burgundy', description: '<p>The Azalea base layer in rich burgundy. Bold and sophisticated for the confident rider.</p>', product_type: 'Base Layer', price: 99, tags: ['base-layer', 'azalea', 'women', 'burgundy', 'long-sleeve', 'tops'], collection_handle: 'azalea', variants: [{ title: 'XXS', size: 'XXS', price: 99 }, { title: 'XS', size: 'XS', price: 99 }, { title: 'S', size: 'S', price: 99 }, { title: 'M', size: 'M', price: 99 }, { title: 'L', size: 'L', price: 99 }, { title: 'XL', size: 'XL', price: 99 }], images: [{ url: '/images/products/azalea-burgundy-1.png', alt_text: 'Vengoh Azalea Base Layers Burgundy - Front', position: 0 }] },
  { title: 'Vengoh Azalea Base Layers Purple', handle: 'azalea-base-layer-purple', description: '<p>The Azalea base layer in elegant purple. A distinctive color for the modern equestrian.</p>', product_type: 'Base Layer', price: 99, tags: ['base-layer', 'azalea', 'women', 'purple', 'long-sleeve', 'tops'], collection_handle: 'azalea', variants: [{ title: 'XXS', size: 'XXS', price: 99 }, { title: 'XS', size: 'XS', price: 99 }, { title: 'S', size: 'S', price: 99 }, { title: 'M', size: 'M', price: 99 }, { title: 'L', size: 'L', price: 99 }, { title: 'XL', size: 'XL', price: 99 }], images: [{ url: '/images/products/azalea-purple-1.png', alt_text: 'Vengoh Azalea Base Layers Purple - Front', position: 0 }] },
  { title: 'Vengoh Azalea Base Layers Grey', handle: 'azalea-base-layer-grey', description: '<p>The Azalea base layer in versatile grey. Classic and elegant for everyday riding.</p>', product_type: 'Base Layer', price: 99, tags: ['base-layer', 'azalea', 'women', 'grey', 'long-sleeve', 'tops'], collection_handle: 'azalea', variants: [{ title: 'XXS', size: 'XXS', price: 99 }, { title: 'XS', size: 'XS', price: 99 }, { title: 'S', size: 'S', price: 99 }, { title: 'M', size: 'M', price: 99 }, { title: 'L', size: 'L', price: 99 }, { title: 'XL', size: 'XL', price: 99 }], images: [{ url: '/images/products/azalea-beige-1.jpg', alt_text: 'Vengoh Azalea Base Layers Grey - Front', position: 0 }] },
  { title: 'Vengoh Azalea Base Layers Pink', handle: 'azalea-base-layer-pink', description: '<p>The Azalea base layer in our signature pink. Feminine and elegant for the equestrian athlete.</p>', product_type: 'Base Layer', price: 99, tags: ['base-layer', 'azalea', 'women', 'pink', 'long-sleeve', 'tops'], collection_handle: 'azalea', variants: [{ title: 'XXS', size: 'XXS', price: 99 }, { title: 'XS', size: 'XS', price: 99 }, { title: 'S', size: 'S', price: 99 }, { title: 'M', size: 'M', price: 99 }, { title: 'L', size: 'L', price: 99 }, { title: 'XL', size: 'XL', price: 99 }], images: [{ url: '/images/products/azalea-beige-1.jpg', alt_text: 'Vengoh Azalea Base Layers Pink - Front', position: 0 }] },
  { title: 'Vengoh Azalea Base Layers Black/Blue', handle: 'azalea-base-layer-black-blue', description: '<p>The Azalea base layer in striking black and blue. A sporty combination for the dynamic rider.</p>', product_type: 'Base Layer', price: 99, tags: ['base-layer', 'azalea', 'women', 'black', 'blue', 'long-sleeve', 'tops'], collection_handle: 'azalea', variants: [{ title: 'XXS', size: 'XXS', price: 99 }, { title: 'XS', size: 'XS', price: 99 }, { title: 'S', size: 'S', price: 99 }, { title: 'M', size: 'M', price: 99 }, { title: 'L', size: 'L', price: 99 }, { title: 'XL', size: 'XL', price: 99 }], images: [{ url: '/images/products/azalea-navy-1.png', alt_text: 'Vengoh Azalea Base Layers Black/Blue - Front', position: 0 }] },

  // ============================================================
  // DAISY BASE LAYERS (Short Sleeve) - €99
  // ============================================================
  { title: 'Vengoh Daisy Base Layers Navy/Blue', handle: 'daisy-base-layer-navy', description: '<p>The Daisy short-sleeve base layer in navy/blue. Light and breathable for warm weather riding. Features a quarter-zip collar and UPF 50+ protection.</p>', product_type: 'Base Layer', price: 99, tags: ['base-layer', 'daisy', 'women', 'navy', 'blue', 'short-sleeve', 'summer', 'tops'], collection_handle: 'daisy', variants: [{ title: 'XXS', size: 'XXS', price: 99 }, { title: 'XS', size: 'XS', price: 99 }, { title: 'S', size: 'S', price: 99 }, { title: 'M', size: 'M', price: 99 }, { title: 'L', size: 'L', price: 99 }, { title: 'XL', size: 'XL', price: 99 }], images: [{ url: '/images/products/azalea-darknavy-1.png', alt_text: 'Vengoh Daisy Base Layers Navy/Blue', position: 0 }] },
  { title: 'Vengoh Daisy Base Layers Burgundy', handle: 'daisy-base-layer-burgundy', description: '<p>The Daisy short-sleeve base layer in rich burgundy. Light and breathable with UPF 50+ protection.</p>', product_type: 'Base Layer', price: 99, tags: ['base-layer', 'daisy', 'women', 'burgundy', 'short-sleeve', 'summer', 'tops'], collection_handle: 'daisy', variants: [{ title: 'XXS', size: 'XXS', price: 99 }, { title: 'XS', size: 'XS', price: 99 }, { title: 'S', size: 'S', price: 99 }, { title: 'M', size: 'M', price: 99 }, { title: 'L', size: 'L', price: 99 }, { title: 'XL', size: 'XL', price: 99 }], images: [{ url: '/images/products/azalea-burgundy-1.png', alt_text: 'Vengoh Daisy Base Layers Burgundy', position: 0 }] },
  { title: 'Vengoh Daisy Base Layers Grey', handle: 'daisy-base-layer-grey', description: '<p>The Daisy short-sleeve base layer in versatile grey. Perfect for summer riding.</p>', product_type: 'Base Layer', price: 99, tags: ['base-layer', 'daisy', 'women', 'grey', 'short-sleeve', 'summer', 'tops'], collection_handle: 'daisy', variants: [{ title: 'XXS', size: 'XXS', price: 99 }, { title: 'XS', size: 'XS', price: 99 }, { title: 'S', size: 'S', price: 99 }, { title: 'M', size: 'M', price: 99 }, { title: 'L', size: 'L', price: 99 }, { title: 'XL', size: 'XL', price: 99 }], images: [{ url: '/images/products/azalea-beige-1.jpg', alt_text: 'Vengoh Daisy Base Layers Grey', position: 0 }] },
  { title: 'Vengoh Daisy Base Layers Pink', handle: 'daisy-base-layer-pink', description: '<p>The Daisy short-sleeve base layer in sweet pink. Light and breathable for summer competitions.</p>', product_type: 'Base Layer', price: 99, tags: ['base-layer', 'daisy', 'women', 'pink', 'short-sleeve', 'summer', 'tops'], collection_handle: 'daisy', variants: [{ title: 'XXS', size: 'XXS', price: 99 }, { title: 'XS', size: 'XS', price: 99 }, { title: 'S', size: 'S', price: 99 }, { title: 'M', size: 'M', price: 99 }, { title: 'L', size: 'L', price: 99 }, { title: 'XL', size: 'XL', price: 99 }], images: [{ url: '/images/products/azalea-beige-1.jpg', alt_text: 'Vengoh Daisy Base Layers Pink', position: 0 }] },

  // ============================================================
  // STARLETTE BASE LAYERS (Competition) - €139
  // ============================================================
  { title: 'Vengoh Starlette Base Layer Long Sleeves', handle: 'starlette-base-layer-long-sleeves', description: '<p>The Starlette competition base layer in white with long sleeves. Premium fabric with elegant rhinestone details on the collar. Designed for show jumping and dressage competitions.</p>', product_type: 'Base Layer', price: 139, tags: ['base-layer', 'starlette', 'women', 'white', 'long-sleeve', 'competition', 'tops'], collection_handle: 'starlette', variants: [{ title: 'XXS', size: 'XXS', price: 139 }, { title: 'XS', size: 'XS', price: 139 }, { title: 'S', size: 'S', price: 139 }, { title: 'M', size: 'M', price: 139 }, { title: 'L', size: 'L', price: 139 }, { title: 'XL', size: 'XL', price: 139 }], images: [{ url: '/images/products/azalea-beige-1.jpg', alt_text: 'Vengoh Starlette Base Layer Long Sleeves', position: 0 }] },
  { title: 'Vengoh Starlette Base Layer Short Sleeves', handle: 'starlette-base-layer-short-sleeves', description: '<p>The Starlette competition base layer in white with short sleeves. Premium fabric with elegant rhinestone details. Perfect for summer competitions.</p>', product_type: 'Base Layer', price: 139, tags: ['base-layer', 'starlette', 'women', 'white', 'short-sleeve', 'competition', 'summer', 'tops'], collection_handle: 'starlette', variants: [{ title: 'XXS', size: 'XXS', price: 139 }, { title: 'XS', size: 'XS', price: 139 }, { title: 'S', size: 'S', price: 139 }, { title: 'M', size: 'M', price: 139 }, { title: 'L', size: 'L', price: 139 }, { title: 'XL', size: 'XL', price: 139 }], images: [{ url: '/images/products/azalea-beige-1.jpg', alt_text: 'Vengoh Starlette Base Layer Short Sleeves', position: 0 }] },

  // ============================================================
  // LILY VESTS - €129
  // ============================================================
  { title: 'Vengoh Lily Vest Black', handle: 'lily-vest-black', description: '<p>The Lily vest is the ultimate layering piece for equestrians. Lightweight, water-resistant outer with premium down insulation. Features two-way zip, stand collar, and zip pockets.</p>', product_type: 'Vest', price: 129, tags: ['vest', 'lily', 'women', 'black', 'tops'], collection_handle: 'lily', variants: [{ title: 'XXS', size: 'XXS', price: 129 }, { title: 'XS', size: 'XS', price: 129 }, { title: 'S', size: 'S', price: 129 }, { title: 'M', size: 'M', price: 129 }, { title: 'L', size: 'L', price: 129 }, { title: 'XL', size: 'XL', price: 129 }], images: [{ url: '/images/products/lily-black-1.png', alt_text: 'Vengoh Lily Vest Black', position: 0 }] },
  { title: 'Vengoh Lily Vest Navy', handle: 'lily-vest-navy', description: '<p>The Lily vest in classic navy. Lightweight and water-resistant with premium insulation.</p>', product_type: 'Vest', price: 129, tags: ['vest', 'lily', 'women', 'navy', 'tops'], collection_handle: 'lily', variants: [{ title: 'XXS', size: 'XXS', price: 129 }, { title: 'XS', size: 'XS', price: 129 }, { title: 'S', size: 'S', price: 129 }, { title: 'M', size: 'M', price: 129 }, { title: 'L', size: 'L', price: 129 }, { title: 'XL', size: 'XL', price: 129 }], images: [{ url: '/images/products/lily-grey-1.png', alt_text: 'Vengoh Lily Vest Navy', position: 0 }] },
  { title: 'Vengoh Lily Vest Burgundy', handle: 'lily-vest-burgundy', description: '<p>The Lily vest in rich burgundy. Bold sophistication for the modern rider.</p>', product_type: 'Vest', price: 129, tags: ['vest', 'lily', 'women', 'burgundy', 'tops'], collection_handle: 'lily', variants: [{ title: 'XXS', size: 'XXS', price: 129 }, { title: 'XS', size: 'XS', price: 129 }, { title: 'S', size: 'S', price: 129 }, { title: 'M', size: 'M', price: 129 }, { title: 'L', size: 'L', price: 129 }, { title: 'XL', size: 'XL', price: 129 }], images: [{ url: '/images/products/lily-burgundy-1.png', alt_text: 'Vengoh Lily Vest Burgundy', position: 0 }] },
  { title: 'Vengoh Lily Vest Grey', handle: 'lily-vest-grey', description: '<p>The Lily vest in versatile grey. A timeless choice for everyday riding.</p>', product_type: 'Vest', price: 129, tags: ['vest', 'lily', 'women', 'grey', 'tops'], collection_handle: 'lily', variants: [{ title: 'XXS', size: 'XXS', price: 129 }, { title: 'XS', size: 'XS', price: 129 }, { title: 'S', size: 'S', price: 129 }, { title: 'M', size: 'M', price: 129 }, { title: 'L', size: 'L', price: 129 }, { title: 'XL', size: 'XL', price: 129 }], images: [{ url: '/images/products/lily-grey-1.png', alt_text: 'Vengoh Lily Vest Grey', position: 0 }] },
  { title: 'Vengoh Lily Vest Black & Pink', handle: 'lily-vest-black-pink', description: '<p>The Lily vest in exclusive black and pink. A striking combination for the bold equestrian.</p>', product_type: 'Vest', price: 129, tags: ['vest', 'lily', 'women', 'black', 'pink', 'tops'], collection_handle: 'lily', variants: [{ title: 'XXS', size: 'XXS', price: 129 }, { title: 'XS', size: 'XS', price: 129 }, { title: 'S', size: 'S', price: 129 }, { title: 'M', size: 'M', price: 129 }, { title: 'L', size: 'L', price: 129 }, { title: 'XL', size: 'XL', price: 129 }], images: [{ url: '/images/products/lily-pink-1.jpg', alt_text: 'Vengoh Lily Vest Black & Pink', position: 0 }] },

  // ============================================================
  // DAHLIA LEGGINGS (Coupe 100) - €149
  // ============================================================
  { title: 'Vengoh Dahlia Leggings Black', handle: 'dahlia-riding-leggings-black', description: '<p>The Dahlia riding leggings combine style with performance. Full silicone grip seat, high waist design, and phone pocket. Made with 4-way stretch fabric for ultimate comfort in the saddle.</p>', product_type: 'Leggings', price: 149, tags: ['leggings', 'dahlia', 'women', 'black', 'coupe-100'], collection_handle: 'dahlia', variants: [{ title: 'XXS', size: 'XXS', price: 149 }, { title: 'XS', size: 'XS', price: 149 }, { title: 'S', size: 'S', price: 149 }, { title: 'M', size: 'M', price: 149 }, { title: 'L', size: 'L', price: 149 }, { title: 'XL', size: 'XL', price: 149 }], images: [{ url: '/images/products/dahlia-black-1.png', alt_text: 'Vengoh Dahlia Leggings Black', position: 0 }] },
  { title: 'Vengoh Dahlia Leggings White', handle: 'dahlia-riding-leggings-white', description: '<p>The Dahlia riding leggings in pristine white. Full silicone grip seat, high waist design, and phone pocket. Perfect for competitions.</p>', product_type: 'Leggings', price: 149, tags: ['leggings', 'dahlia', 'women', 'white', 'coupe-100', 'competition'], collection_handle: 'dahlia', variants: [{ title: 'XXS', size: 'XXS', price: 149 }, { title: 'XS', size: 'XS', price: 149 }, { title: 'S', size: 'S', price: 149 }, { title: 'M', size: 'M', price: 149 }, { title: 'L', size: 'L', price: 149 }, { title: 'XL', size: 'XL', price: 149 }], images: [{ url: '/images/products/dahlia-black-1.png', alt_text: 'Vengoh Dahlia Leggings White', position: 0 }] },
  { title: 'Vengoh Dahlia Leggings Navy', handle: 'dahlia-riding-leggings-navy', description: '<p>The Dahlia riding leggings in classic navy. Full silicone grip seat, high waist design, and phone pocket.</p>', product_type: 'Leggings', price: 149, tags: ['leggings', 'dahlia', 'women', 'navy', 'coupe-100'], collection_handle: 'dahlia', variants: [{ title: 'XXS', size: 'XXS', price: 149 }, { title: 'XS', size: 'XS', price: 149 }, { title: 'S', size: 'S', price: 149 }, { title: 'M', size: 'M', price: 149 }, { title: 'L', size: 'L', price: 149 }, { title: 'XL', size: 'XL', price: 149 }], images: [{ url: '/images/products/dahlia-black-1.png', alt_text: 'Vengoh Dahlia Leggings Navy', position: 0 }] },
  { title: 'Vengoh Dahlia Leggings Dark Grey', handle: 'dahlia-riding-leggings-dark-grey', description: '<p>The Dahlia riding leggings in dark grey. Full silicone grip seat, high waist design, and phone pocket.</p>', product_type: 'Leggings', price: 149, tags: ['leggings', 'dahlia', 'women', 'grey', 'coupe-100'], collection_handle: 'dahlia', variants: [{ title: 'XXS', size: 'XXS', price: 149 }, { title: 'XS', size: 'XS', price: 149 }, { title: 'S', size: 'S', price: 149 }, { title: 'M', size: 'M', price: 149 }, { title: 'L', size: 'L', price: 149 }, { title: 'XL', size: 'XL', price: 149 }], images: [{ url: '/images/products/dahlia-black-1.png', alt_text: 'Vengoh Dahlia Leggings Dark Grey', position: 0 }] },

  // ============================================================
  // CAMELLIA BREECHES (Coupe 200) - €179
  // ============================================================
  { title: 'Vengoh Camellia Breeches Black', handle: 'camellia-breeches-black', description: '<p>The Camellia breeches are our flagship riding pants. Full seat silicone grip, mid-rise waist, belt loops, and front pockets. Premium Italian fabric with 4-way stretch.</p>', product_type: 'Breeches', price: 179, tags: ['breeches', 'camellia', 'women', 'black', 'coupe-200'], collection_handle: 'camellia', variants: [{ title: '32', size: '32', price: 179 }, { title: '34', size: '34', price: 179 }, { title: '36', size: '36', price: 179 }, { title: '38', size: '38', price: 179 }, { title: '40', size: '40', price: 179 }, { title: '42', size: '42', price: 179 }, { title: '44', size: '44', price: 179 }], images: [{ url: '/images/products/camellia-black-1.png', alt_text: 'Vengoh Camellia Breeches Black', position: 0 }] },
  { title: 'Vengoh Camellia Breeches Navy', handle: 'camellia-breeches-navy', description: '<p>Camellia breeches in classic navy. Full seat grip and premium Italian fabric.</p>', product_type: 'Breeches', price: 179, tags: ['breeches', 'camellia', 'women', 'navy', 'coupe-200'], collection_handle: 'camellia', variants: [{ title: '32', size: '32', price: 179 }, { title: '34', size: '34', price: 179 }, { title: '36', size: '36', price: 179 }, { title: '38', size: '38', price: 179 }, { title: '40', size: '40', price: 179 }, { title: '42', size: '42', price: 179 }, { title: '44', size: '44', price: 179 }], images: [{ url: '/images/products/camellia-navy-1.png', alt_text: 'Vengoh Camellia Breeches Navy', position: 0 }] },
  { title: 'Vengoh Camellia Breeches White', handle: 'camellia-breeches-white', description: '<p>Camellia competition breeches in white. Regulation-ready for show jumping and dressage.</p>', product_type: 'Breeches', price: 179, tags: ['breeches', 'camellia', 'women', 'white', 'competition', 'coupe-200'], collection_handle: 'camellia', variants: [{ title: '32', size: '32', price: 179 }, { title: '34', size: '34', price: 179 }, { title: '36', size: '36', price: 179 }, { title: '38', size: '38', price: 179 }, { title: '40', size: '40', price: 179 }, { title: '42', size: '42', price: 179 }, { title: '44', size: '44', price: 179 }], images: [{ url: '/images/products/camellia-white-1.png', alt_text: 'Vengoh Camellia Breeches White', position: 0 }] },
  { title: 'Vengoh Camellia Breeches Sage Green', handle: 'camellia-breeches-sage-green', description: '<p>Camellia breeches in sage green. A fresh and stylish choice.</p>', product_type: 'Breeches', price: 179, tags: ['breeches', 'camellia', 'women', 'green', 'coupe-200'], collection_handle: 'camellia', variants: [{ title: '32', size: '32', price: 179 }, { title: '34', size: '34', price: 179 }, { title: '36', size: '36', price: 179 }, { title: '38', size: '38', price: 179 }, { title: '40', size: '40', price: 179 }, { title: '42', size: '42', price: 179 }, { title: '44', size: '44', price: 179 }], images: [{ url: '/images/products/camellia-sage-1.png', alt_text: 'Vengoh Camellia Breeches Sage Green', position: 0 }] },
  { title: 'Vengoh Camellia Breeches Dark Grey', handle: 'camellia-breeches-dark-grey', description: '<p>Camellia breeches in dark grey. Versatile and elegant for everyday riding.</p>', product_type: 'Breeches', price: 179, tags: ['breeches', 'camellia', 'women', 'grey', 'coupe-200'], collection_handle: 'camellia', variants: [{ title: '32', size: '32', price: 179 }, { title: '34', size: '34', price: 179 }, { title: '36', size: '36', price: 179 }, { title: '38', size: '38', price: 179 }, { title: '40', size: '40', price: 179 }, { title: '42', size: '42', price: 179 }, { title: '44', size: '44', price: 179 }], images: [{ url: '/images/products/camellia-grey-1.png', alt_text: 'Vengoh Camellia Breeches Dark Grey', position: 0 }] },

  // === CAMELLIA W BREECHES (Ultra-stretch Coupe 200) - €189 ===
  { title: 'Vengoh Camellia W Breeches Black', handle: 'camellia-w-breeches-black', description: '<p>The Camellia W breeches in black. Ultra-stretch fabric with full seat silicone grip for maximum comfort and performance.</p>', product_type: 'Breeches', price: 189, tags: ['breeches', 'camellia', 'women', 'black', 'coupe-200', 'ultra-stretch'], collection_handle: 'camellia', variants: [{ title: '32', size: '32', price: 189 }, { title: '34', size: '34', price: 189 }, { title: '36', size: '36', price: 189 }, { title: '38', size: '38', price: 189 }, { title: '40', size: '40', price: 189 }, { title: '42', size: '42', price: 189 }, { title: '44', size: '44', price: 189 }], images: [{ url: '/images/products/camellia-black-1.png', alt_text: 'Vengoh Camellia W Breeches Black', position: 0 }] },
  { title: 'Vengoh Camellia W Breeches Dark Grey', handle: 'camellia-w-breeches-dark-grey', description: '<p>The Camellia W breeches in dark grey. Ultra-stretch fabric with full seat silicone grip.</p>', product_type: 'Breeches', price: 189, tags: ['breeches', 'camellia', 'women', 'grey', 'coupe-200', 'ultra-stretch'], collection_handle: 'camellia', variants: [{ title: '32', size: '32', price: 189 }, { title: '34', size: '34', price: 189 }, { title: '36', size: '36', price: 189 }, { title: '38', size: '38', price: 189 }, { title: '40', size: '40', price: 189 }, { title: '42', size: '42', price: 189 }, { title: '44', size: '44', price: 189 }], images: [{ url: '/images/products/camellia-grey-1.png', alt_text: 'Vengoh Camellia W Breeches Dark Grey', position: 0 }] },
  { title: 'Vengoh Camellia W Breeches Navy', handle: 'camellia-w-breeches-navy', description: '<p>The Camellia W breeches in navy. Ultra-stretch fabric with full seat silicone grip.</p>', product_type: 'Breeches', price: 189, tags: ['breeches', 'camellia', 'women', 'navy', 'coupe-200', 'ultra-stretch'], collection_handle: 'camellia', variants: [{ title: '32', size: '32', price: 189 }, { title: '34', size: '34', price: 189 }, { title: '36', size: '36', price: 189 }, { title: '38', size: '38', price: 189 }, { title: '40', size: '40', price: 189 }, { title: '42', size: '42', price: 189 }, { title: '44', size: '44', price: 189 }], images: [{ url: '/images/products/camellia-navy-1.png', alt_text: 'Vengoh Camellia W Breeches Navy', position: 0 }] },

  // === ROYAL PINK W BREECHES (Limited Edition Coupe 200) - €189 ===
  { title: 'Vengoh Royal Pink W Breeches', handle: 'royal-pink-w-breeches', description: '<p>Limited edition Royal Pink W breeches. Exclusive sweet pink colorway with ultra-stretch fabric and full seat silicone grip.</p>', product_type: 'Breeches', price: 189, tags: ['breeches', 'women', 'pink', 'coupe-200', 'limited-edition', 'ultra-stretch'], collection_handle: 'camellia', variants: [{ title: '34', size: '34', price: 189 }, { title: '36', size: '36', price: 189 }, { title: '38', size: '38', price: 189 }, { title: '40', size: '40', price: 189 }, { title: '42', size: '42', price: 189 }], images: [{ url: '/images/products/camellia-black-1.png', alt_text: 'Vengoh Royal Pink W Breeches', position: 0 }] },

  // ============================================================
  // IRIS BREECHES (Coupe 300) - €179
  // ============================================================
  { title: 'Vengoh Iris Breeches Black', handle: 'iris-breeches-black', description: '<p>The Iris breeches feature a high-waist design with knee-grip silicone. Sleek and modern with a flattering fit. Premium stretch fabric.</p>', product_type: 'Breeches', price: 179, tags: ['breeches', 'iris', 'women', 'black', 'coupe-300'], collection_handle: 'iris', variants: [{ title: '34', size: '34', price: 179 }, { title: '36', size: '36', price: 179 }, { title: '38', size: '38', price: 179 }, { title: '40', size: '40', price: 179 }, { title: '42', size: '42', price: 179 }, { title: '44', size: '44', price: 179 }, { title: '46', size: '46', price: 179 }], images: [{ url: '/images/products/iris-black-1.png', alt_text: 'Vengoh Iris Breeches Black', position: 0 }] },
  { title: 'Vengoh Iris Breeches Navy', handle: 'iris-breeches-navy', description: '<p>Iris high-waist breeches in navy with knee grip.</p>', product_type: 'Breeches', price: 179, tags: ['breeches', 'iris', 'women', 'navy', 'coupe-300'], collection_handle: 'iris', variants: [{ title: '34', size: '34', price: 179 }, { title: '36', size: '36', price: 179 }, { title: '38', size: '38', price: 179 }, { title: '40', size: '40', price: 179 }, { title: '42', size: '42', price: 179 }, { title: '44', size: '44', price: 179 }, { title: '46', size: '46', price: 179 }], images: [{ url: '/images/products/iris-navy-1.png', alt_text: 'Vengoh Iris Breeches Navy', position: 0 }] },
  { title: 'Vengoh Iris Breeches White', handle: 'iris-breeches-white', description: '<p>Iris competition breeches in white. High-waist with knee grip.</p>', product_type: 'Breeches', price: 179, tags: ['breeches', 'iris', 'women', 'white', 'competition', 'coupe-300'], collection_handle: 'iris', variants: [{ title: '34', size: '34', price: 179 }, { title: '36', size: '36', price: 179 }, { title: '38', size: '38', price: 179 }, { title: '40', size: '40', price: 179 }, { title: '42', size: '42', price: 179 }, { title: '44', size: '44', price: 179 }, { title: '46', size: '46', price: 179 }], images: [{ url: '/images/products/iris-white-1.png', alt_text: 'Vengoh Iris Breeches White', position: 0 }] },
  { title: 'Vengoh Iris Breeches Black/Burgundy', handle: 'iris-breeches-black-burgundy', description: '<p>Iris breeches in striking black with burgundy accents. A bold look for the modern equestrian.</p>', product_type: 'Breeches', price: 179, tags: ['breeches', 'iris', 'women', 'black', 'burgundy', 'coupe-300'], collection_handle: 'iris', variants: [{ title: '34', size: '34', price: 179 }, { title: '36', size: '36', price: 179 }, { title: '38', size: '38', price: 179 }, { title: '40', size: '40', price: 179 }, { title: '42', size: '42', price: 179 }, { title: '44', size: '44', price: 179 }, { title: '46', size: '46', price: 179 }], images: [{ url: '/images/products/iris-black-1.png', alt_text: 'Vengoh Iris Breeches Black/Burgundy', position: 0 }] },
  { title: 'Vengoh Iris Breeches Light Grey', handle: 'iris-breeches-light-grey', description: '<p>Iris breeches in light grey. Elegant and versatile.</p>', product_type: 'Breeches', price: 179, tags: ['breeches', 'iris', 'women', 'grey', 'coupe-300'], collection_handle: 'iris', variants: [{ title: '34', size: '34', price: 179 }, { title: '36', size: '36', price: 179 }, { title: '38', size: '38', price: 179 }, { title: '40', size: '40', price: 179 }, { title: '42', size: '42', price: 179 }, { title: '44', size: '44', price: 179 }, { title: '46', size: '46', price: 179 }], images: [{ url: '/images/products/iris-grey-1.jpg', alt_text: 'Vengoh Iris Breeches Light Grey', position: 0 }] },

  // === IRIS W BREECHES (Ultra-stretch Coupe 300) - €189 ===
  { title: 'Vengoh Iris W Breeches Black', handle: 'iris-w-breeches-black', description: '<p>The Iris W breeches in black. Ultra-stretch fabric with high-waist design and knee-grip silicone.</p>', product_type: 'Breeches', price: 189, tags: ['breeches', 'iris', 'women', 'black', 'coupe-300', 'ultra-stretch'], collection_handle: 'iris', variants: [{ title: '32', size: '32', price: 189 }, { title: '34', size: '34', price: 189 }, { title: '36', size: '36', price: 189 }, { title: '38', size: '38', price: 189 }, { title: '40', size: '40', price: 189 }, { title: '42', size: '42', price: 189 }], images: [{ url: '/images/products/iris-black-1.png', alt_text: 'Vengoh Iris W Breeches Black', position: 0 }] },
  { title: 'Vengoh Iris W Breeches Navy', handle: 'iris-w-breeches-navy', description: '<p>The Iris W breeches in navy. Ultra-stretch fabric with knee-grip silicone.</p>', product_type: 'Breeches', price: 189, tags: ['breeches', 'iris', 'women', 'navy', 'coupe-300', 'ultra-stretch'], collection_handle: 'iris', variants: [{ title: '32', size: '32', price: 189 }, { title: '34', size: '34', price: 189 }, { title: '36', size: '36', price: 189 }, { title: '38', size: '38', price: 189 }, { title: '40', size: '40', price: 189 }, { title: '42', size: '42', price: 189 }], images: [{ url: '/images/products/iris-navy-1.png', alt_text: 'Vengoh Iris W Breeches Navy', position: 0 }] },
  { title: 'Vengoh Iris W Breeches Dark Grey', handle: 'iris-w-breeches-dark-grey', description: '<p>The Iris W breeches in dark grey. Ultra-stretch fabric with knee-grip silicone.</p>', product_type: 'Breeches', price: 189, tags: ['breeches', 'iris', 'women', 'grey', 'coupe-300', 'ultra-stretch'], collection_handle: 'iris', variants: [{ title: '32', size: '32', price: 189 }, { title: '34', size: '34', price: 189 }, { title: '36', size: '36', price: 189 }, { title: '38', size: '38', price: 189 }, { title: '40', size: '40', price: 189 }, { title: '42', size: '42', price: 189 }], images: [{ url: '/images/products/iris-grey-1.jpg', alt_text: 'Vengoh Iris W Breeches Dark Grey', position: 0 }] },

  // === ROYAL GREEN W BREECHES (Limited Edition Coupe 300) - €189 ===
  { title: 'Vengoh Royal Green W Breeches', handle: 'royal-green-w-breeches', description: '<p>Limited edition Royal Green W breeches. Exclusive green colorway with ultra-stretch fabric and knee-grip silicone.</p>', product_type: 'Breeches', price: 189, tags: ['breeches', 'women', 'green', 'coupe-300', 'limited-edition', 'ultra-stretch'], collection_handle: 'iris', variants: [{ title: '34', size: '34', price: 189 }, { title: '36', size: '36', price: 189 }, { title: '38', size: '38', price: 189 }, { title: '40', size: '40', price: 189 }, { title: '42', size: '42', price: 189 }], images: [{ url: '/images/products/iris-grey-1.jpg', alt_text: 'Vengoh Royal Green W Breeches', position: 0 }] },

  // ============================================================
  // VGH BELT STYLE 1.5 - €59 (One Size)
  // ============================================================
  { title: 'VGH Belt Style 1.5 Black', handle: 'vengoh-belt-black', description: '<p>Premium leather belt with signature VGH buckle. Width: 1.5cm. One size fits all.</p>', product_type: 'Belt', price: 59, tags: ['belt', 'accessories', 'black'], collection_handle: 'belts', variants: [{ title: 'One Size', size: 'One Size', price: 59 }], images: [{ url: '/images/products/belt-black-1.jpg', alt_text: 'VGH Belt Style 1.5 Black', position: 0 }] },
  { title: 'VGH Belt Style 1.5 Brown', handle: 'vengoh-belt-brown', description: '<p>Premium leather belt in brown with VGH buckle.</p>', product_type: 'Belt', price: 59, tags: ['belt', 'accessories', 'brown'], collection_handle: 'belts', variants: [{ title: 'One Size', size: 'One Size', price: 59 }], images: [{ url: '/images/products/belt-burgundy-1.png', alt_text: 'VGH Belt Style 1.5 Brown', position: 0 }] },
  { title: 'VGH Belt Style 1.5 Deep Navy', handle: 'vengoh-belt-navy', description: '<p>Premium leather belt in deep navy with VGH buckle.</p>', product_type: 'Belt', price: 59, tags: ['belt', 'accessories', 'navy'], collection_handle: 'belts', variants: [{ title: 'One Size', size: 'One Size', price: 59 }], images: [{ url: '/images/products/belt-navy-1.png', alt_text: 'VGH Belt Style 1.5 Deep Navy', position: 0 }] },
  { title: 'VGH Belt Style 1.5 Burgundy', handle: 'vengoh-belt-burgundy', description: '<p>Premium leather belt in burgundy with VGH buckle.</p>', product_type: 'Belt', price: 59, tags: ['belt', 'accessories', 'burgundy'], collection_handle: 'belts', variants: [{ title: 'One Size', size: 'One Size', price: 59 }], images: [{ url: '/images/products/belt-burgundy-1.png', alt_text: 'VGH Belt Style 1.5 Burgundy', position: 0 }] },
  { title: 'VGH Belt Style 1.5 Beige', handle: 'vengoh-belt-beige', description: '<p>Premium leather belt in beige with VGH buckle.</p>', product_type: 'Belt', price: 59, tags: ['belt', 'accessories', 'beige'], collection_handle: 'belts', variants: [{ title: 'One Size', size: 'One Size', price: 59 }], images: [{ url: '/images/products/belt-pink-1.png', alt_text: 'VGH Belt Style 1.5 Beige', position: 0 }] },
  { title: 'VGH Belt Style 1.5 Baby Pink', handle: 'vengoh-belt-baby-pink', description: '<p>Premium leather belt in baby pink with VGH buckle.</p>', product_type: 'Belt', price: 59, tags: ['belt', 'accessories', 'pink'], collection_handle: 'belts', variants: [{ title: 'One Size', size: 'One Size', price: 59 }], images: [{ url: '/images/products/belt-pink-1.png', alt_text: 'VGH Belt Style 1.5 Baby Pink', position: 0 }] },
  { title: 'VGH Belt Style 1.5 Light Grey', handle: 'vengoh-belt-light-grey', description: '<p>Premium leather belt in light grey with VGH buckle.</p>', product_type: 'Belt', price: 59, tags: ['belt', 'accessories', 'grey'], collection_handle: 'belts', variants: [{ title: 'One Size', size: 'One Size', price: 59 }], images: [{ url: '/images/products/belt-black-1.jpg', alt_text: 'VGH Belt Style 1.5 Light Grey', position: 0 }] },
  { title: 'VGH Belt Style 1.5 Navy/Grey', handle: 'vengoh-belt-navy-grey', description: '<p>Premium leather belt in navy/grey combination with VGH buckle.</p>', product_type: 'Belt', price: 59, tags: ['belt', 'accessories', 'navy', 'grey'], collection_handle: 'belts', variants: [{ title: 'One Size', size: 'One Size', price: 59 }], images: [{ url: '/images/products/belt-navy-1.png', alt_text: 'VGH Belt Style 1.5 Navy/Grey', position: 0 }] },
  { title: 'VGH Belt Style 1.5 Anthracite', handle: 'vengoh-belt-anthracite', description: '<p>Premium leather belt in anthracite with VGH buckle.</p>', product_type: 'Belt', price: 59, tags: ['belt', 'accessories', 'grey', 'anthracite'], collection_handle: 'belts', variants: [{ title: 'One Size', size: 'One Size', price: 59 }], images: [{ url: '/images/products/belt-black-1.jpg', alt_text: 'VGH Belt Style 1.5 Anthracite', position: 0 }] },
  { title: 'VGH Belt Style 1.5 Purple', handle: 'vengoh-belt-purple', description: '<p>Premium leather belt in purple with VGH buckle.</p>', product_type: 'Belt', price: 59, tags: ['belt', 'accessories', 'purple'], collection_handle: 'belts', variants: [{ title: 'One Size', size: 'One Size', price: 59 }], images: [{ url: '/images/products/belt-burgundy-1.png', alt_text: 'VGH Belt Style 1.5 Purple', position: 0 }] },
  { title: 'VGH Belt Style 1.5 White', handle: 'vengoh-belt-white', description: '<p>Premium leather belt in white with VGH buckle.</p>', product_type: 'Belt', price: 59, tags: ['belt', 'accessories', 'white'], collection_handle: 'belts', variants: [{ title: 'One Size', size: 'One Size', price: 59 }], images: [{ url: '/images/products/belt-pink-1.png', alt_text: 'VGH Belt Style 1.5 White', position: 0 }] },

  // ============================================================
  // KIDS COLLECTION
  // ============================================================
  // Kids Vests
  { title: 'Vengoh Lily Kids Vest Pink', handle: 'lily-kids-vest-pink', description: '<p>The Lily kids vest in pink. Lightweight, water-resistant with premium insulation. Designed for young equestrians aged 8-11.</p>', product_type: 'Vest', price: 84.15, tags: ['vest', 'lily', 'kids', 'pink'], collection_handle: 'kid', variants: [{ title: '8-9 ans', size: '8-9 ans', price: 84.15 }, { title: '10-11 ans', size: '10-11 ans', price: 84.15 }], images: [{ url: '/images/products/lily-pink-1.jpg', alt_text: 'Vengoh Lily Kids Vest Pink', position: 0 }] },
  { title: 'Vengoh Lily Kids Vest Blue', handle: 'lily-kids-vest-blue', description: '<p>The Lily kids vest in blue. Lightweight, water-resistant with premium insulation for young riders.</p>', product_type: 'Vest', price: 84.15, tags: ['vest', 'lily', 'kids', 'blue'], collection_handle: 'kid', variants: [{ title: '8-9 ans', size: '8-9 ans', price: 84.15 }, { title: '10-11 ans', size: '10-11 ans', price: 84.15 }], images: [{ url: '/images/products/lily-grey-1.png', alt_text: 'Vengoh Lily Kids Vest Blue', position: 0 }] },

  // Kids Base Layers
  { title: 'Vengoh Azalea Kids Base Layers Pink', handle: 'azalea-kids-base-layer-pink', description: '<p>The Azalea kids base layer in pink. Long-sleeve with half-zip collar, designed for young equestrians.</p>', product_type: 'Base Layer', price: 75.65, tags: ['base-layer', 'azalea', 'kids', 'pink', 'long-sleeve'], collection_handle: 'kid', variants: [{ title: '8-9 ans', size: '8-9 ans', price: 75.65 }, { title: '10-11 ans', size: '10-11 ans', price: 75.65 }], images: [{ url: '/images/products/azalea-beige-1.jpg', alt_text: 'Vengoh Azalea Kids Base Layers Pink', position: 0 }] },
  { title: 'Vengoh Azalea Kids Base Layers Blue', handle: 'azalea-kids-base-layer-blue', description: '<p>The Azalea kids base layer in blue. Long-sleeve with half-zip collar for young riders.</p>', product_type: 'Base Layer', price: 75.65, tags: ['base-layer', 'azalea', 'kids', 'blue', 'long-sleeve'], collection_handle: 'kid', variants: [{ title: '8-9 ans', size: '8-9 ans', price: 75.65 }, { title: '10-11 ans', size: '10-11 ans', price: 75.65 }], images: [{ url: '/images/products/azalea-navy-1.png', alt_text: 'Vengoh Azalea Kids Base Layers Blue', position: 0 }] },

  // Kids Starlette Base Layers
  { title: 'Vengoh Starlette Kids Base Layer Long Sleeves', handle: 'starlette-kids-base-layer-long-sleeves', description: '<p>The Starlette kids competition base layer with long sleeves. Premium white fabric with rhinestone details for young competitors.</p>', product_type: 'Base Layer', price: 109.65, tags: ['base-layer', 'starlette', 'kids', 'white', 'long-sleeve', 'competition'], collection_handle: 'kid', variants: [{ title: '8-9 ans', size: '8-9 ans', price: 109.65 }, { title: '10-11 ans', size: '10-11 ans', price: 109.65 }], images: [{ url: '/images/products/azalea-beige-1.jpg', alt_text: 'Vengoh Starlette Kids Base Layer Long Sleeves', position: 0 }] },
  { title: 'Vengoh Starlette Kids Base Layer Short Sleeves', handle: 'starlette-kids-base-layer-short-sleeves', description: '<p>The Starlette kids competition base layer with short sleeves. Perfect for summer competitions.</p>', product_type: 'Base Layer', price: 109.65, tags: ['base-layer', 'starlette', 'kids', 'white', 'short-sleeve', 'competition', 'summer'], collection_handle: 'kid', variants: [{ title: '8-9 ans', size: '8-9 ans', price: 109.65 }, { title: '10-11 ans', size: '10-11 ans', price: 109.65 }], images: [{ url: '/images/products/azalea-beige-1.jpg', alt_text: 'Vengoh Starlette Kids Base Layer Short Sleeves', position: 0 }] },

  // Kids Leggings
  { title: 'Vengoh Dahlia Kids Leggings Pink', handle: 'dahlia-kids-leggings-pink', description: '<p>The Dahlia kids leggings in pink. Full silicone grip seat with 4-way stretch fabric for young equestrians.</p>', product_type: 'Leggings', price: 84.15, tags: ['leggings', 'dahlia', 'kids', 'pink'], collection_handle: 'kid', variants: [{ title: '8-9 ans', size: '8-9 ans', price: 84.15 }, { title: '10-11 ans', size: '10-11 ans', price: 84.15 }], images: [{ url: '/images/products/dahlia-black-1.png', alt_text: 'Vengoh Dahlia Kids Leggings Pink', position: 0 }] },
  { title: 'Vengoh Dahlia Kids Leggings Blue', handle: 'dahlia-kids-leggings-blue', description: '<p>The Dahlia kids leggings in blue. Full silicone grip seat with 4-way stretch fabric.</p>', product_type: 'Leggings', price: 84.15, tags: ['leggings', 'dahlia', 'kids', 'blue'], collection_handle: 'kid', variants: [{ title: '8-9 ans', size: '8-9 ans', price: 84.15 }, { title: '10-11 ans', size: '10-11 ans', price: 84.15 }], images: [{ url: '/images/products/dahlia-black-1.png', alt_text: 'Vengoh Dahlia Kids Leggings Blue', position: 0 }] },
  { title: 'Vengoh Dahlia Kids Leggings White', handle: 'dahlia-kids-leggings-white', description: '<p>The Dahlia kids leggings in white. Full silicone grip seat for young riders.</p>', product_type: 'Leggings', price: 84.15, tags: ['leggings', 'dahlia', 'kids', 'white'], collection_handle: 'kid', variants: [{ title: '8-9 ans', size: '8-9 ans', price: 84.15 }, { title: '10-11 ans', size: '10-11 ans', price: 84.15 }], images: [{ url: '/images/products/dahlia-black-1.png', alt_text: 'Vengoh Dahlia Kids Leggings White', position: 0 }] },

  // Kids Belts
  { title: 'VGH Belt Kids Baby Pink', handle: 'vengoh-belt-kids-baby-pink', description: '<p>Kids belt in baby pink with VGH buckle. One size.</p>', product_type: 'Belt', price: 41.65, tags: ['belt', 'accessories', 'kids', 'pink'], collection_handle: 'kid', variants: [{ title: 'One Size', size: 'One Size', price: 41.65 }], images: [{ url: '/images/products/belt-pink-1.png', alt_text: 'VGH Belt Kids Baby Pink', position: 0 }] },
  { title: 'VGH Belt Kids Baby Blue', handle: 'vengoh-belt-kids-baby-blue', description: '<p>Kids belt in baby blue with VGH buckle. One size.</p>', product_type: 'Belt', price: 41.65, tags: ['belt', 'accessories', 'kids', 'blue'], collection_handle: 'kid', variants: [{ title: 'One Size', size: 'One Size', price: 41.65 }], images: [{ url: '/images/products/belt-navy-1.png', alt_text: 'VGH Belt Kids Baby Blue', position: 0 }] },

  // ============================================================
  // GIFT CARDS
  // ============================================================
  { title: 'Gift Card Vengoh Equestrian - €25', handle: 'vengoh-gift-card-25', description: '<p>Give the gift of Vengoh. This digital gift card can be used on any product in our store.</p>', product_type: 'Gift Card', price: 25, tags: ['gift-card'], collection_handle: 'gift-cards', variants: [{ title: '€25', size: null, price: 25 }], images: [{ url: '/images/products/gift-card-1.png', alt_text: 'Gift Card Vengoh Equestrian', position: 0 }] },
  { title: 'Gift Card Vengoh Equestrian - €50', handle: 'vengoh-gift-card-50', description: '<p>Give the gift of Vengoh. Digital gift card for our store.</p>', product_type: 'Gift Card', price: 50, tags: ['gift-card'], collection_handle: 'gift-cards', variants: [{ title: '€50', size: null, price: 50 }], images: [{ url: '/images/products/gift-card-1.png', alt_text: 'Gift Card Vengoh Equestrian', position: 0 }] },
  { title: 'Gift Card Vengoh Equestrian - €75', handle: 'vengoh-gift-card-75', description: '<p>Give the gift of Vengoh. Digital gift card for our store.</p>', product_type: 'Gift Card', price: 75, tags: ['gift-card'], collection_handle: 'gift-cards', variants: [{ title: '€75', size: null, price: 75 }], images: [{ url: '/images/products/gift-card-1.png', alt_text: 'Gift Card Vengoh Equestrian', position: 0 }] },
  { title: 'Gift Card Vengoh Equestrian - €100', handle: 'vengoh-gift-card-100', description: '<p>Give the gift of Vengoh. Digital gift card for our store.</p>', product_type: 'Gift Card', price: 100, tags: ['gift-card'], collection_handle: 'gift-cards', variants: [{ title: '€100', size: null, price: 100 }], images: [{ url: '/images/products/gift-card-1.png', alt_text: 'Gift Card Vengoh Equestrian', position: 0 }] },
  { title: 'Gift Card Vengoh Equestrian - €150', handle: 'vengoh-gift-card-150', description: '<p>Give the gift of Vengoh. Digital gift card for our store.</p>', product_type: 'Gift Card', price: 150, tags: ['gift-card'], collection_handle: 'gift-cards', variants: [{ title: '€150', size: null, price: 150 }], images: [{ url: '/images/products/gift-card-1.png', alt_text: 'Gift Card Vengoh Equestrian', position: 0 }] },
  { title: 'Gift Card Vengoh Equestrian - €200', handle: 'vengoh-gift-card-200', description: '<p>Give the gift of Vengoh. Digital gift card for our store.</p>', product_type: 'Gift Card', price: 200, tags: ['gift-card'], collection_handle: 'gift-cards', variants: [{ title: '€200', size: null, price: 200 }], images: [{ url: '/images/products/gift-card-1.png', alt_text: 'Gift Card Vengoh Equestrian', position: 0 }] },
  { title: 'Gift Card Vengoh Equestrian - €300', handle: 'vengoh-gift-card-300', description: '<p>Give the gift of Vengoh. Digital gift card for our store.</p>', product_type: 'Gift Card', price: 300, tags: ['gift-card'], collection_handle: 'gift-cards', variants: [{ title: '€300', size: null, price: 300 }], images: [{ url: '/images/products/gift-card-1.png', alt_text: 'Gift Card Vengoh Equestrian', position: 0 }] },
  { title: 'Gift Card Vengoh Equestrian - €500', handle: 'vengoh-gift-card-500', description: '<p>Give the gift of Vengoh. Digital gift card for our store.</p>', product_type: 'Gift Card', price: 500, tags: ['gift-card'], collection_handle: 'gift-cards', variants: [{ title: '€500', size: null, price: 500 }], images: [{ url: '/images/products/gift-card-1.png', alt_text: 'Gift Card Vengoh Equestrian', position: 0 }] },
  { title: 'Gift Card Vengoh Equestrian - €1000', handle: 'vengoh-gift-card-1000', description: '<p>The ultimate gift for the equestrian enthusiast.</p>', product_type: 'Gift Card', price: 1000, tags: ['gift-card'], collection_handle: 'gift-cards', variants: [{ title: '€1000', size: null, price: 1000 }], images: [{ url: '/images/products/gift-card-1.png', alt_text: 'Gift Card Vengoh Equestrian', position: 0 }] },

  // ============================================================
  // SERVICES
  // ============================================================
  { title: 'Saddle Fitting Service', handle: 'saddle-fitting-service', description: '<p>Professional saddle fitting consultation by our certified experts. Includes assessment, adjustment recommendations, and follow-up. Available in Luxembourg and surrounding areas.</p>', product_type: 'Service', price: 145, tags: ['service', 'saddle-fitting'], collection_handle: 'services', variants: [{ title: 'Standard', size: null, price: 145 }], images: [{ url: '/images/products/coupe-300-1.jpg', alt_text: 'Saddle Fitting Service', position: 0 }] },
  { title: 'Panel Replacement Service', handle: 'panel-replacement-service', description: '<p>Full saddle panel replacement service. Professional re-flocking or foam panel replacement by our expert saddlers.</p>', product_type: 'Service', price: 350, tags: ['service', 'panel-replacement'], collection_handle: 'services', variants: [{ title: 'Standard', size: null, price: 350 }], images: [{ url: '/images/products/coupe-300-1.jpg', alt_text: 'Panel Replacement Service', position: 0 }] },
  { title: 'Luxembourg Travel Fee', handle: 'luxembourg-travel-fee', description: '<p>Travel fee for saddle fitting services within Luxembourg.</p>', product_type: 'Service', price: 87.75, tags: ['service', 'travel'], collection_handle: 'services', variants: [{ title: 'Standard', size: null, price: 87.75 }], images: [{ url: '/images/products/coupe-300-1.jpg', alt_text: 'Luxembourg Travel Fee', position: 0 }] },

]

export const reviews = [
  { author: 'Sophie L.', rating: 5, body: 'Absolutely love my Azalea base layer! The fabric is so soft and the fit is perfect. Worth every penny.', product_handle: 'azalea-base-layer-black' },
  { author: 'Marie C.', rating: 5, body: 'The Camellia breeches are the best I have ever worn. The silicone grip is amazing and they are so comfortable for long rides.', product_handle: 'camellia-breeches-black' },
  { author: 'Anna K.', rating: 4, body: 'Beautiful pink color on the Azalea. Runs slightly small so I would recommend sizing up.', product_handle: 'azalea-base-layer-pink' },
  { author: 'Charlotte B.', rating: 5, body: 'The Iris breeches are stunning. High waist is so flattering and the knee grip is excellent.', product_handle: 'iris-breeches-black' },
  { author: 'Emma R.', rating: 5, body: 'Fast shipping to Germany and beautifully packaged. The Dahlia leggings are my new favorite riding pants!', product_handle: 'dahlia-riding-leggings-black' },
  { author: 'Julie D.', rating: 5, body: 'The W breeches are so comfortable with the ultra-stretch fabric. Perfect for long training sessions.', product_handle: 'camellia-w-breeches-black' },
  { author: 'Clara V.', rating: 4, body: 'Love the grey vest. Very trendy and the quality is excellent. Great for layering!', product_handle: 'lily-vest-grey' },
  { author: 'Isabelle P.', rating: 5, body: 'Bought the belt to match my breeches. The leather quality is outstanding for the price.', product_handle: 'vengoh-belt-black' },
  { author: 'Nina W.', rating: 5, body: 'Competition day essential! The white Camellia breeches are perfect and stay clean longer than other brands.', product_handle: 'camellia-breeches-white' },
  { author: 'Léa M.', rating: 5, body: 'The Starlette base layer is gorgeous! The rhinestone details are so elegant for competitions.', product_handle: 'starlette-base-layer-long-sleeves' },
  { author: 'Camille H.', rating: 5, body: 'Bought the kids collection for my daughter - she absolutely loves the pink vest and leggings!', product_handle: 'lily-kids-vest-pink' },
  { author: 'Pauline G.', rating: 4, body: 'The Royal Pink breeches are stunning! Limited edition so glad I got them.', product_handle: 'royal-pink-w-breeches' },
]

export const shippingPolicies = [
  { region: 'Luxembourg', delivery_days: '1-3 business days', cost_info: 'Free shipping on orders over €100. Standard shipping €5.95.', carriers: ['POST Luxembourg', 'DPD'] },
  { region: 'European Union', delivery_days: '3-7 business days', cost_info: 'Free shipping on orders over €150. Standard shipping €9.95.', carriers: ['DPD', 'DHL', 'UPS'] },
  { region: 'Other Europe', delivery_days: '5-10 business days', cost_info: 'Shipping from €14.95. Free shipping on orders over €200.', carriers: ['DHL', 'UPS', 'Mondial Relay'] },
  { region: 'Rest of World', delivery_days: '7-14 business days', cost_info: 'Shipping from €24.95. Contact us for large orders.', carriers: ['DHL', 'UPS'] },
]

export const sizeCharts: Record<string, {
  unit: string
  sizes: Array<Record<string, string | number>>
  fit: string
}> = {
  'Base Layer': {
    unit: 'cm',
    sizes: [
      { label: 'XXS', chest: 78, waist: 62, hips: 86 },
      { label: 'XS', chest: 82, waist: 66, hips: 90 },
      { label: 'S', chest: 86, waist: 70, hips: 94 },
      { label: 'M', chest: 90, waist: 74, hips: 98 },
      { label: 'L', chest: 96, waist: 80, hips: 104 },
      { label: 'XL', chest: 102, waist: 86, hips: 110 },
    ],
    fit: 'Fitted — designed to be worn close to the body under a riding jacket',
  },
  'Vest': {
    unit: 'cm',
    sizes: [
      { label: 'XXS', chest: 80, waist: 64, hips: 88 },
      { label: 'XS', chest: 84, waist: 68, hips: 92 },
      { label: 'S', chest: 88, waist: 72, hips: 96 },
      { label: 'M', chest: 92, waist: 76, hips: 100 },
      { label: 'L', chest: 98, waist: 82, hips: 106 },
      { label: 'XL', chest: 104, waist: 88, hips: 112 },
    ],
    fit: 'Regular — slightly roomier to layer over a base layer',
  },
  'Breeches': {
    unit: 'EU',
    sizes: [
      { label: '32', waist: 60, hips: 84, inseam: 76 },
      { label: '34', waist: 64, hips: 88, inseam: 78 },
      { label: '36', waist: 68, hips: 92, inseam: 79 },
      { label: '38', waist: 72, hips: 96, inseam: 80 },
      { label: '40', waist: 76, hips: 100, inseam: 81 },
      { label: '42', waist: 80, hips: 104, inseam: 82 },
      { label: '44', waist: 84, hips: 108, inseam: 83 },
      { label: '46', waist: 88, hips: 112, inseam: 84 },
    ],
    fit: 'High-waist design with stretch — order your usual EU size',
  },
  'Leggings': {
    unit: 'cm',
    sizes: [
      { label: 'XXS', waist: 60, hips: 84, inseam: 76 },
      { label: 'XS', waist: 64, hips: 88, inseam: 77 },
      { label: 'S', waist: 68, hips: 92, inseam: 78 },
      { label: 'M', waist: 72, hips: 96, inseam: 79 },
      { label: 'L', waist: 78, hips: 102, inseam: 80 },
      { label: 'XL', waist: 84, hips: 108, inseam: 81 },
    ],
    fit: 'Compression fit — stretchy 4-way fabric, size up if between sizes',
  },
  'Belt': {
    unit: 'cm',
    sizes: [
      { label: 'One Size', waist_range: '65-110' },
    ],
    fit: 'One size — adjustable buckle fits all waist sizes',
  },
}

export type Outfit = {
  handle: string
  title: string
  description: string
  occasion: string
  product_handles: string[]
  image: string
}

export const outfits: Outfit[] = [
  {
    handle: 'competition-blanche',
    title: 'Tenue Compétition Blanche',
    description: 'La tenue réglementaire parfaite pour le jumping et le dressage. Élégance et performance.',
    occasion: 'competition',
    product_handles: ['starlette-base-layer-long-sleeves', 'iris-breeches-white', 'vengoh-belt-white'],
    image: '/images/lifestyle/lifestyle-1.jpg',
  },
  {
    handle: 'competition-ete',
    title: 'Tenue Compétition Été',
    description: 'Pour les concours estivaux, fraîcheur et conformité réglementaire.',
    occasion: 'competition',
    product_handles: ['starlette-base-layer-short-sleeves', 'camellia-breeches-white', 'vengoh-belt-beige'],
    image: '/images/lifestyle/baby-pink.jpg',
  },
  {
    handle: 'training-navy',
    title: 'Tenue Entraînement Navy',
    description: 'Le look classique pour vos sessions quotidiennes. Coordonné de la tête aux pieds.',
    occasion: 'training',
    product_handles: ['azalea-base-layer-navy', 'camellia-breeches-navy', 'vengoh-belt-navy'],
    image: '/images/lifestyle/navy-collection.jpg',
  },
  {
    handle: 'training-black',
    title: 'Tenue Entraînement Noire',
    description: 'Sobre et efficace, le total look noir pour le travail quotidien.',
    occasion: 'training',
    product_handles: ['azalea-base-layer-black', 'dahlia-riding-leggings-black', 'vengoh-belt-black'],
    image: '/images/lifestyle/lifestyle-3.jpg',
  },
  {
    handle: 'casual-pink',
    title: 'Look Casual Rose',
    description: 'Douceur et féminité pour une balade décontractée.',
    occasion: 'casual',
    product_handles: ['daisy-base-layer-pink', 'royal-pink-w-breeches', 'vengoh-belt-baby-pink'],
    image: '/images/lifestyle/baby-pink.jpg',
  },
  {
    handle: 'winter-burgundy',
    title: 'Tenue Hiver Bordeaux',
    description: 'Chaleur et élégance pour les journées froides. La veste Lily pour une protection optimale.',
    occasion: 'winter',
    product_handles: ['azalea-base-layer-burgundy', 'lily-vest-burgundy', 'iris-breeches-black-burgundy', 'vengoh-belt-burgundy'],
    image: '/images/lifestyle/sage-green.jpg',
  },
  {
    handle: 'total-black',
    title: 'Total Look Noir',
    description: 'Le noir intégral, intemporel et sophistiqué. Parfait en toute circonstance.',
    occasion: 'training',
    product_handles: ['azalea-base-layer-black', 'lily-vest-black', 'iris-breeches-black', 'vengoh-belt-black'],
    image: '/images/lifestyle/lifestyle-3.jpg',
  },
  {
    handle: 'elegant-grey',
    title: 'Look Élégant Gris',
    description: 'Un camaïeu de gris raffiné pour la cavalière distinguée.',
    occasion: 'training',
    product_handles: ['azalea-base-layer-grey', 'lily-vest-grey', 'camellia-breeches-dark-grey', 'vengoh-belt-anthracite'],
    image: '/images/lifestyle/sage-green.jpg',
  },
]

export const businessInfo = {
  company: 'Unbelievable Products S.a r.l.',
  address: '74 Grand-Rue, L-1660 Luxembourg',
  email: 'info@vengoh.com',
  phone: '+352 661 930 931',
  vatNumber: 'LU12345678',
  returnPolicy: '14 days from receipt. Items must be unworn, unwashed, and with original tags attached.',
  businessHours: 'Monday - Friday: 9:00 - 17:00 CET',
}
