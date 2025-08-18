"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setMounted(true);
    try {
      const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null;
      const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial: Theme = saved ?? (prefersDark ? "dark" : "light");
      setTheme(initial);
      applyTheme(initial);
    } catch {
      // no-op
    }
  }, []);

  function applyTheme(next: Theme) {
    const root = document.documentElement;
    if (next === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // no-op
    }
    applyTheme(next);
  }

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm text-gray-700 shadow-sm backdrop-blur hover:bg-white dark:border-white/10 dark:bg-gray-900/70 dark:text-gray-100"
    >
      {isDark ? <Moon size={16} /> : <Sun size={16} />}
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}


