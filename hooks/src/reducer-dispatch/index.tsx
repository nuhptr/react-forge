import { useReducer } from "react";

import {
  counterReducer,
  INITIAL_COUNTER_STATE,
} from "./reducers/counter-reducer";

/**
 * Mendemonstrasikan pengelolaan state terstruktur menggunakan `useReducer`
 * dengan aksi dasar `increment`, `decrement`, dan `reset`.
 *
 * @returns Halaman contoh dasar `useReducer`.
 */
const ReducerDispatch = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_COUNTER_STATE);

  return (
    <main>
      <h1>Reducer Dispatch (useReducer)</h1>
      <div className="card">
        <h2>Count: {state.count}</h2>
        <div className="controls">
          <button type="button" onClick={() => dispatch({ type: "increment" })}>
            +
          </button>
          <button type="button" onClick={() => dispatch({ type: "decrement" })}>
            -
          </button>
          <button type="button" onClick={() => dispatch({ type: "reset" })}>
            Reset
          </button>
        </div>
      </div>
    </main>
  );
};

export default ReducerDispatch;
