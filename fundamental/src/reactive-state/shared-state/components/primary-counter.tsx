/**
 * Kontrak props bersama untuk komponen anak yang berbagi state hitungan.
 */
export interface SharedCounterProps {
    count: number
    onIncrement: () => void
}

/**
 * Komponen konsumen pertama yang menampilkan dan memperbarui state bersama dari {@link SharedState}.
 *
 * @param props Nilai hitungan saat ini dan callback penambah nilai.
 * @returns Tampilan angka dan tombol tambah pertama.
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
