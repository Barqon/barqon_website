'use client';

import * as React from 'react';
import Image from 'next/image';
import { MotionDiv } from '@/components/Motion';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function WhoWeAre() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const teamMembers = [
    {
      name: "Fathima Babu",
      title: "Founder & Chief Executive Officer",
      bio: "Visionary behind Barqon, steering innovation with elegance and ambition.",
      email: "fathima@barqon.co.nz",
      phone: "‭+64 22 387 5455‬"
    },
    {
      name: "Babu Abdul Khader",
      title: "Chief Financial Officer",
      bio: "Financial backbone and growth architect, aligning strategy with dreams.",
      email: "babu@barqon.co.nz",
      phone: "+64 22 067 7126‬"
    },
    {
      name: "Mohammad Madhih Babu",
      title: "Chief Operating Officer",
      bio: "Leading operations with a sharp tech edge and a futuristic mindset.",
      email: "madhih@barqon.co.nz",
      phone: "‭+64 22 077 6527‬"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Who We Are | Barqon",
    "description": "Meet the team behind Barqon, New Zealand's leading web development studio. Discover our mission to transform digital landscapes with innovative solutions.",
    "url": "https://barqon.co.nz/who-we-are",
    "mainEntity": {
      "@type": "Organization",
      "name": "Barqon",
      "description": "A next-gen digital studio proudly born in New Zealand, redefining premium online presence for every Kiwi with a vision.",
      "url": "https://barqon.co.nz",
      "logo": "https://barqon.co.nz/logo.png",
      "sameAs": [
        "https://barqon.co.nz",
        "mailto:info@barqon.co.nz"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NZ"
      },
      "employee": teamMembers.map(member => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.title,
        "description": member.bio,
        "email": member.email,
        "telephone": member.phone
      }))
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="min-h-screen bg-[#1B1B1B] px-6 py-16 text-[#D6C4A8] font-sans overflow-hidden">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold tracking-wide mb-4">Who We <span className="bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent">Are</span></h1>
          <p className="max-w-3xl mx-auto text-lg text-[#EED9B6]">
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
              alt="Barqon Team - New Zealand's Leading Web Development Studio"
              width={1200}
              height={600}
              className="rounded-xl w-full object-cover border border-[#046C4E] shadow-lg hover:shadow-[0_0_20px_#00FFBF] transition-all duration-300 group-hover:scale-110"
              priority
            />
          </MotionDiv>
        </div>

        <MotionDiv
          className="text-center max-w-4xl mx-auto mb-20 bg-[#2A2A2A]/30 backdrop-blur-sm p-8 rounded-xl border border-[#046C4E]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#EED9B6]">Our Mission</h2>
          <p className="text-xl text-[#EED9B6]">
            Our mission? Transform New Zealand's digital landscape. Whether you're a startup or an enterprise, we offer elite design and development — from affordable custom sites to luxury web builds — tailored to your goals.
          </p>
          <p className="mt-4 text-lg text-[#C1C1C1]">
            We blend creative power, tech innovation, and a deep understanding of Kiwi culture to deliver unforgettable online experiences.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto mb-20">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[3/2] rounded-xl border border-[#00FFBF] overflow-hidden hover:shadow-[0_0_20px_#00FFBF] transition-all duration-300 group"
          >
            <Image
              src="/Premium office with modern furniture, dark theme, emerald lights, digital hub vibe, futuristic environment_1.jpg"
              alt="Barqon's Modern Office Space - Innovation Hub"
              fill
              className="rounded-xl transition-transform duration-300 group-hover:scale-110 object-cover"
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
            <Image
              src="/Technology Flow Graphic_1.jpg"
              alt="Barqon's Technology Infrastructure"
              fill
              className="rounded-xl transition-transform duration-300 group-hover:scale-110 object-cover"
              priority
            />
          </MotionDiv>
        </div>

        {mounted && (
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
                className="bg-[#2A2A2A]/30 backdrop-blur-sm border border-[#046C4E] rounded-xl p-6 text-left hover:border-[#00FFBF] shadow-md hover:shadow-[0_0_20px_#00FFBF] transition-all duration-300"
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
                <p className="italic text-[#C1C1C1]">{person.title}</p>
                <p className="mt-4 text-sm text-[#D6C4A8]">{person.bio}</p>
                <p className="mt-2 text-sm text-[#00FFBF]">📧 {person.email}</p>
                <p className="text-sm text-[#C1C1C1]">📞 {person.phone}</p>
              </MotionDiv>
            ))}
          </MotionDiv>
        )}
      </section>
    </>
  );
}
