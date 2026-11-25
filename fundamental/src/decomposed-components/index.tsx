import Footer from "./components/footer"
import Header from "./components/header"
import MainContent from "./components/main-content"

/**
 * Menggabungkan komponen tata letak terpisah (`Header`, `MainContent`, dan `Footer`)
 * menjadi satu kerangka halaman utuh.
 *
 * @returns Kerangka halaman hasil komposisi beberapa komponen.
 */
const DecomposedComponents = () => {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

export default DecomposedComponents
