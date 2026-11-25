import type { CSSProperties } from "react"

const HEADING_STYLES: CSSProperties = {
    color: "white",
    backgroundColor: "teal",
    padding: "2rem",
}

/**
 * Demonstrates styling JSX elements with typed `CSSProperties` objects.
 *
 * @returns Inline-styled heading section.
 */
const InlineStyle = () => {
    return (
        <section>
            <h1 style={HEADING_STYLES}>Inline Style</h1>
        </section>
    )
}

export default InlineStyle
