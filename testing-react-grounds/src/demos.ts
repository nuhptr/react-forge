import type { ComponentType } from "react";
import M0 from "./get-by-role";
import M1 from "./query-functions";
import M2 from "./setup-testing";

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
    id: "get-by-role",
    title: "Get By Role",
    description: "Query berdasarkan aksesibilitas.",
    Component: M0,
  },
  {
    id: "query-functions",
    title: "Query Functions",
    description: "getBy/queryBy/findBy.",
    Component: M1,
  },
  {
    id: "setup-testing",
    title: "Setup Testing",
    description: "Konfigurasi test environment.",
    Component: M2,
  },
];
