import { useState } from "react"

import StateCounter from "./components/state-counter"

/**
 * Mendemonstrasikan dasar penggunaan hook `useState` untuk tipe primitif dan daftar sederhana.
 *
 * @returns Halaman materi `useState` dasar.
 */
const BasicState = () => {
    const [shoppingItems, setShoppingItems] = useState<string[]>(["Mechanical Keyboard", "Monitor"])

    const handleAddDefaultItem = () => {
        setShoppingItems((prevItems) =>
            prevItems.includes("USB-C Hub") ? prevItems : [...prevItems, "USB-C Hub"],
        )
    }

    return (
        <main>
            <h1>Basic State (useState)</h1>
            <StateCounter />

            <section className="card">
                <h2>Daftar Barang</h2>
                <ul>
                    {shoppingItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <div className="controls">
                    <button type="button" onClick={handleAddDefaultItem}>
                        Tambah USB-C Hub
                    </button>
                </div>
            </section>
        </main>
    )
}

export default BasicState
