import UpdateUserForm from "./components/update-user-form"
import UserProfile from "./components/user-profile"
import { UserProvider } from "./context/user-context"

/**
 * Solusi challenge Context API yang memisahkan provider state (`UserProvider`),
 * pembaca (`UserProfile`), dan penulis (`UpdateUserForm`).
 *
 * @returns Halaman solusi challenge `useContext`.
 */
const ManagedContextChallenge = () => {
    return (
        <main>
            <h1>useContext Challenge</h1>
            <UserProvider>
                <UserProfile />
                <UpdateUserForm />
            </UserProvider>
        </main>
    )
}

export default ManagedContextChallenge
