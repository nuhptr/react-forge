import type { ComponentType } from "react";
import MernEcommerceStore from "./mern-ecommerce-store";
import MernMoviesApp from "./mern-movies-app";
import RtkCounter from "./rtk-counter";
import RtkQueryProducts from "./rtk-query-products";

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
    id: "mern-ecommerce-store",
    title: "E-Commerce Store",
    description: "Keranjang belanja dengan createSlice (state + reducer).",
    Component: MernEcommerceStore,
  },
  {
    id: "mern-movies-app",
    title: "Movies App",
    description: "Film favorit dengan toggle slice dan selector.",
    Component: MernMoviesApp,
  },
  {
    id: "rtk-counter",
    title: "RTK Counter",
    description: "Dasar createSlice, PayloadAction, dan dispatch bertipe.",
    Component: RtkCounter,
  },
  {
    id: "rtk-query-products",
    title: "RTK Query Products",
    description: "Query & mutation ke DummyJSON dengan createApi.",
    Component: RtkQueryProducts,
  },
];
