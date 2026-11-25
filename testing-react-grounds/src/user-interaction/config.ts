/** Tugas awal yang dirender component TodoList. */
export const TODO_AWAL = ["Belajar testing", "Menulis test interaksi"]

/** Label input yang dipakai pengguna dan query test. */
export const LABEL_INPUT = "Tugas baru"

/** Contoh kode interaksi Testing Library. */
export const contohInteraksi = [
    { aksi: "Mengetik", kode: 'userEvent.type(screen.getByLabelText("Tugas baru"), "Tugas baru")' },
    { aksi: "Mengklik", kode: 'userEvent.click(screen.getByRole("button", { name: "Tambah" }))' },
    { aksi: "Memeriksa", kode: 'expect(screen.getByText("Tugas baru")).toBeInTheDocument()' },
]
