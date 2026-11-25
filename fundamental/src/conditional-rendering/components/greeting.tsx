/**
 * Supported time-of-day periods for {@link Greeting}.
 */
export type TimeOfDay = "morning" | "afternoon" | "evening"

/**
 * Props for the {@link Greeting} component.
 */
export interface GreetingProps {
    timeOfDay: TimeOfDay
}

/**
 * Renders a contextual greeting based on the `timeOfDay` prop.
 *
 * @param props Time-of-day configuration.
 * @returns Greeting message matching the given period.
 */
const Greeting = ({ timeOfDay }: GreetingProps) => {
    if (timeOfDay === "morning") return <div>Good Morning!</div>
    if (timeOfDay === "afternoon") return <div>Good Afternoon!</div>
    return <div>Good Evening!</div>
}

export default Greeting
