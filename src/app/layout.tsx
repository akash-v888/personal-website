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
  description: 'CS & Economics graduate of Northeastern University (Cum Laude), with experience in software engineering, cloud infrastructure, and AI-driven systems. Actively seeking Software Engineering and DevOps roles.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Akash Viswanathan — Software Engineer',
    description: 'CS & Economics graduate of Northeastern University (Cum Laude). Experience in backend engineering, cloud infrastructure, and AI systems. Open to Software Engineering and DevOps roles.',
    type: 'website',
    images: [
      {
        url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/da2add90-c7f3-4367-9e47-c5d3bb31b60e/generated_images/abstract-geometric-composition-with-clea-e89c4615-20250606202245.jpg',
        width: 1200,
        height: 630,
        alt: 'Akash Viswanathan Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akash Viswanathan — Software Engineer',
    description: 'CS & Economics graduate of Northeastern University (Cum Laude). Experience in backend engineering, cloud infrastructure, and AI systems.',
    images: ['https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/da2add90-c7f3-4367-9e47-c5d3bb31b60e/generated_images/abstract-geometric-composition-with-clea-e89c4615-20250606202245.jpg'],
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
