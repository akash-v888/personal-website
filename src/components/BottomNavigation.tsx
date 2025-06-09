"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const BottomNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex items-center gap-3 px-4 py-2 bg-[var(--bg-secondary)] backdrop-blur-sm border border-[var(--border-color)] rounded-full relative">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <div key={item.href} className="relative">
              {isActive && (
                <motion.div
                  layoutId="activeBubble"
                  className="absolute inset-0 rounded-full bg-[var(--text-primary)]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              <Link
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wide rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-[var(--bg-primary)]"
                    : "text-[var(--text-primary)] hover:bg-[var(--border-color)]"
                }`}
              >
                {item.label}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
