import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://rawdistrict.mx'),
  title: 'Raw District | Ropa Personalizada Premium Inspirada en Música Electrónica',
  description: 'Ropa personalizada premium para DJs y amantes del techno y house. Sudaderas, playeras y prendas urbanas exclusivas inspiradas en la cultura underground de Chicago y Detroit.',
  keywords: [
    'ropa personalizada',
    'playeras personalizadas',
    'sudaderas personalizadas',
    'ropa para DJs',
    'prendas para DJs',
    'ropa urbana premium',
    'merch para artistas',
    'ropa inspirada en música electrónica',
    'venta de ropa',
    'pantaloneras',
    'techno',
    'house',
    'underground',
    'streetwear premium'
  ],
  authors: [{ name: 'Raw District' }],
  creator: 'Raw District',
  publisher: 'Raw District',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://rawdistrict.mx',
    siteName: 'Raw District',
    title: 'Raw District | Ropa Personalizada Premium Inspirada en Música Electrónica',
    description: 'Ropa personalizada premium para DJs y amantes del techno y house. Sudaderas, playeras y prendas urbanas exclusivas inspiradas en la cultura underground.',
    images: [
      {
        url: '/rawdistrict_logo_white.svg',
        width: 1200,
        height: 630,
        alt: 'Raw District - Cultura Underground',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raw District | Ropa Personalizada Premium Inspirada en Música Electrónica',
    description: 'Ropa personalizada premium para DJs y amantes del techno y house. Sudaderas, playeras y prendas urbanas exclusivas.',
    images: ['/rawdistrict_logo_white.svg'],
    creator: '@rawdistrict',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://rawdistrict.mx',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://rawdistrict.mx/#organization',
      name: 'Raw District',
      url: 'https://rawdistrict.mx',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rawdistrict.mx/rawdistrict_logo_white.svg',
      },
      description: 'Marca premium de ropa personalizada inspirada en la cultura underground del techno y house. Especializada en prendas exclusivas para DJs y amantes de la música electrónica.',
      sameAs: [
        'https://instagram.com/rawdistrict',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://rawdistrict.mx/#website',
      url: 'https://rawdistrict.mx',
      name: 'Raw District',
      description: 'Ropa personalizada premium para DJs y amantes del techno y house',
      publisher: {
        '@id': 'https://rawdistrict.mx/#organization',
      },
      inLanguage: 'es-MX',
    },
    {
      '@type': 'ClothingStore',
      '@id': 'https://rawdistrict.mx/#store',
      name: 'Raw District',
      url: 'https://rawdistrict.mx',
      logo: 'https://rawdistrict.mx/rawdistrict_logo_white.svg',
      description: 'Tienda de ropa personalizada premium inspirada en la cultura underground. Sudaderas, playeras y prendas urbanas exclusivas para DJs y artistas.',
      priceRange: '$$',
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
