/**
 * Logs a random integer between `0` and `10` when clicked.
 */
const RandomNumberButton = () => {
    const handleClick = () => {
        console.log(Math.round(Math.random() * 10))
    }

    return (
        <button type="button" onClick={handleClick}>
            Generate Random Number
        </button>
    )
}

/**
 * Logs a warning message whenever the user copies text from the paragraph.
 */
const CopyProtectedText = () => {
    const handleCopy = () => {
        console.log("Stop stealing my content")
    }

    return <p onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
}

/**
 * Logs a message when the pointer enters the paragraph element.
 */
const HoverTrackerText = () => {
    const handleMouseEnter = () => {
        console.log("Mouse enter event fired!")
    }

    return (
        <p onMouseEnter={handleMouseEnter}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    )
}

/**
 * Demonstrates attaching DOM event handlers (`onClick`, `onCopy`, `onMouseEnter`) in JSX.
 *
 * @returns Interactive event handler showcase.
 */
const EventExamples = () => {
    return (
        <>
            <RandomNumberButton />
            <CopyProtectedText />
            <HoverTrackerText />
        </>
    )
}

export default EventExamples
