import { useState } from "react"

const INITIAL_FRIENDS: string[] = ["Alex", "John"]

/**
 * Demonstrates immutable array state updates (`spread`, `filter`, and `map`).
 *
 * Never mutates the existing array in place (`push`/`splice`), ensuring React
 * detects reference changes and triggers predictable re-renders.
 *
 * @returns Friends list manager component.
 */
const UpdatingArrays = () => {
    const [friends, setFriends] = useState<string[]>(INITIAL_FRIENDS)

    const handleAddFriend = () => {
        setFriends((prevFriends) =>
            prevFriends.includes("anmastery") ? prevFriends : [...prevFriends, "anmastery"],
        )
    }

    const handleRemoveFriend = () => {
        setFriends((prevFriends) => prevFriends.filter((friend) => friend !== "John"))
    }

    const handleUpdateFriend = () => {
        setFriends((prevFriends) =>
            prevFriends.map((friend) => (friend === "Alex" ? "Alex Smith" : friend)),
        )
    }

    return (
        <div>
            <ul>
                {friends.map((friend) => (
                    <li key={friend}>{friend}</li>
                ))}
            </ul>

            <button type="button" onClick={handleAddFriend}>
                Add Friend
            </button>
            <button type="button" onClick={handleRemoveFriend}>
                Remove Friend
            </button>
            <button type="button" onClick={handleUpdateFriend}>
                Update Friend
            </button>
        </div>
    )
}

export default UpdatingArrays
