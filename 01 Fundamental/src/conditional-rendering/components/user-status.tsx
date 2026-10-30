type UserProps = {
   loggedIn: boolean
   isAdmin: boolean
}

const UserStatus = ({ isAdmin, loggedIn }: UserProps) => {
   if (loggedIn && isAdmin) return <div>Welcome Admin!</div>
   else return <div>Welcome user!</div>
}

export default UserStatus
