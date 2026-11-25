/**
 * Displays a dynamic greeting message and the current day of the month using JS expressions in JSX.
 *
 * @returns Greeting and current date block.
 */
const GreetingContent = () => {
    const greetingMessage = "Hello"
    const currentDate = new Date()

    return (
        <div>
            <h1>{greetingMessage}</h1>
            <p>Date: {currentDate.getDate()}</p>
        </div>
    )
}

export default GreetingContent
