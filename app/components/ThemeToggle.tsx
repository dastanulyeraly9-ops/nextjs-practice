
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("qfly-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.dataset.theme = savedTheme;
    } else {
      document.documentElement.dataset.theme = "dark";
    }
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("qfly-theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Түстер режимін ауыстыру"
      className="fixed top-5 right-5 z-[100] flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:border-cyan-400 transition"
    >
      {theme === "dark" ? "☀️ Ақ режим" : "🌙 Қара режим"}
    </button>
  );
}