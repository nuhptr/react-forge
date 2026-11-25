import GreetingContent from "./components/greeting-content"
import ProductInfo from "./components/product-info"

/**
 * Dynamic content challenge solution combining `GreetingContent` and `ProductInfo`.
 *
 * @returns Composed dynamic content challenge view.
 */
const DynamicContentChallenge = () => {
    return (
        <>
            <GreetingContent />
            <ProductInfo />
        </>
    )
}

export default DynamicContentChallenge
