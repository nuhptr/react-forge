import { useId, useState, type SubmitEvent } from "react"

import { useUserContext } from "../context/user-context"

/**
 * Komponen form pada challenge Context untuk memperbarui nama pengguna di `UserContext`.
 *
 * @returns Kartu form pengubah nama pengguna.
 */
const UpdateUserForm = () => {
    const nameInputId = useId()
    const { updateUserName } = useUserContext()
    const [draftName, setDraftName] = useState("")

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!draftName.trim()) return

        updateUserName(draftName)
        setDraftName("")
    }

    return (
        <div className="card">
            <h2>Update User Name</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor={nameInputId}>Nama baru:</label>
                <input
                    id={nameInputId}
                    type="text"
                    value={draftName}
                    onChange={(event) => setDraftName(event.target.value)}
                    placeholder="Masukkan nama baru"
                />
                <button type="submit">Simpan Nama</button>
            </form>
        </div>
    )
}

export default UpdateUserForm
