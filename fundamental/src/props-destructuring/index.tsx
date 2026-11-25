/**
 * Props for the destructured {@link UserProfileCard} component.
 */
interface UserProfileCardProps {
    avatarUrl?: string
    name?: string
    age?: number
    isMarried?: boolean
    hobbies?: string[]
}

/**
 * Displays user profile fields extracted directly via parameter destructuring.
 *
 * @param props Destructured user attributes with sensible defaults.
 * @returns User profile section.
 */
const UserProfileCard = ({
    avatarUrl,
    name = "Guest",
    age = 0,
    isMarried = false,
    hobbies = [],
}: UserProfileCardProps) => {
    return (
        <section>
            {avatarUrl && <img src={avatarUrl} alt={name} width={200} />}
            <h1>Name: {name}</h1>
            <p>Age: {age}</p>
            <p>Is married: {isMarried ? "Yes" : "No"}</p>
            <p>Hobbies: {hobbies.join(", ")}</p>
        </section>
    )
}

/**
 * Demonstrates cleaner component signatures using object destructuring on `props`.
 *
 * @returns Showcase wrapper rendering {@link UserProfileCard}.
 */
const PropsDestructuring = () => {
    return (
        <div>
            <UserProfileCard
                avatarUrl="https://avatars.githubusercontent.com/u/85052811?v=4"
                name="Anmastery"
                age={18}
                isMarried={true}
                hobbies={["Coding", "Reading", "Sleeping"]}
            />
        </div>
    )
}

export default PropsDestructuring
