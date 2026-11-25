import type { ComponentType } from "react";
import BasicAnimations from "./basic-animations";
import Gestures from "./gestures";
import Keyframes from "./keyframes";
import PracticeGestures from "./practice-gestures";
import PracticeKeyframes from "./practice-keyframes";
import PracticeStaggerAnimation from "./practice-stagger-animation";
import PracticeTransitions from "./practice-transitions";
import PracticeTransformations from "./practice-transformations";
import PracticeUseMotionValue from "./practice-use-motion-value";
import PracticeUseSpring from "./practice-use-spring";
import PracticeWhileInView from "./practice-while-in-view";
import ProjectAdvanceAnimationNavigation from "./project-advance-animation-navigation";
import ProjectCarousel from "./project-carousel";
import ProjectDraggableCards from "./project-draggable-cards";
import ProjectHorizontalScroll from "./project-horizontal-scroll";
import ProjectLoader from "./project-loader";
import ProjectProgressSteps from "./project-progress-steps";
import ProjectScrollAnimation from "./project-scroll-animation";
import ProjectScrollIndicator from "./project-scroll-indicator";
import ProjectStickyNavbar from "./project-sticky-navbar";
import StaggerAnimation from "./stagger-animation";
import Transitions from "./transitions";
import Transformations from "./transformations";
import UseMotionValue from "./use-motion-value";
import UseScroll from "./use-scroll";
import UseSpring from "./use-spring";
import UseTransform from "./use-transform";
import WhileInView from "./while-in-view";

/** Kontrak satu entri katalog topik. */
export interface Demo {
  id: string;
  title: string;
  description: string;
  Component: ComponentType;
}

/**
 * Katalog topik berurutan abjad (A-Z) sesuai kurikulum.
 *
 * Single Responsibility: hanya mendefinisikan daftar topik.
 */
export const demos: Demo[] = [
  {
    id: "basic-animations",
    title: "Animasi Dasar",
    description: "Pengantar motion, animate, dan initial.",
    Component: BasicAnimations,
  },
  {
    id: "gestures",
    title: "Gestures",
    description: "whileHover, whileTap, dan drag.",
    Component: Gestures,
  },
  {
    id: "keyframes",
    title: "Keyframes",
    description: "Animasi keyframes yang berulang.",
    Component: Keyframes,
  },
  {
    id: "practice-gestures",
    title: "Latihan Gestures",
    description: "Kartu geser, tarik, putar, dan ubah warna.",
    Component: PracticeGestures,
  },
  {
    id: "practice-keyframes",
    title: "Latihan Keyframes",
    description: "Bola memantul, tombol berdenyut, dan lain-lain.",
    Component: PracticeKeyframes,
  },
  {
    id: "practice-stagger-animation",
    title: "Latihan Stagger Animation",
    description: "Daftar dan galeri yang muncul bertahap.",
    Component: PracticeStaggerAnimation,
  },
  {
    id: "practice-transitions",
    title: "Latihan Transitions",
    description: "Fade, sidebar, modal, dan toast.",
    Component: PracticeTransitions,
  },
  {
    id: "practice-transformations",
    title: "Latihan Transformations",
    description: "Box, lingkaran, ikon, dan persegi.",
    Component: PracticeTransformations,
  },
  {
    id: "practice-use-motion-value",
    title: "Latihan useMotionValue",
    description: "Slider dan skala yang terhubung.",
    Component: PracticeUseMotionValue,
  },
  {
    id: "practice-use-spring",
    title: "Latihan useSpring",
    description: "Slider spring dan rotasi dinamis.",
    Component: PracticeUseSpring,
  },
  {
    id: "practice-while-in-view",
    title: "Latihan whileInView",
    description: "Daftar stagger dan kartu balik saat terlihat.",
    Component: PracticeWhileInView,
  },
  {
    id: "project-advance-animation-navigation",
    title: "Proyek Navigasi Animasi Lanjut",
    description: "Sidebar dengan animasi navigasi.",
    Component: ProjectAdvanceAnimationNavigation,
  },
  {
    id: "project-carousel",
    title: "Proyek Carousel",
    description: "Carousel gambar dengan transisi halus.",
    Component: ProjectCarousel,
  },
  {
    id: "project-draggable-cards",
    title: "Proyek Kartu Dapat Diseret",
    description: "Kartu interaktif dengan gesture seret.",
    Component: ProjectDraggableCards,
  },
  {
    id: "project-horizontal-scroll",
    title: "Proyek Scroll Horizontal",
    description: "Carousel dengan scroll horizontal.",
    Component: ProjectHorizontalScroll,
  },
  {
    id: "project-loader",
    title: "Proyek Loader",
    description: "Animasi pemuatan dengan Framer Motion.",
    Component: ProjectLoader,
  },
  {
    id: "project-progress-steps",
    title: "Proyek Langkah Progres",
    description: "Indikator progres langkah-langkah.",
    Component: ProjectProgressSteps,
  },
  {
    id: "project-scroll-animation",
    title: "Proyek Animasi Scroll",
    description: "Elemen muncul saat digulir.",
    Component: ProjectScrollAnimation,
  },
  {
    id: "project-scroll-indicator",
    title: "Proyek Indikator Scroll",
    description: "Bar progres scroll halaman.",
    Component: ProjectScrollIndicator,
  },
  {
    id: "project-sticky-navbar",
    title: "Proyek Navbar Melekat",
    description: "Navbar yang menempel saat digulir.",
    Component: ProjectStickyNavbar,
  },
  {
    id: "stagger-animation",
    title: "Stagger Animation",
    description: "Daftar dan galeri dengan animasi bertahap.",
    Component: StaggerAnimation,
  },
  {
    id: "transitions",
    title: "Transitions",
    description: "Transisi antara elemen dengan varian.",
    Component: Transitions,
  },
  {
    id: "transformations",
    title: "Transformations",
    description: "Skala, rotasi, dan geser elemen.",
    Component: Transformations,
  },
  {
    id: "use-motion-value",
    title: "useMotionValue",
    description: "Nilai gerak yang dapat dikendalikan secara manual.",
    Component: UseMotionValue,
  },
  {
    id: "use-scroll",
    title: "useScroll",
    description: "Progres scroll dan transformasi berdasarkan scroll.",
    Component: UseScroll,
  },
  {
    id: "use-spring",
    title: "useSpring",
    description: "Animasi dengan fisika spring.",
    Component: UseSpring,
  },
  {
    id: "use-transform",
    title: "useTransform",
    description: "Transformasi nilai gerak ke properti lain.",
    Component: UseTransform,
  },
  {
    id: "while-in-view",
    title: "whileInView",
    description: "Animasi saat elemen masuk ke viewport.",
    Component: WhileInView,
  },
];
