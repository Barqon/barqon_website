'use client';
import { motion } from 'framer-motion';
import { MotionDiv, MotionH1, MotionP, MotionA } from '@/components/Motion';
import Script from 'next/script';

export default function HomePage() {
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

      <Script
        id="local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Barqon",
            "image": "https://barqon.co.nz/Desktop Logo.png",
            "description": "New Zealand's leading affordable web development studio. Available 24/7 across New Zealand.",
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
                "description": "Custom-built UIs that reflect your brand's identity with stunning aesthetics.",
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
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex flex-col justify-center items-center text-center text-[#D6C4A8] px-6 overflow-hidden"
          style={{ backgroundImage: "url('/Hero Background Image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <MotionDiv 
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="relative z-10 max-w-4xl">
            <MotionH1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Welcome to <span className="bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent">Barqon</span>
            </MotionH1>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm md:text-base text-[#C1C1C1] mb-8 leading-relaxed max-w-2xl"
            >
              A premium digital studio for Gen Z brands. We build bold, immersive websites and digital experiences that stand out.
            </MotionP>
            <MotionA
              href="/services"
              initial={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-[#00FFBF] text-black font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#00FFBF]/20"
            >
              View Our Services
            </MotionA>
          </div>
          
          {/* Scroll Indicator */}
          <MotionDiv
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="w-6 h-10 border-2 border-[#00FFBF] rounded-full flex justify-center">
              <MotionDiv
                className="w-1 h-2 bg-[#00FFBF] rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </MotionDiv>
        </section>

        {/* Features Section */}
        <section className="bg-[#121212] px-6 py-24 text-center text-[#C1C1C1] relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FFBF]/5 via-transparent to-transparent opacity-50" />
          <div className="max-w-7xl mx-auto grid gap-16 relative z-10">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent">Barqon</span>?
              </h2>
              <p className="text-sm text-[#C1C1C1] max-w-2xl mx-auto">
                We combine cutting-edge technology with creative excellence to deliver exceptional digital experiences.
              </p>
            </MotionDiv>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "⚙️",
                  title: "Advanced Tech Stack",
                  desc: "Modern tools like Next.js, Tailwind, and Framer Motion power all our experiences.",
                },
                {
                  icon: "🤝",
                  title: "Client-Centric Approach",
                  desc: "Every solution we craft is made with your growth and long-term vision in mind.",
                },
                {
                  icon: "🎨",
                  title: "Tailored Designs",
                  desc: "Custom-built UIs that reflect your brand's identity with stunning aesthetics.",
                },
              ].map((item, index) => (
                <MotionDiv
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 * index,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="bg-[#1B1B1B]/50 backdrop-blur-sm border border-[#046C4E]/30 rounded-2xl p-8 text-left hover:border-[#00FFBF] shadow-lg hover:shadow-[0_0_30px_rgba(0,255,191,0.1)]"
                >
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-[#C1C1C1] leading-relaxed">{item.desc}</p>
                </MotionDiv>
              ))}
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-16">
              {[
                {
                  icon: "🔐",
                  title: "Exclusive Access",
                  desc: "Password-protected areas, forums, private pricing, and member-only features – all included.",
                },
                {
                  icon: "📦",
                  title: "Everything Built In",
                  desc: "CMS, CRM, eCommerce, branded emails, analytics – one lightning-fast system.",
                },
                {
                  icon: "💼",
                  title: "Domains & Emails",
                  desc: "Register domains, configure business email, and launch instantly – all in one place.",
                },
              ].map((item, index) => (
                <MotionDiv
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 * index,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-[#1B1B1B]/50 backdrop-blur-sm border border-[#046C4E]/30 rounded-2xl p-8 text-left hover:border-[#00FFBF] shadow-lg hover:shadow-[0_0_30px_rgba(0,255,191,0.1)]"
                >
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-[#C1C1C1] leading-relaxed">{item.desc}</p>
                </MotionDiv>
              ))}
            </div>
          </div>

          <MotionDiv
            className="pt-16 text-center border-t border-[#2A2A2A] mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[#888] tracking-widest uppercase">
              Crafted with precision in Aotearoa <span className="text-[#888]">(New Zealand)</span> <span className="text-[#00FFBF] font-medium">— Barqon®</span>
            </p>
          </MotionDiv>
        </section>
      </main>
    </>
  );
}
