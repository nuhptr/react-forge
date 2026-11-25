/**
 * Struktur state penghitung untuk `useReducer`.
 */
export interface CounterState {
  count: number;
}

/**
 * Discriminated union seluruh aksi yang dapat diproses oleh {@link counterReducer}.
 */
export type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "incrementByAmount"; payload: number }
  | { type: "decrementByAmount"; payload: number };

export const INITIAL_COUNTER_STATE: CounterState = {
  count: 0,
};

/**
 * Fungsi reducer murni (pure function) untuk menghitung transisi state penghitung.
 *
 * Memenuhi Single Responsibility Principle (SRP): seluruh aturan transisi angka
 * terpusat di luar komponen UI sehingga mudah diuji secara independen.
 *
 * @param state State penghitung saat ini.
 * @param action Aksi perubahan yang dikirim melalui `dispatch`.
 * @returns State penghitung baru hasil transisi.
 */
export const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return INITIAL_COUNTER_STATE;
    case "incrementByAmount":
      return { count: state.count + action.payload };
    case "decrementByAmount":
      return { count: state.count - action.payload };
  }
};
