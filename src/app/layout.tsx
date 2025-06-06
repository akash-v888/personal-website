import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BottomNavigation } from '@/components/BottomNavigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akash Viswanathan - Portfolio",
  description: "CS & Economics student at Northeastern University, focusing on backend engineering, cloud automation, and infrastructure as code.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeToggle />
          {children}
          <BottomNavigation />
        </ThemeProvider>
      </body>
    </html>
  )
}