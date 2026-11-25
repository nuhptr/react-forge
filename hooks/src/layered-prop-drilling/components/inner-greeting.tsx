/**
 * Props untuk komponen terdalam {@link InnerGreeting}.
 */
export interface InnerGreetingProps {
    userName: string
}

/**
 * Komponen daun (leaf) yang benar-benar membutuhkan nilai `userName`.
 *
 * @param props Nama pengguna yang diteruskan dari komponen terluar.
 * @returns Kartu sapaan pengguna.
 */
const InnerGreeting = ({ userName }: InnerGreetingProps) => {
    return (
        <div className="card">
            <h2>Inner Greeting (Leaf Component)</h2>
            <p>Halo, {userName}! Data ini dikirim melewati beberapa lapis komponen.</p>
        </div>
    )
}

export default InnerGreeting
