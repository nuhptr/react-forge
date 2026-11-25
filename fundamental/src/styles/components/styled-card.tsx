import type { CSSProperties } from "react"

const CARD_STYLES: CSSProperties = {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "10px",
    color: "darkblue",
}

const TITLE_STYLES: CSSProperties = {
    fontSize: "2rem",
    marginBottom: "2rem",
}

/**
 * Renders a decorative card styled via inline `CSSProperties` constants.
 *
 * @returns Styled card component.
 */
const StyledCard = () => {
    return (
        <div style={CARD_STYLES}>
            <h2 style={TITLE_STYLES}>Styled Card</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
}

export default StyledCard
