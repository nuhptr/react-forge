/**
 * Props for the {@link UserStatus} component.
 */
export interface UserStatusProps {
    isLoggedIn: boolean
    isAdmin: boolean
}

/**
 * Renders role-aware welcome text based on authentication and admin flags.
 *
 * @param props Authentication and authorization flags.
 * @returns Role-specific welcome message.
 */
const UserStatus = ({ isAdmin, isLoggedIn }: UserStatusProps) => {
    if (!isLoggedIn) return <div>Please sign in to continue.</div>
    if (isAdmin) return <div>Welcome Admin!</div>

    return <div>Welcome User!</div>
}

export default UserStatus
