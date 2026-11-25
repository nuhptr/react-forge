/**
 * Props untuk komponen {@link UserProfileCard} dengan parameter destructuring.
 */
interface UserProfileCardProps {
    avatarUrl?: string
    name?: string
    age?: number
    isMarried?: boolean
    hobbies?: string[]
}

/**
 * Menampilkan data profil pengguna dengan mengekstrak `props` langsung di parameter fungsi.
 *
 * @param props Atribut profil pengguna beserta nilai bawaan (default value).
 * @returns Section profil pengguna.
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
 * Mendemonstrasikan penulisan komponen yang lebih ringkas menggunakan teknik object destructuring pada `props`.
 *
 * @returns Pembungkus contoh yang merender {@link UserProfileCard}.
 */
const HandyDestructuring = () => {
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

export default HandyDestructuring
