import Greeting from "./components/greeting"
import UserStatus from "./components/user-status"
import Weather from "./components/wheater"

const ConditionalChallenge = () => {
   return (
      <>
         <Weather />
         <UserStatus loggedIn isAdmin={false} />
         <Greeting timeOfDay="morning" />
      </>
   )
}

export default ConditionalChallenge
