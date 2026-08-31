import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Motriz Engenharia Elétrica',
  description:
    'Projetos, instalações, manutenção elétrica, energia solar e automação para os segmentos residencial, predial, industrial e naval.',
  openGraph: {
    title: 'Motriz Engenharia Elétrica',
    description: 'Energia que move grandes projetos.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Motriz Engenharia Elétrica',
    description: 'Energia que move grandes projetos.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
