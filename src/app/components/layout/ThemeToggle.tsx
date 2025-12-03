"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // 1. Inicializamos el tema leyendo localStorage solo una vez
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme") as "light" | "dark" | null;
      if (stored) return stored;
    }
    return "light";
  });

  // 2. Cada vez que cambia el tema, actualizamos el DOM y localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Cambiar tema"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
