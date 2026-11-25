/**
 * Demonstrates core JSX syntax using semantic HTML elements and `className`.
 *
 * @returns Semantic section markup rendered via JSX.
 */
const JsxDemo = () => {
    return (
        <section id="welcome-section">
            <h1>My Website</h1>
            <article>
                <h2>Welcome to React</h2>
                <p className="lead-text">Paragraph Content</p>
            </article>
        </section>
    )
}

export default JsxDemo
