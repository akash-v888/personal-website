"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const BottomNavigation = () => {
  const pathname = usePathname();
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex items-center gap-5 bg-[var(--bg-secondary)] backdrop-blur-sm border border-[var(--border-color)] rounded-full px-6 py-3 transition-colors duration-300">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wide rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)]'
                  : 'text-[var(--text-primary)] hover:bg-[var(--border-color)]'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};