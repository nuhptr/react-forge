import { useId, useState, type ChangeEvent } from "react"

/**
 * Represents editable user profile fields.
 */
interface UserProfile {
    name: string
    age: number
}

/**
 * State challenge 2: controlled form inputs updating a typed `UserProfile` object.
 *
 * Preserves numeric type safety on `age` when handling string values from `<input type="number" />`.
 *
 * @returns Editable user profile form and live preview.
 */
const Profile = () => {
    const nameInputId = useId()
    const ageInputId = useId()
    const [profile, setProfile] = useState<UserProfile>({
        name: "John Doe",
        age: 30,
    })

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProfile((prevProfile) => ({ ...prevProfile, name: event.target.value }))
    }

    const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const parsedAge = Number.parseInt(event.target.value, 10)
        setProfile((prevProfile) => ({
            ...prevProfile,
            age: Number.isNaN(parsedAge) ? 0 : Math.max(0, parsedAge),
        }))
    }

    return (
        <div>
            <h2>User Profile</h2>
            <div>
                <label htmlFor={nameInputId}>Name: </label>
                <input
                    id={nameInputId}
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <label htmlFor={ageInputId}>Age: </label>
                <input
                    id={ageInputId}
                    type="number"
                    name="age"
                    min={0}
                    value={profile.age}
                    onChange={handleAgeChange}
                />
            </div>

            <h3>Profile Information</h3>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
        </div>
    )
}

export default Profile
