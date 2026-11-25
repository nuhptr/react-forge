import BeerIcons from "./components/beer-icons"
import ProfileCard from "./components/profile-card"
import StyledCard from "./components/styled-card"

/**
 * Styling challenge solution combining inline styles, style objects, and `react-icons`.
 *
 * @returns Composed styled cards and icon showcase.
 */
const StylesChallenge = () => {
    return (
        <>
            <StyledCard />
            <ProfileCard />
            <BeerIcons />
        </>
    )
}

export default StylesChallenge
