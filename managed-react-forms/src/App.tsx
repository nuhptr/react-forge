import type { SubmitHandler } from "react-hook-form"

import RegistrationForm from "./registration-form"
import type { RegistrationFormData } from "./registration-form/validation"

/**
 * Komponen utama (playground) untuk workspace Managed Forms.
 *
 * Ganti komponen yang dirender di bawah ini (misalnya `./registration-form`
 * atau `./simple-form`) untuk mencoba materi tertentu.
 *
 * Daftar modul berurutan abjad (A–Z) sesuai urutan pembelajaran:
 * - `./registration-form` — Registration Form (banyak field)
 * - `./simple-form` — Simple Form (dasar React Hook Form)
 *
 * @returns Komponen topik yang sedang aktif ditampilkan.
 */
const App = () => {
    const handleSubmit: SubmitHandler<RegistrationFormData> = (data) => {
        console.log("RegistrationForm submitted:", data)
    }

    return <RegistrationForm onSubmit={handleSubmit} />
}

export default App
