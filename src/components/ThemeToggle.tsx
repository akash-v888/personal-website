"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full border shadow-md flex items-center justify-center transition-all duration-200 ease-in-out hover:scale-105"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
      }}
    >
      {mounted && (
        <div className="relative w-4 h-4">
          <Sun
            className={`absolute inset-0 w-4 h-4 transition-all duration-300 ease-in-out ${
              isDark
                ? "opacity-0 rotate-90 scale-0"
                : "opacity-100 rotate-0 scale-100"
            }`}
            style={{ color: "var(--text-primary)" }}
          />
          <Moon
            className={`absolute inset-0 w-4 h-4 transition-all duration-300 ease-in-out ${
              isDark
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-0"
            }`}
            style={{ color: "var(--text-primary)" }}
          />
        </div>
      )}
    </button>
  );
};
