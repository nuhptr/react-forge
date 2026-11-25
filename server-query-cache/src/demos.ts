import type { ComponentType } from "react";
import M0 from "./cache-basics";
import M1 from "./query-client";

/** Kontrak satu entri katalog modul. */
export interface Demo {
  id: string;
  title: string;
  description: string;
  Component: ComponentType;
}

/**
 * Katalog modul berurutan abjad (A-Z).
 *
 * Single Responsibility: hanya mendefinisikan daftar modul; tidak merender UI.
 */
export const demos: Demo[] = [
  {
    id: "cache-basics",
    title: "Cache Basics",
    description: "Konsep cache server-state.",
    Component: M0,
  },
  {
    id: "query-client",
    title: "Query Client",
    description: "QueryClientProvider + useQuery.",
    Component: M1,
  },
];
