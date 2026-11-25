/**
 * Shared contract for counter consumer components in the lifting-state example.
 */
export interface SharedCounterProps {
    count: number
    onIncrement: () => void
}

/**
 * First consumer component displaying shared count state lifted to {@link SharingState}.
 *
 * @param props Shared counter value and increment callback.
 * @returns Counter display and trigger button.
 */
const PrimaryCounter = ({ count, onIncrement }: SharedCounterProps) => {
    return (
        <div>
            <p>Primary Counter: {count}</p>
            <button type="button" onClick={onIncrement}>
                Increment from Primary
            </button>
        </div>
    )
}

export default PrimaryCounter
