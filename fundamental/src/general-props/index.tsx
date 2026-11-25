/**
 * Props untuk komponen kartu profil {@link UserProfileCard}.
 */
interface UserProfileCardProps {
    avatarUrl?: string
    name?: string
    age?: number
    isMarried?: boolean
    hobbies?: string[]
}

/**
 * Menampilkan rincian profil pengguna yang diakses melalui parameter objek `props`.
 *
 * @param props Atribut profil opsional yang dikirim dari komponen induk.
 * @returns Section profil pengguna.
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
 * Mendemonstrasikan pengiriman data bertipe dari komponen induk ke komponen anak melalui `props`.
 *
 * @returns Komponen `UserProfileCard` dengan data contoh.
 */
const GeneralProps = () => {
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

export default GeneralProps
