/** Props dan query yang dipakai demo Testing Components. */
export const pengguna = { nama: "Ana", online: true }
export const bahasa = ["TypeScript", "React", "Testing Library"]

/** Contoh query Testing Library yang disimulasikan demo. */
export const contohQuery = [
    { query: "screen.getByRole('status')", hasil: "status pengguna" },
    { query: "screen.getByText('Ana')", hasil: "teks nama pengguna" },
    { query: "screen.getAllByRole('listitem')", hasil: "semua item bahasa" },
]
