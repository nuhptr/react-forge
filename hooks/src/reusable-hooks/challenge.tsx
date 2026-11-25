import PostsFeed from "./components/posts-feed"
import RegistrationForm from "./components/registration-form"
import TogglePanel from "./components/toggle-panel"

/**
 * Menggabungkan ketiga latihan Custom Hooks (`TogglePanel`, `RegistrationForm`, dan `PostsFeed`).
 *
 * @returns Halaman solusi challenge Custom Hooks.
 */
const ReusableHooksChallenge = () => {
    return (
        <main>
            <h1>Reusable Hooks Challenges</h1>
            <TogglePanel />
            <RegistrationForm />
            <PostsFeed />
        </main>
    )
}

export default ReusableHooksChallenge
