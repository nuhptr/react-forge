import { useState } from "react"

const Switcher = () => {
   const [isOn, setIsOn] = useState(false)

   return (
      <div>
         {isOn ? (
            <span className="bg-black text-white p-5 rounded m-2">Dark</span>
         ) : (
            <span className="bg-white text-black p-5 rounded m-2">Light</span>
         )}

         <br />

         <input type="text" className="border-4 rounded" key={isOn ? "dark" : "light"} />
         <button onClick={() => setIsOn((prev) => !prev)}>
            Switch to {isOn ? "Light" : "Dark"}
         </button>
      </div>
   )
}

export default Switcher
