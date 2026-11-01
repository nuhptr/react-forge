import { useState } from "react"

const UpdatingObject = () => {
   // Set up the starting movie details.
   const data = { title: "Equalizer 3", ratings: 7 }

   // Keep the movie object in state; setMovie updates it and re-renders the component.
   const [movie, setMovie] = useState(data)

   const handleClick = () => {
      // Copy the current movie fields and change only the rating to 5.
      setMovie({ ...movie, ratings: 5 })
   }

   return (
      <div>
         <h1>{movie.title}</h1>
         <p>{movie.ratings}</p>
         {/* Connect the click event to the rating update function. */}
         <button onClick={handleClick}>Change ratings</button>
      </div>
   )
}

// Export the component so other files can import and render it.
export default UpdatingObject
