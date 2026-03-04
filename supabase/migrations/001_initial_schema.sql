-- Vengoh Equestrian Database Schema

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Collections
create table collections (
  id uuid primary key default uuid_generate_v4(),
  handle text unique not null,
  title text not null,
  description text,
  image_url text,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- Products
create table products (
  id uuid primary key default uuid_generate_v4(),
  shopify_id bigint,
  title text not null,
  handle text unique not null,
  description text,
  product_type text,
  vendor text default 'Vengoh',
  price decimal(10,2) not null,
  compare_at_price decimal(10,2),
  tags text[] default '{}',
  collection_id uuid references collections(id) on delete set null,
  available boolean default true,
  created_at timestamptz default now()
);

-- Product Variants
create table product_variants (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid references products(id) on delete cascade not null,
  title text not null,
  size text,
  color text,
  price decimal(10,2) not null,
  available boolean default true,
  sku text
);

-- Product Images
create table product_images (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid references products(id) on delete cascade not null,
  url text not null,
  alt_text text,
  position int default 0
);

-- Reviews
create table reviews (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid references products(id) on delete cascade,
  author text not null,
  rating int check (rating >= 1 and rating <= 5) not null,
  body text,
  created_at timestamptz default now()
);

-- Chat Conversations
create table chat_conversations (
  id uuid primary key default uuid_generate_v4(),
  session_id text not null,
  created_at timestamptz default now()
);

-- Chat Messages
create table chat_messages (
  id uuid primary key default uuid_generate_v4(),
  conversation_id uuid references chat_conversations(id) on delete cascade not null,
  role text check (role in ('user', 'assistant')) not null,
  content text not null,
  metadata jsonb default '{}',
  created_at timestamptz default now()
);

-- Shipping Policies
create table shipping_policies (
  id uuid primary key default uuid_generate_v4(),
  region text not null,
  delivery_days text not null,
  cost_info text,
  carriers text[] default '{}'
);

-- Indexes
create index idx_products_collection on products(collection_id);
create index idx_products_handle on products(handle);
create index idx_collections_handle on collections(handle);
create index idx_product_variants_product on product_variants(product_id);
create index idx_product_images_product on product_images(product_id);
create index idx_reviews_product on reviews(product_id);
create index idx_chat_messages_conversation on chat_messages(conversation_id);

-- Row Level Security
alter table collections enable row level security;
alter table products enable row level security;
alter table product_variants enable row level security;
alter table product_images enable row level security;
alter table reviews enable row level security;
alter table shipping_policies enable row level security;
alter table chat_conversations enable row level security;
alter table chat_messages enable row level security;

-- Public read access policies
create policy "Collections are viewable by everyone" on collections for select using (true);
create policy "Products are viewable by everyone" on products for select using (true);
create policy "Variants are viewable by everyone" on product_variants for select using (true);
create policy "Images are viewable by everyone" on product_images for select using (true);
create policy "Reviews are viewable by everyone" on reviews for select using (true);
create policy "Shipping policies are viewable by everyone" on shipping_policies for select using (true);

-- Chat policies (anyone can create, read own)
create policy "Anyone can create conversations" on chat_conversations for insert with check (true);
create policy "Anyone can view conversations" on chat_conversations for select using (true);
create policy "Anyone can create messages" on chat_messages for insert with check (true);
create policy "Anyone can view messages" on chat_messages for select using (true);
