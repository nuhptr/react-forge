import type { SharedCounterProps } from "./primary-counter"

/**
 * Second consumer component synchronized with the same lifted state in {@link SharingState}.
 *
 * @param props Shared counter value and increment callback.
 * @returns Counter display and trigger button.
 */
const SecondaryCounter = ({ count, onIncrement }: SharedCounterProps) => {
    return (
        <div>
            <p>Secondary Counter: {count}</p>
            <button type="button" onClick={onIncrement}>
                Increment from Secondary
            </button>
        </div>
    )
}

export default SecondaryCounter
