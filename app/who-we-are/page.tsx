'use client';

import * as React from 'react';
import Image from 'next/image';
import { MotionDiv } from '@/components/Motion';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { useTheme } from '../context/ThemeContext';

export default function WhoWeAre() {
  const [mounted, setMounted] = useState(false);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const teamMembers = [
    {
      name: "Fathima Babu",
      title: "Founder & Chief Executive Officer",
      bio: "The visionary at the helm. Fathima leads Barqon&apos;s operations, strategy, and client success with professionalism and heart. As a registered company director, she ensures every move Barqon makes is built to last.",
      email: "fathima@barqon.co.nz",
      phone: "‭+64 22 387 5455‬"
    },
    {
      name: "Babu Abdul Khader",
      title: "Strategic Advisor & Family Investor (Non-operational)",
      bio: "Babu plays a crucial behind-the-scenes role in Barqon&apos;s journey, offering financial insight and legacy-focused support. While not involved in day-to-day operations, he is a key part of Barqon&apos;s foundation."
    },
    {
      name: "Mohammad Madhih Babu",
      title: "Innovation & Strategy Contributor (Future COO)",
      bio: "Madhih brings Barqon&apos;s tech vision to life from the inside. Focused on future leadership, he&apos;s shaping Barqon&apos;s roadmap, branding, and systems while preparing to take full operational control as soon as legally permitted."
    }
  ];

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
      <section className={`min-h-screen ${isDarkTheme ? 'bg-[#1B1B1B] text-[#D6C4A8]' : 'bg-gradient-to-b from-white via-gray-50 to-emerald-50/30 text-gray-800'} px-6 py-16 font-sans overflow-hidden`}>
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold tracking-wide mb-4">Who We <span className="bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent">Are</span></h1>
          <p className={`max-w-3xl mx-auto text-lg ${isDarkTheme ? 'text-[#EED9B6]' : 'text-gray-600'}`}>
            Barqon is a next-gen digital studio proudly born in New Zealand. We aim to redefine what it means to build a premium online presence — not just for global brands, but for every Kiwi with a vision.
          </p>
        </MotionDiv>

        <div className="max-w-6xl mx-auto mb-20">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-xl"
          >
            <Image
              src="/Team Section Banner_1.jpg"
              alt="Barqon Team - New Zealand&apos;s Leading Web Development Studio"
              width={1200}
              height={600}
              className={`rounded-xl w-full object-cover border ${isDarkTheme ? 'border-[#046C4E]' : 'border-emerald-200'} shadow-lg hover:shadow-[0_0_20px_#00FFBF] transition-all duration-300 group-hover:scale-110`}
              priority
            />
          </MotionDiv>
        </div>

        <MotionDiv
          className={`group text-center w-full max-w-lg mx-auto mb-12 ${isDarkTheme ? 'bg-[#2A2A2A]/30' : 'bg-white/90'} backdrop-blur-sm p-4 md:p-8 rounded-xl border ${isDarkTheme ? 'border-[#046C4E]' : 'border-emerald-100'} transition-all duration-200 hover:shadow-xl hover:shadow-[#00FFBF]/20 transform hover:scale-105 relative overflow-hidden`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={`absolute inset-0 pointer-events-none z-0 ${isDarkTheme ? 'bg-gradient-to-r from-[#00FFBF]/0 via-[#00FFBF]/10 to-[#00FFBF]/0' : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mint/10 via-mint/20 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
          <div className="relative z-10">
            <h2 className={`text-2xl md:text-3xl font-semibold mb-4 ${isDarkTheme ? 'text-[#EED9B6]' : 'text-gray-800'}`}>Our Mission</h2>
            <p className={`text-base md:text-xl ${isDarkTheme ? 'text-[#EED9B6]' : 'text-gray-700'}`}>
              Our mission? Transform New Zealand&apos;s digital landscape. Whether you&apos;re a startup or an enterprise, we offer elite design and development — from affordable custom sites to luxury web builds — tailored to your goals.
            </p>
            <p className={`mt-4 text-sm md:text-lg ${isDarkTheme ? 'text-[#C1C1C1]' : 'text-gray-600'}`}>
              We blend creative power, tech innovation, and a deep understanding of Kiwi culture to deliver unforgettable online experiences.
            </p>
          </div>
        </MotionDiv>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto mb-20">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[3/2] rounded-xl border border-[#00FFBF] overflow-hidden hover:shadow-[0_0_20px_#00FFBF] transition-all duration-300 group"
          >
            <div className={`absolute inset-0 pointer-events-none z-0 ${isDarkTheme ? 'bg-gradient-to-r from-[#00FFBF]/0 via-[#00FFBF]/5 to-[#00FFBF]/0' : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mint/10 via-mint/20 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-75`}></div>
            <Image
              src="/Premium office with modern furniture, dark theme, emerald lights, digital hub vibe, futuristic environment_1.jpg"
              alt="Barqon&apos;s Modern Office Space - Innovation Hub"
              fill
              className="rounded-xl transition-transform duration-300 group-hover:scale-110 object-cover relative z-10"
              priority
            />
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[3/2] rounded-xl border border-[#00FFBF] overflow-hidden hover:shadow-[0_0_20px_#00FFBF] transition-all duration-300 group"
          >
            <div className={`absolute inset-0 pointer-events-none z-0 ${isDarkTheme ? 'bg-gradient-to-r from-[#00FFBF]/0 via-[#00FFBF]/5 to-[#00FFBF]/0' : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mint/10 via-mint/20 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-75`}></div>
            <Image
              src="/Technology Flow Graphic_1.jpg"
              alt="Barqon&apos;s Technology Infrastructure"
              fill
              className="rounded-xl transition-transform duration-300 group-hover:scale-110 object-cover relative z-10"
              priority
            />
          </MotionDiv>
        </div>

        {mounted && (
          <>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent">Founding Team of Barqon</h2>
            </MotionDiv>
            <MotionDiv
              className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: {}
              }}
            >
              {teamMembers.map((person, i) => (
                <MotionDiv
                  key={i}
                  className={`${isDarkTheme ? 'bg-[#2A2A2A]/30' : 'bg-gray-50'} backdrop-blur-sm border border-[#046C4E] rounded-xl p-6 text-left hover:border-[#00FFBF] shadow-md hover:shadow-[0_0_20px_#00FFBF] transition-all duration-300`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{
                    delay: 0.15 * i,
                    duration: 0.15,
                    ease: [0.25, 1, 0.5, 1]
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent">{person.name}</h3>
                  <p className={`italic ${isDarkTheme ? 'text-[#C1C1C1]' : 'text-gray-600'}`}>{person.title}</p>
                  <p className={`mt-4 text-sm ${isDarkTheme ? 'text-[#D6C4A8]' : 'text-gray-700'}`}>{person.bio}</p>
                  {person.email && person.phone && (
                    <>
                      <p className="mt-2 text-sm text-[#00FFBF]">📧 {person.email}</p>
                      <p className={`text-sm ${isDarkTheme ? 'text-[#C1C1C1]' : 'text-gray-600'}`}>📞 {person.phone}</p>
                    </>
                  )}
                </MotionDiv>
              ))}
            </MotionDiv>
          </>
        )}
      </section>
    </>
  );
}
