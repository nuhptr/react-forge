import Car from "./components/car"
import Dealer from "./components/dealer"

/**
 * Props destructuring challenge solution pairing `Dealer` and `Car` components.
 *
 * @returns Composed dealer and vehicle summary.
 */
const PropsDestructuringChallenge = () => {
    return (
        <>
            <Dealer dealerName="Nusantara Auto" originCountry="Indonesia" />
            <Car modelName="Toyota Avanza" bodyType="MPV" />
        </>
    )
}

export default PropsDestructuringChallenge
