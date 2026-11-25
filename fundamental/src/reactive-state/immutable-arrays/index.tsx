import { useState } from "react"

const INITIAL_FRIENDS: string[] = ["Alex", "John"]

/**
 * Mendemonstrasikan pembaruan state bertipe array secara immutable (`spread`, `filter`, dan `map`).
 *
 * Tidak memodifikasi array secara langsung (`push`/`splice`) agar React selalu mendeteksi
 * perubahan referensi dan menjadwalkan render ulang dengan benar.
 *
 * @returns Komponen pengelola daftar teman.
 */
const ImmutableArrays = () => {
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

export default ImmutableArrays
