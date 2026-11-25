import type { SharedCounterProps } from "./primary-counter"

/**
 * Komponen konsumen kedua yang tersinkronisasi dengan sumber state yang sama pada {@link SharingState}.
 *
 * @param props Nilai hitungan saat ini dan callback penambah nilai.
 * @returns Tampilan angka dan tombol tambah kedua.
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
