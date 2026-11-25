import { AiOutlineHourglass } from "react-icons/ai"

/**
 * Mendemonstrasikan cara merender ikon vektor dari pustaka `react-icons`.
 *
 * @returns Judul yang memuat ikon jam pasir dengan label aksesibilitas.
 */
const Icons = () => {
    return (
        <h1>
            <AiOutlineHourglass aria-label="Hourglass" />
        </h1>
    )
}

export default Icons
