/**
 * Props untuk komponen daftar belanja {@link ShoppingItemsList}.
 */
interface ShoppingItemsListProps {
    /** Daftar nama barang belanjaan. */
    items: string[]
}

/**
 * Merender daftar terurut barang belanjaan menggunakan `key` yang stabil.
 *
 * Menghindari penggunaan `Math.random()` sebagai `key` agar proses rekonsiliasi DOM React tetap konsisten.
 *
 * @param props Properti komponen.
 * @returns Elemen `<ol>` berisi daftar belanjaan.
 */
const ShoppingItemsList = ({ items }: ShoppingItemsListProps) => {
    return (
        <ol>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ol>
    )
}

const SHOPPING_ITEMS: string[] = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoodie"]

/**
 * Mendemonstrasikan cara merender koleksi array menggunakan `.map()` dan prop `key` unik.
 *
 * @returns Section daftar belanjaan.
 */
const ListOfData = () => {
    return (
        <section>
            <ShoppingItemsList items={SHOPPING_ITEMS} />
        </section>
    )
}

export default ListOfData
