
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Barqon – Premium Digital Studio',
  description: 'We are a bold startup building modern digital experiences using web technology.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#1B1B1B] text-[#D6C4A8]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
