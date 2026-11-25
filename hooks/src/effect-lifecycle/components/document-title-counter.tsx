import { useEffect, useState } from "react"

/**
 * Challenge 2 `useEffect`: menyinkronkan `document.title` setiap kali nilai `count` berubah,
 * serta memulihkan judul semula saat komponen di-unmount.
 *
 * @returns Kartu penghitung penyinkron judul dokumen.
 */
const DocumentTitleCounter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const previousTitle = document.title
        document.title = `Count: ${count}`

        return () => {
            document.title = previousTitle
        }
    }, [count])

    return (
        <div className="card">
            <h2>2. Document Title Counter</h2>
            <p>Count saat ini: {count}</p>
            <div className="controls">
                <button type="button" onClick={() => setCount((prev) => prev + 1)}>
                    Increment Title Count
                </button>
            </div>
        </div>
    )
}

export default DocumentTitleCounter
