import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who We Are | Barqon - Premium Web Development Studio in New Zealand',
  description: 'Meet the team behind Barqon, New Zealand\'s leading web development studio. Discover our mission to transform digital landscapes with innovative solutions.',
  keywords: 'Barqon team, web development New Zealand, digital studio, web design team, tech innovation, Kiwi web developers',
  openGraph: {
    title: 'Who We Are | Barqon - Premium Web Development Studio in New Zealand',
    description: 'Meet the team behind Barqon, New Zealand\'s leading web development studio. Discover our mission to transform digital landscapes with innovative solutions.',
    type: 'website',
    url: 'https://barqon.co.nz/who-we-are',
    locale: 'en_NZ',
    siteName: 'Barqon',
    images: [
      {
        url: '/Team Section Banner_1.jpg',
        width: 1200,
        height: 600,
        alt: 'Barqon Team'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Who We Are | Barqon - Premium Web Development Studio in New Zealand',
    description: 'Meet the team behind Barqon, New Zealand\'s leading web development studio. Discover our mission to transform digital landscapes with innovative solutions.',
    images: ['/Team Section Banner_1.jpg']
  },
  alternates: {
    canonical: 'https://barqon.co.nz/who-we-are'
  },
  other: {
    'breadcrumbs': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://barqon.co.nz/"},
        {"@type": "ListItem", "position": 2, "name": "Who We Are", "item": "https://barqon.co.nz/who-we-are"}
      ]
    })
  }
}; 