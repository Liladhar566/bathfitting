// ============================================================
// CLIENT CONFIGURATION
// Edit this file to customize the website for each client.
// The 3D animation is shared across all clients and should
// never be modified here.
// ============================================================

export const clientConfig = {
  // --- Brand Identity ---
  businessName: 'AquaLuxe',
  tagline: 'Designed for the Modern Bathroom.',
  subTagline:
    'Premium bath fittings crafted for refined spaces, everyday comfort, and lasting performance.',
  logoText: 'AquaLuxe', // Used when no logo image is available
  logoImage: null as string | null, // Set to image path e.g. '/images/logo.png'
  established: '2008',

  // --- Contact Information ---
  contact: {
    phone: '+91 98765 43210',
    phoneRaw: '+919876543210', // for tel: links
    whatsapp: '+919876543210', // for wa.me links
    email: 'info@aqualuxe.in',
    address: {
      line1: '42, Rajiv Gandhi Nagar',
      line2: 'Near HDFC Bank, Sector 14',
      city: 'Gurgaon',
      state: 'Haryana',
      pincode: '122001',
      country: 'India',
    },
    googleMapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.5!2d77.026!3d28.479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzQ0LjQiTiA3N8KwMDEnMzMuNiJF!5e0!3m2!1sen!2sin!4v1234567890',
    googleMapsLink: 'https://maps.google.com',
  },

  // --- Opening Hours ---
  openingHours: [
    { days: 'Monday – Saturday', hours: '10:00 AM – 8:00 PM' },
    { days: 'Sunday', hours: '11:00 AM – 6:00 PM' },
  ],

  // --- Social Media ---
  social: {
    instagram: 'https://instagram.com/aqualuxe',
    facebook: 'https://facebook.com/aqualuxe',
    youtube: null as string | null,
    twitter: null as string | null,
  },

  // --- SEO ---
  seo: {
    siteTitle: 'AquaLuxe — Premium Bath Fittings',
    description:
      'AquaLuxe offers premium bath fittings and bathroom accessories crafted for refined spaces, everyday comfort, and lasting performance in India.',
    keywords:
      'bath fittings, bathroom fittings, faucets, basin mixers, showers, health faucet, sanitaryware, premium bathroom, luxury bathroom India',
    ogImage: '/images/og-image.jpg',
  },

  // --- About Page ---
  about: {
    storyTitle: 'Crafting Bathroom Experiences Since 2008',
    story: `AquaLuxe was founded with a singular vision: to bring world-class bathroom fittings to the Indian home. 
    For over 15 years, we have curated and crafted products that combine European design sensibility with the practical 
    needs of the Indian household.
    
    Our team of designers and engineers work tirelessly to ensure that every product that bears the AquaLuxe name 
    meets our exacting standards of quality, finish, and durability.`,
    philosophy:
      'We believe that the bathroom is not merely a functional space — it is a sanctuary. Every fitting we create is designed to elevate that experience.',
    qualityText:
      'Every AquaLuxe product undergoes rigorous quality testing — from pressure resistance to surface finish — before it leaves our facility. We use only premium-grade brass, stainless steel, and ABS materials.',
    aboutImage: null as string | null, // Set to '/images/about.jpg'
    showroomImage: null as string | null, // Set to '/images/showroom.jpg'
  },

  // --- Supabase (optional, for future data integration) ---
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL ?? '',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
  },
};

// --- Animation Config (shared across all clients — do not modify) ---
export const animationConfig = {
  totalFrames: 236,
  frameDir: '/frames/', // Vite serves /public/frames/
  framePrefix: 'ezgif-frame-',
  frameSuffix: '.jpg',
  frameAspectRatio: 16 / 9, // 1280 × 720
  getFramePath: (index: number) => {
    const padded = String(index).padStart(3, '0');
    return `${animationConfig.frameDir}${animationConfig.framePrefix}${padded}${animationConfig.frameSuffix}`;
  },
};
