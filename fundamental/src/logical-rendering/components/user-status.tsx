/**
 * Props untuk komponen {@link UserStatus}.
 */
export interface UserStatusProps {
  isLoggedIn: boolean;
  isAdmin: boolean;
}

/**
 * Merender pesan sambutan sesuai status autentikasi dan hak akses admin.
 *
 * @param props Status login dan peran pengguna.
 * @returns Pesan sambutan berdasarkan peran.
 */
const UserStatus = ({ isAdmin, isLoggedIn }: UserStatusProps) => {
  if (!isLoggedIn) return <div>Please sign in to continue.</div>;
  if (isAdmin) return <div>Welcome Admin!</div>;

  return <div>Welcome User!</div>;
};

export default UserStatus;
