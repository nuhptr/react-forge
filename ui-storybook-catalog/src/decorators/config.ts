/** Daftar dekorator yang dicontohkan di demo. */
export const decoratorInfo = [
    {
        nama: "Meta decorator",
        cakupan: "Semua story dalam file",
        kode: "decorators: [(Story) => <Panel><Story /></Panel>]",
    },
    {
        nama: "Story decorator",
        cakupan: "Satu story saja",
        kode: "Story.decorators = [(Story) => <Panel><Story /></Panel>]",
    },
]
