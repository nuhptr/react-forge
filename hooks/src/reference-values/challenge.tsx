import FocusInput from "./components/focus-input";
import IntervalTimer from "./components/interval-timer";

/**
 * Menggabungkan kedua latihan `useRef` (`FocusInput` dan `IntervalTimer`).
 *
 * @returns Halaman solusi challenge `useRef`.
 */
const ReferenceValuesChallenge = () => {
  return (
    <main>
      <h1>useRef Challenges</h1>
      <FocusInput />
      <IntervalTimer />
    </main>
  );
};

export default ReferenceValuesChallenge;
