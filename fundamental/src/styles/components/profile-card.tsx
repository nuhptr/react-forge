import type { CSSProperties } from "react"

const PROFILE_STYLES: CSSProperties = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "8px",
    color: "black",
}

/**
 * Renders a profile summary card styled with an extracted `CSSProperties` object.
 *
 * @returns Profile card component.
 */
const ProfileCard = () => {
    return (
        <div style={PROFILE_STYLES}>
            <h2>Hello</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
    )
}

export default ProfileCard
