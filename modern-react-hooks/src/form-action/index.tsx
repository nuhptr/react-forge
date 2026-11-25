interface UserFormData {
    name: string
    email: string
    password: string
}

/**
 * Ekstrak dan validasi entri FormData menjadi objek bertipe.
 *
 * Single Responsibility: hanya menangani transformasi dan validasi FormData;
 * presentasi ditanggalkan ke komponen form.
 */
const parseUserFormData = (formData: FormData): UserFormData => {
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
        throw new Error("Data form tidak lengkap")
    }

    return { name, email, password }
}

/**
 * Aksi pemrosesan form (React Action).
 *
 * Dependency Inversion: logika pengolahan data dipisahkan dari UI;
 * fungsi ini dapat digunakan ulang oleh form lain tanpa modifikasi.
 */
const handleUserSubmit = async (formData: FormData): Promise<void> => {
    const userData = parseUserFormData(formData)
    console.log("User submitted:", userData)

    await new Promise((resolve) => setTimeout(resolve, 500))
}

/**
 * Komponen form dengan React Action.
 *
 * Interface Segregation: komponen hanya menangani rendering input dan delegasi
 * aksi ke handler yang diberikan.
 */
export default function FormAction() {
    return (
        <form action={handleUserSubmit} className="form-container" noValidate>
            <div className="field">
                <label htmlFor="action-name">Nama:</label>
                <input id="action-name" name="name" type="text" required />
            </div>

            <div className="field">
                <label htmlFor="action-email">Email:</label>
                <input id="action-email" name="email" type="email" required />
            </div>

            <div className="field">
                <label htmlFor="action-password">Password:</label>
                <input id="action-password" name="password" type="password" required />
            </div>

            <button type="submit" className="action-button">
                Submit
            </button>
        </form>
    )
}
