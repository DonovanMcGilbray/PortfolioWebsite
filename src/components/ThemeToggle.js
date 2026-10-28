import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeToggle.css";

/**
 * ThemeToggle
 * -----------
 * A small button that switches between light and dark mode.
 *
 * How it works:
 *  1. The theme is stored as a `data-theme` attribute on the <html> element.
 *     CSS in index.css reads that attribute to pick the color palette.
 *  2. The chosen theme is saved in localStorage so it persists across visits.
 *  3. On first load, we fall back to the visitor's OS preference.
 */

function getInitialTheme() {
  // Use the saved choice if the visitor has picked one before.
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    return saved;
  }
  // Otherwise respect the operating system's dark-mode setting.
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Whenever `theme` changes, apply it to <html> and remember the choice.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
