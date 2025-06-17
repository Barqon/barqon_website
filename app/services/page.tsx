'use client';

import { MotionDiv } from '@/components/Motion';
import React from 'react';
import Script from 'next/script';
import { useTheme } from '../context/ThemeContext';

// Service data
const services = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Responsive, fast, and optimized websites built with modern frameworks.',
    icon: '💻',
    features: [
      'Mobile-first responsive design',
      'Modern tech stack (Next.js, React)',
      'Performance optimization',
      'SEO best practices',
      'Custom animations & interactions'
    ]
  },
  {
    id: 'workspace',
    title: 'Workspace Management',
    description: 'Professional setup and management of Google Workspace, Microsoft 365, domains, emails, and admin tools.',
    icon: '🏢',
    features: [
      'Google Workspace setup',
      'Microsoft 365 integration',
      'Domain management',
      'Email system configuration',
      'Admin tools & permissions'
    ]
  },
  {
    id: 'branding',
    title: 'Brand Identity & Strategy',
    description: 'We craft unique, consistent brand stories that elevate perception and value.',
    icon: '🎯',
    features: [
      'Brand strategy & positioning',
      'Logo & visual identity design',
      'Brand guidelines & assets',
      'Voice & messaging framework',
      'Brand collateral design'
    ]
  },
  {
    id: 'uiux',
    title: 'UI/UX Design Systems',
    description: 'User-first interfaces with stunning design systems for web and mobile.',
    icon: '🎨',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Design system creation',
      'Interaction design',
      'Usability testing'
    ]
  },
  {
    id: 'motion',
    title: 'Creative Motion & Visual Design',
    description: 'Eye-catching motion graphics and visuals to bring your ideas to life.',
    icon: '🌀',
    features: [
      'Motion graphics & animations',
      'Video production & editing',
      'Social media content',
      'Explainer videos',
      'Brand motion guidelines'
    ]
  },
  {
    id: 'campaign',
    title: 'Advertising & Campaign Strategy',
    description: 'Impactful ad creatives and smart campaign blueprints to drive engagement.',
    icon: '📣',
    features: [
      'Campaign strategy & planning',
      'Ad creative development',
      'Social media campaigns',
      'Performance tracking',
      'A/B testing & optimization'
    ]
  },
  {
    id: 'startup',
    title: 'Startup Launch & Support',
    description: 'From pitch to product — we help startups kick off and scale rapidly.',
    icon: '🚀',
    features: [
      'Pitch deck development',
      'MVP planning & execution',
      'Growth strategy',
      'Investor relations',
      'Technical infrastructure'
    ]
  },
  {
    id: 'nextjs',
    title: 'Next.js & TailwindCMS Solutions',
    description: 'Powerful full-stack solutions using modern tech that\'s built to perform.',
    icon: '⚙️',
    features: [
      'Next.js development',
      'TailwindCSS integration',
      'Headless CMS setup',
      'API development',
      'Performance optimization'
    ]
  },
  {
    id: 'ondemand',
    title: 'On-Demand Custom Digital Services',
    description: 'Have something specific in mind? We tailor digital services on-demand.',
    icon: '📦',
    features: [
      'Custom development',
      'Technical consulting',
      'System integration',
      'Digital transformation',
      'Project management'
    ]
  }
];

export default function Services() {
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
            "description": "New Zealand's leading affordable web development studio. Available 24/7 across New Zealand.",
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
      <section className={`min-h-screen ${isDarkTheme ? 'bg-[#1B1B1B] text-[#D6C4A8]' : 'bg-gradient-to-b from-white via-gray-50 to-emerald-50/30 text-gray-800'} px-6 pt-24 pb-12 font-sans`}>
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-wide mb-3">What We <span className="bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent">Offer</span></h1>
          <p className={`max-w-3xl mx-auto text-base ${isDarkTheme ? 'text-[#EED9B6]' : 'text-gray-600'}`}>
            Barqon isn&apos;t just a studio — it&apos;s where bold design meets digital innovation.
          </p>
        </MotionDiv>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <MotionDiv
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                className={`group ${isDarkTheme ? 'bg-[#1B1B1B]/50 hover:bg-[#1B1B1B]/70' : 'bg-white/90 hover:bg-white shadow-lg hover:shadow-xl'} rounded-xl p-6 border ${isDarkTheme ? 'border-[#046C4E] hover:border-[#00FFBF]' : 'border-emerald-100 hover:border-emerald-300'} transition-all duration-75 hover:shadow-lg hover:shadow-[#00FFBF]/10 transform hover:scale-105 relative overflow-hidden backdrop-blur-sm`}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`absolute inset-0 pointer-events-none z-0 ${isDarkTheme ? 'bg-gradient-to-r from-[#00FFBF]/0 via-[#00FFBF]/5 to-[#00FFBF]/0' : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mint/10 via-mint/20 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-75`}></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className={`text-xl font-semibold ${isDarkTheme ? 'text-[#EED9B6]' : 'text-gray-800'} mb-2 group-hover:text-[#00FFBF] transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm ${isDarkTheme ? 'text-[#C1C1C1]' : 'text-gray-600'} mb-4`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className={`flex items-center text-xs ${isDarkTheme ? 'text-[#AAAAAA] group-hover:text-[#C1C1C1]' : 'text-gray-500 group-hover:text-gray-700'} transition-colors duration-300`}>
                        <span className="text-[#00FFBF] mr-2">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="max-w-3xl mx-auto text-base text-[#EED9B6] mb-6">
            From concept to code — we turn your vision into seamless, stunning digital products. Ready to make your mark?
          </p>
          <a 
            href="/contact-us" 
            className="inline-block px-6 py-3 text-sm bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] text-black font-semibold rounded-lg hover:from-[#00FFBF] hover:to-[#EED9B6] transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </MotionDiv>
      </section>
    </>
  );
}
