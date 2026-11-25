import type { ComponentType } from "react";

import CompoundComponent from "./compound-component";
import ContainerPresentational from "./container-presentational";
import ControlledVsUncontrolled from "./controlled-vs-uncontrolled";
import Hoc from "./hoc";
import RenderProps from "./render-props";

/** Kontrak satu entri katalog modul. */
export interface Demo {
  id: string;
  title: string;
  description: string;
  Component: ComponentType;
}

/**
 * Katalog modul berurutan abjad (A-Z) sesuai urutan kurikulum.
 *
 * Single Responsibility: hanya mendefinisikan daftar modul; tidak merender UI.
 */
export const demos: Demo[] = [
  {
    id: "compound-component",
    title: "Compound Component",
    description: "Tabs dengan Context API.",
    Component: CompoundComponent,
  },
  {
    id: "container-presentational",
    title: "Container / Presentational",
    description: "Pemisahan data dan tampilan.",
    Component: ContainerPresentational,
  },
  {
    id: "controlled-vs-uncontrolled",
    title: "Controlled vs Uncontrolled",
    description: "useState vs useRef pada input.",
    Component: ControlledVsUncontrolled,
  },
  {
    id: "hoc",
    title: "HOC",
    description: "Higher-Order Component withLoading.",
    Component: Hoc,
  },
  {
    id: "render-props",
    title: "Render Props",
    description: "Fungsi render sebagai prop.",
    Component: RenderProps,
  },
];
