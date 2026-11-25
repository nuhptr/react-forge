import { ThemeCardClassic } from "./classic-context";
import { ThemeCardReactNineteen } from "./react-nineteen";
import { ThemeProvider } from "./theme-provider";

/**
 * Demo tema: membandingkan `useContext` (klasik) dengan React 19 `use()`.
 */
export default function ContextTheme() {
  return (
    <div className="demo-group" aria-label="Perbandingan konsumsi konteks tema">
      <ThemeProvider>
        <ThemeCardClassic />
        <ThemeCardReactNineteen />
      </ThemeProvider>
    </div>
  );
}
