import { useUserContext } from "../context/user-context"

/**
 * Komponen pembaca pada challenge Context yang hanya menampilkan profil pengguna aktif.
 *
 * @returns Kartu informasi pengguna saat ini.
 */
const UserProfile = () => {
    const { user } = useUserContext()

    return (
        <div className="card">
            <h2>User Profile</h2>
            <p>Nama aktif: {user.name}</p>
        </div>
    )
}

export default UserProfile
