import { useActionState } from "react"

/**
 * Aksi increment untuk useActionState.
 *
 * Single Responsibility: hanya menerima state sebelumnya dan FormData,
 * lalu mengembalikan state baru. Tidak berinteraksi dengan DOM langsung.
 */
const increment = async (previousState: number, formData: FormData): Promise<number> => {
    const name = formData.get("name")
    console.log("Nama yang dimasukkan:", name)

    // Simulasi pemrosesan asinkron
    await new Promise((resolve) => setTimeout(resolve, 300))

    return previousState + 1
}

/**
 * Komponen counter menggunakan `useActionState`.
 *
 * Dependency Inversion: fungsi increment diinjeksi ke useActionState;
 * komponen hanya menampilkan state dan memicu aksi melalui form.
 */
export default function ReactActionState() {
    const [count, formAction, isPending] = useActionState(increment, 0)

    return (
        <form className="form-container" noValidate>
            <h3>Counter (useActionState)</h3>
            <p className="count-display">{count}</p>

            <button
                type="submit"
                formAction={formAction}
                disabled={isPending}
                className="action-button">
                {isPending ? "Memproses..." : "Tambah"}
            </button>

            <div className="field">
                <label htmlFor="action-state-name">Nama:</label>
                <input id="action-state-name" name="name" type="text" placeholder="Masukkan nama" />
            </div>

            {isPending && <p className="status">Aksi sedang diproses...</p>}
        </form>
    )
}
