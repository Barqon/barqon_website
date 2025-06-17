import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Barqon – Premium Digital Studio in New Zealand',
  description: 'Contact Barqon for premium web development, design, and digital solutions. Reach out for collaborations, partnerships, or inquiries. Based in Auckland, serving all of New Zealand and global clients.',
  keywords: 'contact, Barqon, web development, digital studio, Auckland, New Zealand, web design, premium, agency, email, phone',
  openGraph: {
    title: 'Contact Barqon – Premium Digital Studio',
    description: 'Get in touch with Barqon for web development, design, and digital solutions. Serving New Zealand and global clients.',
    type: 'website',
    locale: 'en_NZ',
    url: 'https://barqon.co.nz/contact-us',
    siteName: 'Barqon',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Barqon – Premium Digital Studio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Barqon – Premium Digital Studio',
    description: 'Get in touch with Barqon for web development, design, and digital solutions. Serving New Zealand and global clients.',
    images: ['/og-contact.jpg']
  },
  alternates: {
    canonical: 'https://barqon.co.nz/contact-us'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'Contact Page',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Barqon' }],
  creator: 'Barqon',
  publisher: 'Barqon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    'breadcrumbs': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://barqon.co.nz/"},
        {"@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://barqon.co.nz/contact-us"}
      ]
    })
  }
}; 