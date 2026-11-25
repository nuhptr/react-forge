/**
 * Props for the {@link UserProfileCard} component.
 */
interface UserProfileCardProps {
    avatarUrl?: string
    name?: string
    age?: number
    isMarried?: boolean
    hobbies?: string[]
}

/**
 * Displays user profile details accessed through the `props` object parameter.
 *
 * @param props Optional user attributes passed from the parent component.
 * @returns User profile section.
 */
const UserProfileCard = (props: UserProfileCardProps) => {
    return (
        <section>
            {props.avatarUrl && (
                <img src={props.avatarUrl} alt={props.name ?? "User avatar"} width={200} />
            )}
            <h1>Name: {props.name ?? "Guest"}</h1>
            <p>Age: {props.age ?? "-"}</p>
            <p>Is married: {props.isMarried ? "Yes" : "No"}</p>
            <p>Hobbies: {props.hobbies?.join(", ") ?? "None"}</p>
        </section>
    )
}

/**
 * Demonstrates passing typed data from parent to child components via `props`.
 *
 * @returns `UserProfileCard` populated with sample props.
 */
const PropsDemo = () => {
    return (
        <UserProfileCard
            avatarUrl="https://avatars.githubusercontent.com/u/85052811?v=4"
            name="Anmastery"
            age={18}
            isMarried={false}
            hobbies={["coding", "reading books", "sleeping"]}
        />
    )
}

export default PropsDemo
