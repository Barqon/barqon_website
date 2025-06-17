import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://barqon.co.nz'),
  title: 'Barqon | Affordable Web Development & Design Studio in New Zealand',
  description: 'Barqon - New Zealand\'s leading affordable web development studio. Expert in modern web design, development, and digital experiences. Get premium websites at competitive prices. ✓ Fast Delivery ✓ Modern Tech Stack ✓ Gen Z Focus ✓ 24/7 Service',
  keywords: 'Barqon, web development, affordable web development, web design, Next.js, Tailwind CSS, Framer Motion, Gen Z brands, modern websites, New Zealand web development, cheap web development, professional web design, custom website development, 24/7 web development',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'Barqon | Affordable Web Development & Design Studio',
    description: 'New Zealand\'s leading affordable web development studio. Expert in modern web design, development, and digital experiences. Get premium websites at competitive prices. Available 24/7 across New Zealand.',
    type: 'website',
    url: 'https://barqon.co.nz',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 600,
        alt: 'Barqon - New Zealand\'s Leading Web Development Studio',
      },
    ],
    siteName: 'Barqon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barqon | Affordable Web Development & Design Studio',
    description: 'New Zealand\'s leading affordable web development studio. Expert in modern web design, development, and digital experiences. Available 24/7 across New Zealand.',
    images: [{
      url: '/opengraph-image.jpg',
      width: 1200,
      height: 600,
      alt: 'Barqon - New Zealand\'s Leading Web Development Studio',
    }],
  },
  alternates: {
    canonical: 'https://barqon.co.nz',
  },
  other: {
    'geo.region': 'NZ',
    'geo.placename': 'New Zealand',
    'application-name': 'Barqon',
    'apple-mobile-web-app-title': 'Barqon',
    'msapplication-TileColor': '#1B1B1B',
    'msapplication-TileImage': '/logo.png',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
}; 