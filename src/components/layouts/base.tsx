import { Inter } from 'next/font/google';
import Head from 'next/head';
import { FC } from 'react';

import Header from '@/components/organisms/header';
import type { PageProps } from '@/types';

export const metadata = {
  title: {
    template: '%s | Ethereum Japan',
    default: 'Ethereum Japan',
  },
  description: 'Everything Ethereum in Japan',
  keywords: ['Ethereum', 'Japan', 'Blockchain'],
  category: 'technology',
  authors: [{ name: 'Ethereum Japan', url: 'https://github.com/ethereumjp' }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Ethereum Japan',
    description: 'Everything Ethereum in Japan',
    url: 'https://ethereumjapan.org',
    siteName: 'ethereumjapan.org',
    images: [
      {
        url: 'https://ethereumjapan.org/logo/ej.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethereum Japan',
    description: 'Everything Ethereum in Japan',
    siteId: '1511737631948034048',
    creator: '@zsh0x',
    creatorId: '1511737631948034048',
    images: ['https://ethereumjapan.org/ej.png'],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#B8FAF6' },
    { media: '(prefers-color-scheme: dark)', color: '#C9B3F5' },
  ],
  icons: {
    icon: '/logo/ej.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
};

const fontInter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const RootLayout: FC<PageProps> = ({ pageTitle, children }) => {
  const siteTitle = 'Ethereum Japan';

  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle}</title>
      </Head>

      <main className={fontInter.className}>
        <Header />
        {children}
      </main>
    </>
  );
};

export default RootLayout;