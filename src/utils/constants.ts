
// Application constants - easily configurable for different environments
export const APP_CONFIG = {
  company: {
    name: 'Prestige Design and Builders',
    tagline: 'DESIGNING AT ITS BEST',
    phone: '+1 (555) 123-4567',
    email: 'info@prestigedesignbuilders.com',
    address: '123 Design Street, Builder City, BC 12345',
    whatsapp: '+1555123456' // Format for WhatsApp API
  },
  
  social: {
    facebook: 'https://facebook.com/prestigedesignbuilders',
    instagram: 'https://instagram.com/prestigedesignbuilders',
    linkedin: 'https://linkedin.com/company/prestigedesignbuilders',
    twitter: 'https://twitter.com/prestigebuilders'
  },
  
  navigation: {
    items: [
      { name: 'Home', path: '/' },
      { name: 'What We Build', path: '/what-we-build' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Custom Interior Styles', path: '/custom-interior-styles' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' }
    ]
  },

  projectTypes: [
    'Residential',
    'Commercial', 
    'Industrial',
    'Custom Design'
  ],

  budgetRanges: [
    'Under $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    'Over $500,000'
  ],

  timelines: [
    '1-3 months',
    '3-6 months', 
    '6-12 months',
    'Over 1 year'
  ]
};

// Future: These can be moved to environment variables or fetched from backend
export const API_ENDPOINTS = {
  CONTACT: '/contact',
  QUOTE: '/quote',
  NEWSLETTER: '/newsletter',
  GALLERY: '/gallery',
  PROJECTS: '/projects'
};
