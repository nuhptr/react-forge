type Greetingprops = {
   timeOfDay: string
}

const Greeting = ({ timeOfDay }: Greetingprops) => {
   return timeOfDay === "morning" ? <div>Good Morning</div> : <div>Good Afternoon</div>
}

export default Greeting
