import { FaBeer } from "react-icons/fa"

/**
 * Demonstrates customizing `react-icons` size and color props.
 *
 * @returns Row of styled beer icons.
 */
const BeerIcons = () => {
    return (
        <div aria-label="Beer icon variations">
            <FaBeer aria-hidden="true" />
            <FaBeer size={30} aria-hidden="true" />
            <FaBeer size={30} color="gold" aria-hidden="true" />
        </div>
    )
}

export default BeerIcons
