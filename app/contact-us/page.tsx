'use client';

import { MotionDiv } from '@/components/Motion';
import { useState } from 'react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section className="min-h-screen w-full bg-gradient-to-tr from-[#1B1B1B] via-[#046C4E]/40 to-[#00FFBF]/20 px-2 py-12 md:py-20 flex items-center justify-center">
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto text-center relative rounded-3xl shadow-2xl border border-[#00FFBF]/30 backdrop-blur-xl p-4 md:p-12 bg-gradient-to-br from-[#232323]/90 via-[#232323]/80 to-[#046C4E]/10 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-[#00FFBF]/10 via-[#EED9B6]/10 to-[#046C4E]/10 animate-pulse opacity-70" />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent drop-shadow-lg tracking-tight">Contact Us</h1>
        <p className="text-lg md:text-xl text-[#EED9B6] mb-10 font-medium">Let's build something great together. Reach out to us for collaborations, partnerships, or inquiries.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-0 gap-x-8 mb-12 text-center">
          <div className="relative group flex-1 w-full rounded-2xl p-8 bg-white/10 backdrop-blur-md shadow-xl overflow-hidden flex flex-col items-center border-2 border-transparent before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-[#EED9B6] before:via-[#00FFBF] before:to-[#046C4E] before:opacity-0 group-hover:before:opacity-60 before:transition-opacity before:duration-500 min-w-0">
            <div className="relative z-10 w-full flex flex-col items-center text-center">
              <h3 className="text-base font-bold mb-1 bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent tracking-wide uppercase">Email</h3>
              <p className="text-[#00FFBF] font-mono text-lg md:text-xl font-semibold select-all whitespace-nowrap text-center">info@barqon.co.nz</p>
              <p className="text-xs text-[#EED9B6] mt-2 text-center">We reply as soon as possible</p>
            </div>
          </div>
          <div className="relative group flex-1 w-full rounded-2xl p-8 bg-white/10 backdrop-blur-md shadow-xl overflow-hidden flex flex-col items-center border-2 border-transparent before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-[#EED9B6] before:via-[#00FFBF] before:to-[#046C4E] before:opacity-0 group-hover:before:opacity-60 before:transition-opacity before:duration-500 min-w-0">
            <div className="relative z-10 w-full flex flex-col items-center text-center">
              <h3 className="text-base font-bold mb-1 bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent tracking-wide uppercase">Phone</h3>
              <p className="text-[#00FFBF] font-mono text-lg md:text-xl font-semibold select-all whitespace-nowrap text-center">+64 22 387 5455</p>
              <p className="text-xs text-[#EED9B6] mt-2 text-center">Available 6 AM – 10 PM</p>
            </div>
          </div>
          <div className="relative group flex-1 w-full rounded-2xl p-8 bg-white/10 backdrop-blur-md shadow-xl overflow-hidden flex flex-col items-center border-2 border-transparent before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-[#EED9B6] before:via-[#00FFBF] before:to-[#046C4E] before:opacity-0 group-hover:before:opacity-60 before:transition-opacity before:duration-500 min-w-0">
            <div className="relative z-10 w-full flex flex-col items-center text-center">
              <h3 className="text-base font-bold mb-1 bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent tracking-wide uppercase">Location</h3>
              <p className="text-[#00FFBF] font-mono text-lg md:text-xl font-semibold text-center">Auckland, New Zealand</p>
              <p className="text-xs text-[#EED9B6] mt-2 text-center">Open to global projects</p>
            </div>
          </div>
        </div>
        {submitted ? (
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-gradient-to-br from-[#232323]/90 via-[#046C4E]/10 to-[#00FFBF]/10 text-[#EED9B6] rounded-2xl border border-[#046C4E] shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] bg-clip-text text-transparent">Thank you!</h2>
            <p>We've received your message and will get back to you within 24 hours.</p>
          </MotionDiv>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              const name = formData.get("name")?.toString().trim();
              const email = formData.get("email")?.toString().trim();
              const phone = formData.get("phone")?.toString().trim();

              if (!name || (!email && !phone)) {
                alert("Please provide your name and either an email or a phone number.");
                return;
              }

              setLoading(true);

              try {
                const response = await fetch("https://formspree.io/f/xqabzdye", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                  },
                  body: formData,
                });

                if (response.ok) {
                  setSubmitted(true);
                  form.reset();
                  setTimeout(() => {
                    alert("Your message has been submitted and we will contact you as soon as possible. You can expect a response within 24 hours.");
                  }, 200);
                } else {
                  alert("Something went wrong. Please try again later.");
                }
              } catch (error) {
                console.error("Form submission error:", error);
                alert("Submission failed. Please check your internet or try again.");
              } finally {
                setLoading(false);
              }
            }}
            className="flex flex-col gap-6 mt-2"
            autoComplete="off"
          >
            <input name="name" type="text" placeholder="Name" required className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-[#00FFBF]/30 focus:border-[#00FFBF] text-[#EED9B6] placeholder-[#AAAAAA] outline-none transition-all duration-200 shadow-inner focus:shadow-[0_0_16px_#00FFBF] text-base md:text-lg" />
            <input name="email" type="email" placeholder="Email" className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-[#00FFBF]/30 focus:border-[#00FFBF] text-[#EED9B6] placeholder-[#AAAAAA] outline-none transition-all duration-200 shadow-inner focus:shadow-[0_0_16px_#00FFBF] text-base md:text-lg" />
            <input name="phone" type="tel" placeholder="Phone Number" className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-[#00FFBF]/30 focus:border-[#00FFBF] text-[#EED9B6] placeholder-[#AAAAAA] outline-none transition-all duration-200 shadow-inner focus:shadow-[0_0_16px_#00FFBF] text-base md:text-lg" />
            <textarea name="message" placeholder="Message (Optional)" rows={5} className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-[#00FFBF]/30 focus:border-[#00FFBF] text-[#EED9B6] placeholder-[#AAAAAA] outline-none transition-all duration-200 shadow-inner focus:shadow-[0_0_16px_#00FFBF] text-base md:text-lg"></textarea>
            <button
              type="submit"
              disabled={loading}
              className={`bg-gradient-to-r from-[#EED9B6] to-[#00FFBF] text-[#1B1B1B] font-bold py-4 rounded-xl shadow-lg hover:from-[#00FFBF] hover:to-[#EED9B6] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#00FFBF] focus:ring-offset-2 active:scale-95 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </MotionDiv>
    </section>
  );
}
