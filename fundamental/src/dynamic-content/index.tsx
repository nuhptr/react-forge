/**
 * Demonstrates embedding JavaScript expressions, variables, arrays, function calls,
 * and dynamic class names inside JSX curly braces `{}`.
 *
 * @returns Dynamic JSX showcase section.
 */
const DynamicContent = () => {
    const userName = "Anmastery"
    const friendNames = ["Alex", "John", "Waheed", "Jordan"]
    const multiplyNumbers = (first: number, second: number): number => first * second
    const highlightedClassName = "simple-class"

    return (
        <section>
            {/* Arithmetic expression */}
            <p>2 + 2 = {2 + 2}</p>

            {/* String variable */}
            <h1>{userName}</h1>

            {/* Formatted array expression */}
            <p>My friend list: {friendNames.join(", ")}</p>

            {/* Function invocation */}
            <p>2 * 2 = {multiplyNumbers(2, 2)}</p>

            {/* Dynamic attribute binding */}
            <p className={highlightedClassName}>This paragraph uses a dynamic class name</p>
        </section>
    )
}

export default DynamicContent
