const Button = () => {
   // Handle click
   const handleClick = () => console.log(Math.round(Math.random() * 10))

   return <button onClick={handleClick}>Click</button>
}

const Copy = () => {
   const copyHandler = () => {
      console.log("Stop stealing my content")
   }

   return <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
}

const Move = () => {
   const moveHandler = () => {
      alert("Mouse move event fired!")
      console.log("Mouse move event Fired!")
   }

   return <p onMouseOver={moveHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
}

const Event = () => {
   return (
      <>
         <Button />
         <Copy />
         <Move />
      </>
   )
}

export default Event
