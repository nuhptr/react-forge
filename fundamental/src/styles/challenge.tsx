import BeerIcons from "./components/beer-icons"
import ProfileCard from "./components/profile-card"
import StyledCard from "./components/styled-card"

/**
 * Solusi challenge Styling yang memadukan objek inline style dan variasi ikon `react-icons`.
 *
 * @returns Gabungan komponen kartu bergaya dan deretan ikon.
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
