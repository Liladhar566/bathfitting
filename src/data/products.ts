export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  badge?: string;
  featured?: boolean;
}

export type ProductCategory =
  | 'Faucets'
  | 'Basin Mixers'
  | 'Showers'
  | 'Health Faucets'
  | 'Bathroom Accessories'
  | 'Sanitaryware';

export const productCategories: ProductCategory[] = [
  'Faucets',
  'Basin Mixers',
  'Showers',
  'Health Faucets',
  'Bathroom Accessories',
  'Sanitaryware',
];

export const products: Product[] = [
  // Faucets
  {
    id: 'f001',
    name: 'Meridian Pillar Cock',
    category: 'Faucets',
    description: 'Quarter-turn ceramic disc cartridge. Brushed nickel finish. Corrosion-resistant brass body.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
    badge: 'Bestseller',
    featured: true,
  },
  {
    id: 'f002',
    name: 'Solaris Two-Hole Sink Tap',
    category: 'Faucets',
    description: 'Precision-engineered for high-flow output. Matte black finish. Suitable for granite surfaces.',
    image: 'https://images.unsplash.com/photo-1584622781867-1c5fe959b541?w=600&q=80',
    featured: true,
  },
  {
    id: 'f003',
    name: 'Athos Wall Mixer With Spout',
    category: 'Faucets',
    description: 'Wall-mounted concealed body. Elegant curved spout. Chrome-plated brass construction.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
  },

  // Basin Mixers
  {
    id: 'bm001',
    name: 'Cascade Single-Lever Basin Mixer',
    category: 'Basin Mixers',
    description: 'Smooth single-lever control for precise temperature and flow. High arc spout design.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    badge: 'New',
    featured: true,
  },
  {
    id: 'bm002',
    name: 'Onyx Deck-Mounted Basin Mixer',
    category: 'Basin Mixers',
    description: 'Minimalist form factor. 35mm ceramic disc. Available in chrome, brushed gold, and matte black.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80',
  },
  {
    id: 'bm003',
    name: 'Porto Tall Basin Mixer',
    category: 'Basin Mixers',
    description: 'Extra-tall spout for vessel bowls. Anti-splash aerator. Ceramic disc technology.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
  },

  // Showers
  {
    id: 's001',
    name: 'Monsoon Rain Shower Set',
    category: 'Showers',
    description: '300mm overhead rain shower. 3-function handheld. Thermo-regulated mixing valve.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
    badge: 'Premium',
    featured: true,
  },
  {
    id: 's002',
    name: 'Zen Handheld Shower',
    category: 'Showers',
    description: 'Ergonomic grip. 5 spray patterns. Anti-lime click system. 1.5m flexible hose.',
    image: 'https://images.unsplash.com/photo-1584622781867-1c5fe959b541?w=600&q=80',
  },
  {
    id: 's003',
    name: 'Summit Concealed Shower System',
    category: 'Showers',
    description: 'Fully concealed in-wall system. Integrated diverter. 200mm rain head. Brushed nickel.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80',
  },

  // Health Faucets
  {
    id: 'hf001',
    name: 'CleanJet Health Faucet',
    category: 'Health Faucets',
    description: 'Powerful spray with comfort grip. Includes 1.2m braided hose and wall bracket.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
    featured: true,
  },
  {
    id: 'hf002',
    name: 'AquaJet Premium Health Faucet',
    category: 'Health Faucets',
    description: 'ABS body. Anti-bacterial coating. 360° swivel head. Stainless steel braided hose.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },

  // Bathroom Accessories
  {
    id: 'a001',
    name: 'Mira Soap Dispenser',
    category: 'Bathroom Accessories',
    description: 'Wall-mounted ABS soap dispenser. 500ml capacity. Available in chrome and matte black.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80',
    featured: true,
  },
  {
    id: 'a002',
    name: 'Arc Towel Ring',
    category: 'Bathroom Accessories',
    description: 'Solid brass construction. Rust-proof chrome finish. Easy installation.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80',
  },
  {
    id: 'a003',
    name: 'Grid Toilet Roll Holder',
    category: 'Bathroom Accessories',
    description: 'Geometric design. Stainless steel. Includes concealed mounting hardware.',
    image: 'https://images.unsplash.com/photo-1584622781867-1c5fe959b541?w=600&q=80',
  },

  // Sanitaryware
  {
    id: 'sw001',
    name: 'Forma Wall-Hung WC',
    category: 'Sanitaryware',
    description: 'Rimless flush technology. Soft-close seat. Easy-clean glaze. 6/3L dual flush.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
    badge: 'Eco',
    featured: true,
  },
  {
    id: 'sw002',
    name: 'Alto Counter Basin',
    category: 'Sanitaryware',
    description: 'Vitreous china. Semi-recessed design. Available in white and off-white.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
];
