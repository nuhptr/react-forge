/**
 * Mendemonstrasikan sintaks dasar JSX menggunakan elemen HTML semantik dan atribut `className`.
 *
 * @returns Markup section semantik yang dirender melalui JSX.
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
