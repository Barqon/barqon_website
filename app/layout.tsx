import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { ThemeProvider } from './context/ThemeContext';
import ClientLayout from './ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Barqon – Premium Digital Studio | Web, Brand & UI/UX Experts</title>
        <meta name="description" content="Barqon is New Zealand's premium digital studio delivering elite web development, brand identity, and UI/UX solutions for Gen Z entrepreneurs." />
        <meta name="keywords" content="Web development New Zealand, Barqon Studio, Next.js websites, Gen Z digital studio, Tailwind design" />
        <meta name="author" content="Barqon Digital Studio" />
        <meta property="og:title" content="Barqon – Premium Digital Studio in New Zealand" />
        <meta property="og:description" content="We craft fast, responsive, and elegant websites with brand-focused strategy." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#1B1B1B" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta property="og:image" content="/logo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Barqon - New Zealand's Leading Web Development Studio" />
        <link rel="icon" href="/logo.jpg" />
        <meta name="last-modified" content="2025-06-17" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "dateModified": "2025-06-17",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Service",
                    "name": "Advanced Tech Stack",
                    "description": "Modern tools like Next.js, Tailwind, and Framer Motion power all our experiences.",
                    "provider": {
                      "@type": "Organization",
                      "name": "Barqon"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Service",
                    "name": "Client-Centric Approach",
                    "description": "Every solution we craft is made with your growth and long-term vision in mind.",
                    "provider": {
                      "@type": "Organization",
                      "name": "Barqon"
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Service",
                    "name": "Tailored Designs",
                    "description": "Custom-built UIs that reflect your brand's identity with stunning aesthetics.",
                    "provider": {
                      "@type": "Organization",
                      "name": "Barqon"
                    }
                  }
                }
              ],
              "logo": "https://www.barqon.co.nz/logo.jpg"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Barqon",
              "alternateName": "barqon.co.nz",
              "url": "https://barqon.co.nz"
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased selection:bg-[#00FFBF] selection:text-black`}>
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
