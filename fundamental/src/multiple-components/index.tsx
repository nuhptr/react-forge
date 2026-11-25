import Footer from "./components/footer"
import Header from "./components/header"
import MainContent from "./components/main-content"

/**
 * Composes independent layout landmarks (`Header`, `MainContent`, and `Footer`)
 * into a complete page shell.
 *
 * @returns Assembled multi-component page layout.
 */
const MultipleComponents = () => {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

export default MultipleComponents
