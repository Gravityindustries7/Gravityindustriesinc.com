import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['600', '700'], variable: '--font-poppins', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gravity Industries Inc. | Professional Consultation Services',
  description: 'Expert consultation for construction, freight, medical equipment, and electronic devices. Book your appointment today.',
  keywords: 'consultation, construction, freight, medical equipment, electronics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}