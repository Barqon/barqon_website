'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1B1B1B] border-t border-[#046C4E] text-center py-4 mt-16 text-[#C1C1C1] text-xs">
      <p>&copy; {new Date().getFullYear()} Barqon. All rights reserved.</p>
      <p className="mt-1">📧 Contact us: <a href="mailto:info@barqon.co.nz" className="text-[#00FFBF] hover:underline">info@barqon.co.nz</a></p>
      <p className="mt-1 text-[#AAAAAA]">You can email us 24/7 — we&apos;ll try to reply as soon as possible!</p>
      <p className="mt-1 text-[#AAAAAA]">Barqon Website v2</p>
    </footer>
  );
}
