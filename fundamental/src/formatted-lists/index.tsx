/**
 * Props untuk komponen daftar belanja {@link ShoppingItemsList}.
 */
interface ShoppingItemsListProps {
    /** Daftar nama barang belanjaan. */
    items: string[]
}

/**
 * Merender daftar terurut barang belanjaan menggunakan kelas utilitas Tailwind CSS
 * dan `key` yang stabil.
 *
 * Menghindari penggunaan `Math.random()` sebagai `key` agar proses rekonsiliasi DOM React tetap konsisten.
 *
 * @param props Properti komponen.
 * @returns Elemen `<ol>` berisi daftar belanjaan bergaya kartu.
 */
const ShoppingItemsList = ({ items }: ShoppingItemsListProps) => {
    return (
        <ol role="list" className="w-full max-w-125 list-none font-sans">
            {items.map((item) => (
                <li
                    key={item}
                    className="m-2.5 bg-[#f7ffff] p-8 font-bold shadow-sm transition-transform duration-300 ease-out hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100">
                    {item}
                </li>
            ))}
        </ol>
    )
}

const SHOPPING_ITEMS: string[] = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodie"]

/**
 * Mendemonstrasikan cara merender koleksi array menggunakan `.map()` dan prop `key` unik
 * dengan tata letak Tailwind CSS.
 *
 * @returns Section daftar belanjaan.
 */
const FormattedLists = () => {
    return (
        <section className="flex min-h-screen items-center justify-center bg-[#e3ffff] p-4">
            <ShoppingItemsList items={SHOPPING_ITEMS} />
        </section>
    )
}

export default FormattedLists
