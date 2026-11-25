import type { ComponentType } from "react";
import M0 from "./button";
import M1 from "./card";
import M2 from "./input";

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
    id: "button",
    title: "Button",
    description: "Komponen button library.",
    Component: M0,
  },
  {
    id: "card",
    title: "Card",
    description: "Komponen card library.",
    Component: M1,
  },
  {
    id: "input",
    title: "Input",
    description: "Komponen input library.",
    Component: M2,
  },
];
