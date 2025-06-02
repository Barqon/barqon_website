import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

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
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1B1B1B" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta property="og:image" content="/opengraph-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Barqon - New Zealand's Leading Web Development Studio" />
      </head>
      <body className={`${inter.className} bg-[#121212] text-[#C1C1C1] antialiased selection:bg-[#00FFBF] selection:text-black`}>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FFBF]/5 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
