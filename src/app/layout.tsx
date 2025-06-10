import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BottomNavigation } from '@/components/BottomNavigation';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akash Viswanathan - Portfolio',
  description: 'CS & Economics student at Northeastern University, focusing on backend engineering, cloud automation, and infrastructure as code.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300`}>
        <ThemeProvider>
          {/* Top-level theme toggle */}
          <div className="px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto pb-24">
            <ThemeToggle />
            {children}
          </div>

          {/* Sticky bottom nav */}
          <BottomNavigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
