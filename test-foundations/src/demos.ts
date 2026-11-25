import type { ComponentType } from "react";
import M0 from "./boundary-testing";
import M1 from "./matchers";
import M2 from "./parameterized-testing";
import M3 from "./positive-negative-testing";
import M4 from "./tdd";

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
    id: "boundary-testing",
    title: "Boundary Testing",
    description: "Uji nilai batas.",
    Component: M0,
  },
  {
    id: "matchers",
    title: "Matchers",
    description: "Jest/Vitest matchers.",
    Component: M1,
  },
  {
    id: "parameterized-testing",
    title: "Parameterized Testing",
    description: "it.each untuk banyak kasus.",
    Component: M2,
  },
  {
    id: "positive-negative-testing",
    title: "Positive & Negative",
    description: "Kasus valid dan invalid.",
    Component: M3,
  },
  {
    id: "tdd",
    title: "TDD",
    description: "Red-green-refactor.",
    Component: M4,
  },
];
