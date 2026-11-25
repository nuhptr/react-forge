/**
 * Demonstrates essential JSX attribute rules such as `htmlFor` on `<label>`
 * and self-closing `<input />` tags.
 *
 * @returns Labeled name input form.
 */
const JsxRules = () => {
    return (
        <section>
            <form action="#">
                <label htmlFor="full-name">Name</label>
                <input id="full-name" type="text" placeholder="Enter your name" />
            </form>
        </section>
    )
}

export default JsxRules
