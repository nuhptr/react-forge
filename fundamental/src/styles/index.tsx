import Icons from "./icons"
import InlineStyle from "./inline-style"

/**
 * Aggregates inline styling and `react-icons` demonstrations into a single entry point.
 *
 * @returns Styling showcase section.
 */
const StylesShowcase = () => {
    return (
        <section>
            <InlineStyle />
            <Icons />
        </section>
    )
}

export default StylesShowcase
