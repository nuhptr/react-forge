import type { CSSProperties } from "react"

const HEADING_STYLES: CSSProperties = {
    color: "white",
    backgroundColor: "teal",
    padding: "2rem",
}

/**
 * Mendemonstrasikan pemberian gaya pada elemen JSX menggunakan objek bertipe `CSSProperties`.
 *
 * Properti inline style di React ditulis dengan format camelCase (`backgroundColor`, bukan `background-color`).
 *
 * @returns Section judul dengan inline style.
 */
const InlineStyle = () => {
    return (
        <section>
            <h1 style={HEADING_STYLES}>Inline Style</h1>
        </section>
    )
}

export default InlineStyle
