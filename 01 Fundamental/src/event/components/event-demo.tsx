import { useState } from "react"

const EventDemo = () => {
   const [clickText, setClickText] = useState("")
   const [copyText, setCopyText] = useState("Copy this text")
   const [isHovered, setIsHovered] = useState(false)

   return (
      <div>
         <button onClick={() => setClickText("Button Clicked!")}>Click me</button>
         <p>{clickText}</p>

         <div onCopy={() => setCopyText("Text Copied!")}>
            <p>{copyText}</p>
         </div>

         <div>
            <p
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
               style={{ backgroundColor: isHovered ? "lightyellow" : undefined }}
            >
               Hover over this text
            </p>
         </div>
      </div>
   )
}

export default EventDemo
