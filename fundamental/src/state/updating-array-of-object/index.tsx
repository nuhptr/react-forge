import { useState } from "react"

const UpdatingArrayOfObject = () => {
   const data = [
      { id: 1, title: "Spider man", ratings: 3 },
      { id: 2, title: "Superman", ratings: 6 },
   ]

   // Store the movies in state; setMovies updates the list and re-renders the component.
   const [movies, setMovies] = useState(data)

   const handleClick = () => {
      // Use the latest state, return a new array, and copy only the matching movie object.
      setMovies((currentMovies) =>
         currentMovies.map((movie) => (movie.id === 1 ? { ...movie, title: "John Wick" } : movie)),
      )
   }

   return (
      <div>
         <ul style={{ listStyle: "none" }}>
            {movies.map((movie) => (
               // Use the stable movie id as the key so React can track list items.
               <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>

         <button onClick={handleClick}>Change Name</button>
      </div>
   )
}

// Export the component so it can be imported and rendered elsewhere.
export default UpdatingArrayOfObject
