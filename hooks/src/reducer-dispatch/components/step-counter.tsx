import { useId, useReducer, useState } from "react"

import { counterReducer, INITIAL_COUNTER_STATE } from "../reducers/counter-reducer"

/**
 * Komponen solusi challenge `useReducer` yang mendukung penambahan dan pengurangan
 * berdasarkan nilai langkah kustom (`payload`).
 *
 * @returns Kartu penghitung berbasis `useReducer` dengan input langkah kustom.
 */
const StepCounter = () => {
    const stepAmountInputId = useId()
    const [state, dispatch] = useReducer(counterReducer, INITIAL_COUNTER_STATE)
    const [stepAmountText, setStepAmountText] = useState("5")

    const parsedStepAmount = Number.parseInt(stepAmountText, 10)
    const stepAmount = Number.isNaN(parsedStepAmount) ? 0 : parsedStepAmount

    return (
        <div className="card">
            <h2>Count: {state.count}</h2>
            <div className="controls">
                <button type="button" onClick={() => dispatch({ type: "increment" })}>
                    +1
                </button>
                <button type="button" onClick={() => dispatch({ type: "decrement" })}>
                    -1
                </button>
                <button type="button" onClick={() => dispatch({ type: "reset" })}>
                    Reset
                </button>
            </div>

            <div className="controls">
                <label htmlFor={stepAmountInputId}>Nilai langkah:</label>
                <input
                    id={stepAmountInputId}
                    type="number"
                    value={stepAmountText}
                    onChange={(event) => setStepAmountText(event.target.value)}
                />
                <button
                    type="button"
                    onClick={() => dispatch({ type: "incrementByAmount", payload: stepAmount })}>
                    Tambah Sebesar Nilai
                </button>
                <button
                    type="button"
                    onClick={() => dispatch({ type: "decrementByAmount", payload: stepAmount })}>
                    Kurangi Sebesar Nilai
                </button>
            </div>
        </div>
    )
}

export default StepCounter
