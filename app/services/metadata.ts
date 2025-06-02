import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Barqon - Premium Web Development & Design Studio',
  description: 'Discover Barqon\'s premium web development and design services. From responsive websites to brand identity, UI/UX design, and digital solutions. Expert services in New Zealand.',
  keywords: 'web development, UI/UX design, brand identity, digital services, New Zealand, web design, motion graphics, startup support, Next.js, TailwindCSS',
  openGraph: {
    title: 'Barqon Services - Premium Web Development & Design',
    description: 'Transform your digital presence with Barqon\'s expert services. From web development to brand strategy, we deliver premium solutions for your business.',
    type: 'website',
    locale: 'en_NZ',
    siteName: 'Barqon',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Barqon Services Overview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barqon Services - Premium Web Development & Design',
    description: 'Transform your digital presence with Barqon\'s expert services. From web development to brand strategy, we deliver premium solutions for your business.',
    images: ['/og-services.jpg']
  },
  alternates: {
    canonical: 'https://barqon.com/services'
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
  verification: {
    google: 'your-google-site-verification',
  },
  category: 'technology',
  classification: 'Web Development Services',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Barqon' }],
  creator: 'Barqon',
  publisher: 'Barqon',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}; 