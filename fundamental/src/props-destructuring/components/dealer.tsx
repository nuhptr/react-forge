/**
 * Props for the {@link Dealer} component.
 */
export interface DealerProps {
    dealerName?: string
    originCountry?: string
}

/**
 * Renders dealership metadata using destructured props with fallback defaults.
 *
 * @param props Optional dealership name and country of origin.
 * @returns Dealer details block.
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
