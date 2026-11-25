import { createContext, useContext, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

/**
 * Penyedia state tema.
 *
 * Single Responsibility: hanya mengelola state tema dan toggle;
 * presentasi ditanggalkan ke komponen konsumen.
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Ambil konteks tema. Melempar jika digunakan di luar ThemeProvider.
 */
export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme harus digunakan di dalam ThemeProvider");
  }
  return ctx;
};
