import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"

import { decrement, increment, incrementByAmount, reset } from "./counter-slice"
import { counterStore, type CounterRootState } from "./store"

const useCounterSelector: TypedUseSelectorHook<CounterRootState> = useSelector

/**
 * Demo counter dengan Redux Toolkit.
 *
 * Interface Segregation: komponen hanya memakai hook bertipe dan action
 * yang dibutuhkannya.
 *
 * @returns Tampilan penghitung dengan tombol tambah, kurang, dan reset.
 */
export default function RtkCounter() {
    const value = useCounterSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <section className="panel" aria-labelledby="rtk-counter-title">
            <h3 id="rtk-counter-title" className="text-lg font-semibold text-blue-400">
                Counter (createSlice)
            </h3>
            <p className="text-3xl font-bold tabular-nums" aria-live="polite">
                {value}
            </p>
            <div className="flex flex-wrap gap-2">
                <button type="button" className="btn" onClick={() => dispatch(increment())}>
                    Tambah
                </button>
                <button type="button" className="btn" onClick={() => dispatch(decrement())}>
                    Kurang
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => dispatch(incrementByAmount(5))}>
                    +5
                </button>
                <button type="button" className="btn" onClick={() => dispatch(reset())}>
                    Reset
                </button>
            </div>
            <p className="text-sm text-slate-400">
                Store: {counterStore.getState().counter.value === value ? "tersinkron" : "berbeda"}
            </p>
        </section>
    )
}
