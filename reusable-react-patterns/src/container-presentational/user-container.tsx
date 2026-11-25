import { useEffect, useState } from "react"

import UserList, { type User } from "./user-list"

interface UserContainerProps {
    fetchUsers: () => Promise<User[]>
}

/**
 * Container component: mengambil data lalu menyerahkannya ke presentational.
 *
 * Dependency Inversion: sumber data diinjeksi lewat prop `fetchUsers`.
 */
const UserContainer = ({ fetchUsers }: UserContainerProps) => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        fetchUsers().then(setUsers)
    }, [fetchUsers])

    return <UserList users={users} />
}

export default UserContainer
