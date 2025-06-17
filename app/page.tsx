'use client';
import { MotionDiv } from '@/components/Motion';
import Script from 'next/script';
import { useTheme } from './context/ThemeContext';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { CardSkeleton } from '@/components/Skeleton';

// Dynamically import components with loading states
const Hero = dynamic(() => import('@/components/Hero'), {
  loading: () => <CardSkeleton className="w-full h-[60vh]" />
});

// Features data
const features = [
  {
    id: 'tech',
    icon: '⚙️',
    title: 'Advanced Tech Stack',
    description: 'Modern tools like Next.js, Tailwind, and Framer Motion power all our experiences.',
    features: [
      'Next.js for performance',
      'Tailwind for styling',
      'Framer Motion for animations',
      'TypeScript for reliability',
      'Modern deployment pipeline'
    ]
  },
  {
    id: 'client',
    icon: '🤝',
    title: 'Client-Centric Approach',
    description: 'Every solution we craft is made with your growth and long-term vision in mind.',
    features: [
      'Personalized solutions',
      'Long-term partnership',
      'Regular updates',
      '24/7 support',
      'Growth-focused strategy'
    ]
  },
  {
    id: 'design',
    icon: '🎨',
    title: 'Tailored Designs',
    description: "Custom-built UIs that reflect your brand&apos;s identity with stunning aesthetics.",
    features: [
      'Brand-aligned design',
      'Responsive layouts',
      'Modern aesthetics',
      'User-focused UI/UX',
      'Custom animations'
    ]
  },
  {
    id: 'access',
    icon: '🔐',
    title: 'Exclusive Access',
    description: 'Password-protected areas, forums, private pricing, and member-only features.',
    features: [
      'Secure member areas',
      'Private forums',
      'Exclusive pricing',
      'Member benefits',
      'Priority support'
    ]
  },
  {
    id: 'built',
    icon: '📦',
    title: 'Everything Built In',
    description: 'CMS, CRM, eCommerce, branded emails, analytics – one lightning-fast system.',
    features: [
      'Integrated CMS',
      'CRM functionality',
      'eCommerce ready',
      'Email marketing',
      'Analytics dashboard'
    ]
  },
  {
    id: 'domains',
    icon: '💼',
    title: 'Domains & Emails',
    description: 'Register domains, configure business email, and launch instantly.',
    features: [
      'Domain registration',
      'Email setup',
      'SSL certificates',
      'DNS management',
      'Quick deployment'
    ]
  }
];

export default function HomePage() {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Barqon",
            "image": "https://barqon.co.nz/Desktop Logo.png",
            "logo": "https://barqon.co.nz/Desktop Logo.png",
            "url": "https://barqon.co.nz",
            "description": "New Zealand&apos;s leading affordable web development studio. Available 24/7 across New Zealand.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NZ"
            },
            "areaServed": {
              "@type": "Country",
              "name": "New Zealand"
            },
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "bestRating": "5",
              "ratingCount": "50"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Barqon Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Development",
                    "description": "Custom full-stack website development using modern tools."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Design",
                    "description": "Clean, responsive, Gen Z-centric UI/UX designs tailored to your brand."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Experience Design",
                    "description": "Crafting immersive digital experiences powered by Next.js and Tailwind CSS."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Affordable Web Solutions",
                    "description": "Budget-friendly yet professional websites with enterprise features."
                  }
                }
              ]
            }
          })
        }}
      />

      <Script
        id="local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Barqon",
            "image": "https://barqon.co.nz/Desktop Logo.png",
            "description": "New Zealand&apos;s leading affordable web development studio. Available 24/7 across New Zealand.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NZ"
            },
            "areaServed": {
              "@type": "Country",
              "name": "New Zealand"
            },
            "url": "https://barqon.co.nz",
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          })
        }}
      />

      <Script
        id="services-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Advanced Tech Stack",
                "description": "Modern tools like Next.js, Tailwind, and Framer Motion power all our experiences.",
                "provider": {
                  "@type": "Organization",
                  "name": "Barqon"
                }
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "Client-Centric Approach",
                "description": "Every solution we craft is made with your growth and long-term vision in mind.",
                "provider": {
                  "@type": "Organization",
                  "name": "Barqon"
                }
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "Tailored Designs",
                "description": "Custom-built UIs that reflect your brand&apos;s identity with stunning aesthetics.",
                "provider": {
                  "@type": "Organization",
                  "name": "Barqon"
                }
              }
            ]
          })
        }}
      />

      <main className="relative">
        <Suspense fallback={<CardSkeleton className="w-full h-[60vh]" />}>
          <Hero />
        </Suspense>

        {/* Features Section */}
        <section className={`min-h-screen ${isDarkTheme ? 'bg-[#1B1B1B]' : 'bg-gradient-to-b from-white via-gray-50 to-emerald-50'} px-6 pt-24 pb-12 font-sans`}>
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className={`text-4xl font-bold tracking-wide mb-3 ${isDarkTheme ? 'text-[#D6C4A8]' : 'text-gray-800'}`}>
              Welcome to <span className="bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent">Barqon</span>
            </h1>
            <p className={`max-w-3xl mx-auto text-base ${isDarkTheme ? 'text-[#EED9B6]' : 'text-gray-600'}`}>
              New Zealand&apos;s leading affordable web development studio. Available 24/7 across New Zealand.
            </p>
          </MotionDiv>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <MotionDiv
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}
                  className={`group ${isDarkTheme ? 'bg-[#1B1B1B]/50 hover:bg-[#1B1B1B]/70' : 'bg-white/90 hover:bg-white shadow-lg hover:shadow-xl'} rounded-xl p-6 border ${isDarkTheme ? 'border-[#046C4E] hover:border-[#00FFBF]' : 'border-emerald-100 hover:border-emerald-300'} transition-all duration-75 hover:shadow-lg hover:shadow-[#00FFBF]/10 transform hover:scale-105 relative overflow-hidden backdrop-blur-sm`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`absolute inset-0 pointer-events-none z-0 ${isDarkTheme ? 'bg-gradient-to-r from-[#00FFBF]/0 via-[#00FFBF]/5 to-[#00FFBF]/0' : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mint/10 via-mint/20 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-75`}></div>
                  <div className="relative z-10">
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-[#EED9B6]' : 'text-gray-800'} mb-2 group-hover:text-[#00FFBF] transition-colors duration-300`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm ${isDarkTheme ? 'text-[#C1C1C1]' : 'text-gray-600'} mb-4`}>
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className={`flex items-center text-xs ${isDarkTheme ? 'text-[#AAAAAA] group-hover:text-[#C1C1C1]' : 'text-gray-500 group-hover:text-gray-700'} transition-colors duration-300`}>
                          <span className="text-[#00FFBF] mr-2">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
