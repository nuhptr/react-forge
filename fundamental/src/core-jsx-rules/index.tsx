/**
 * Mendemonstrasikan aturan penulisan atribut pada JSX seperti `htmlFor` pada `<label>`
 * serta tag `<input />` yang wajib ditutup (self-closing).
 *
 * @returns Form input nama dengan label terhubung.
 */
const CoreJsxRules = () => {
    return (
        <section>
            <form action="#">
                <label htmlFor="full-name">Name</label>
                <input id="full-name" type="text" placeholder="Enter your name" />
            </form>
        </section>
    )
}

export default CoreJsxRules
