import ProfileBadge from "./components/profile-badge"
import { ProfileProvider } from "./context/profile-context"

/**
 * Mendemonstrasikan cara mengatasi prop drilling menggunakan Context API dan `useContext`.
 *
 * @returns Halaman contoh penggunaan Context.
 */
const ManagedContext = () => {
    return (
        <main>
            <h1>Managed Context (useContext)</h1>
            <ProfileProvider value={{ name: "Anmastery", age: 18 }}>
                <ProfileBadge />
            </ProfileProvider>
        </main>
    )
}

export default ManagedContext
