import { useState } from "react"

const UpdatingArrays = () => {
   // Keep the friends list in state; setFriends schedules a render with the new list.
   const [friends, setFriends] = useState<Array<string>>(["Alex", "John"])

   // Add a friend by copying the current array and appending a new name.
   const addOne = () => setFriends([...friends, "anmastery"])

   // Filter out John, returning a new array that contains every other friend.
   const removeOne = () => setFriends(friends.filter((f) => f !== "John"))

   // Map to a new array, replacing Alex's name while leaving other names unchanged.
   const updateOne = () => setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)))

   // Render the current list and buttons that call the update functions when clicked.
   return (
      <div>
         {/* Create one list item for each friend. Math.random changes keys on every render; stable keys are preferable when list items have persistent identities. */}
         {friends.map((t) => (
            <li key={Math.random()}>{t}</li>
         ))}

         <button onClick={addOne}>Add One</button>
         <button onClick={removeOne}>Remove One</button>
         <button onClick={updateOne}>Update One</button>
      </div>
   )
}

// Make this component available for import in other files.
export default UpdatingArrays
