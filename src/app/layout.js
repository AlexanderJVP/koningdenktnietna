import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: 'Liv — Kinderboeken',
  description: 'Ontdek de magische kinderboeken van Liv. Bestel "Abra kaka dabra" en "Hocus pocus op het veld" rechtstreeks bij de auteur.',
  openGraph: {
    locale: 'nl_BE',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body suppressHydrationWarning>
        <ScrollToTop />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
