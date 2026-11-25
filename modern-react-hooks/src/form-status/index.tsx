import { FormButton } from "./form-button"

interface PostData {
    title: string
    email: string
}

/**
 * Aksi pemrosesan data postingan.
 *
 * Single Responsibility: hanya menangani simulasi pengiriman data;
 * presentasi ditanggalkan ke komponen form dan tombol.
 */
const handlePostSubmit = async (formData: FormData): Promise<void> => {
    const post: PostData = {
        title: formData.get("title") as string,
        email: formData.get("email") as string,
    }

    console.log("Post submitted:", post)

    // Simulasi jaringan
    await new Promise((resolve) => setTimeout(resolve, 2000))
}

/**
 * Komponen form dengan `useFormStatus` untuk status pending.
 *
 * Dependency Inversion: aksi form diinjeksi sebagai `action` pada elemen form;
 * tombol hanya merespons status pending dari konteks form.
 */
export default function FormStatus() {
    return (
        <form action={handlePostSubmit} className="form-container" noValidate>
            <div className="field">
                <label htmlFor="status-title">Judul:</label>
                <input id="status-title" name="title" type="text" required />
            </div>

            <div className="field">
                <label htmlFor="status-email">Email:</label>
                <input id="status-email" name="email" type="email" required />
            </div>

            <div className="field">
                <FormButton />
            </div>
        </form>
    )
}
