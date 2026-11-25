import GreetingMessage from "./components/greeting-message"

/**
 * Demonstrates creating and nesting functional React components.
 *
 * @returns Composed basic greeting view.
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
