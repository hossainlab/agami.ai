import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Hind_Siliguri } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bengali',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'agami.ai | Empowering Next-Gen AI Innovators in Bangladesh',
  description:
    'National AI educational initiative empowering school and college students across Bangladesh with foundational AI & ML skills, adapting Experience AI curriculum from Raspberry Pi Foundation & Google DeepMind.',
  keywords: [
    'AI education Bangladesh',
    'Experience AI',
    'Google DeepMind',
    'Raspberry Pi Foundation',
    'agami.ai',
    'DeepBio',
    'Machine Learning school students Bangladesh',
    'Youth AI Literacy',
  ],
  authors: [{ name: 'agami.ai Team', url: 'https://agami.ai' }],
  creator: 'agami.ai',
  publisher: 'agami.ai',
  openGraph: {
    title: 'agami.ai | Empowering Next-Gen AI Innovators in Bangladesh',
    description:
      'Equipping Bangladeshi students and educators with foundational AI & Machine Learning skills through hands-on workshops, mentorship, and open resources.',
    url: 'https://agami.ai',
    siteName: 'agami.ai',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'agami.ai | Empowering Next-Gen AI Innovators in Bangladesh',
    description:
      'Equipping Bangladeshi students and educators with foundational AI & Machine Learning skills through hands-on workshops, mentorship, and open resources.',
  },
  icons: {
    icon: '/logos/pi-foundation.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${hindSiliguri.variable}`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
