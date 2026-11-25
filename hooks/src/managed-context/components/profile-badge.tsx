import { useProfileContext } from "../context/profile-context"

/**
 * Komponen konsumen yang langsung membaca `name` dan `age` dari {@link useProfileContext}
 * tanpa memerlukan pengiriman props berantai.
 *
 * @returns Kartu ringkasan profil dari Context.
 */
const ProfileBadge = () => {
    const { name, age } = useProfileContext()

    return (
        <div className="card">
            <h2>Profile Consumer (useContext)</h2>
            <p>Nama: {name}</p>
            <p>Usia: {age} tahun</p>
        </div>
    )
}

export default ProfileBadge
