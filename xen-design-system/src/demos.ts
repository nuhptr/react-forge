import type { ComponentType } from "react";
import M0 from "./foundation";
import M1 from "./react-components";
import M2 from "./storybook";

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
    id: "foundation",
    title: "Foundation",
    description: "Token warna/tipografi.",
    Component: M0,
  },
  {
    id: "react-components",
    title: "React Components",
    description: "Komponen React design system.",
    Component: M1,
  },
  {
    id: "storybook",
    title: "Storybook",
    description: "Dokumentasi komponen.",
    Component: M2,
  },
];
