import Greeting from "./components/greeting"
import UserStatus from "./components/user-status"
import Weather from "./components/weather"

/**
 * Conditional rendering challenge solution combining `Weather`, `UserStatus`, and `Greeting`.
 *
 * @returns Composed conditional UI examples.
 */
const ConditionalRenderingChallenge = () => {
    return (
        <>
            <Weather temperature={26} />
            <UserStatus isLoggedIn isAdmin={false} />
            <Greeting timeOfDay="morning" />
        </>
    )
}

export default ConditionalRenderingChallenge
