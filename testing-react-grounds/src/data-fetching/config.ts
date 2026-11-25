/** Jeda tiruan sebelum data todos tersedia (ms). */
export const JEDA = 400

/** Data todos yang dikembalikan handler tiruan. */
export const DAFTAR_TODO = [
    { id: 1, title: "Belajar React Testing", completed: true },
    { id: 2, title: "Menulis test data fetching", completed: false },
    { id: 3, title: "Mocking request dengan MSW", completed: false },
]

/** Contoh potongan test async untuk data fetching. */
export const contohTest = [
    'expect(screen.getByText("Memuat todos...")).toBeInTheDocument()',
    'expect(await screen.findByText("Belajar React Testing")).toBeInTheDocument()',
    'expect(screen.queryByText("Memuat todos...")).not.toBeInTheDocument()',
]

/** Contoh handler MSW untuk endpoint todos. */
export const handlerMsw = 'http.get("/todos", () => HttpResponse.json(todos))'
