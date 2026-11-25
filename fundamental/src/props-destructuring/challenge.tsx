import Car from "./components/car"
import Dealer from "./components/dealer"

/**
 * Solusi challenge Props Destructuring yang memadukan komponen `Dealer` dan `Car`.
 *
 * @returns Ringkasan informasi dealer beserta unit kendaraan.
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
