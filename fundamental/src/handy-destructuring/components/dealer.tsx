/**
 * Props untuk komponen {@link Dealer}.
 */
export interface DealerProps {
    dealerName?: string
    originCountry?: string
}

/**
 * Merender informasi dealer menggunakan destructuring `props` beserta nilai default.
 *
 * @param props Nama dealer dan negara asal opsional.
 * @returns Blok rincian dealer.
 */
const Dealer = ({ dealerName = "Default", originCountry = "Indonesia" }: DealerProps) => {
    return (
        <div>
            <h2>Dealer Name: {dealerName}</h2>
            <p>Origin: {originCountry}</p>
        </div>
    )
}

export default Dealer
