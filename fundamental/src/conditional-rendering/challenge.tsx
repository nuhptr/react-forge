import Greeting from "./components/greeting"
import UserStatus from "./components/user-status"
import Weather from "./components/weather"

/**
 * Solusi challenge Conditional Rendering yang memadukan `Weather`, `UserStatus`, dan `Greeting`.
 *
 * @returns Gabungan contoh tampilan kondisional.
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
