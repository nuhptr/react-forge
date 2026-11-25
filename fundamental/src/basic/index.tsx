import GreetingMessage from "./components/greeting-message"

/**
 * Mendemonstrasikan pembuatan dan penyusunan (nesting) functional component di React.
 *
 * @returns Tampilan sapaan gabungan.
 */
const BasicComponent = () => {
    return (
        <section>
            <h1>Hello, React!</h1>
            <GreetingMessage />
        </section>
    )
}

export default BasicComponent
