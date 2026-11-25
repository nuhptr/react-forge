import type { User } from "./user-list";
import UserContainer from "./user-container";

/** Sumber data lokal yang diinjeksi ke container. */
const fetchUsers = async (): Promise<User[]> => [
  { id: 1, name: "Ada Lovelace" },
  { id: 2, name: "Grace Hopper" },
  { id: 3, name: "Alan Turing" },
];

/**
 * Demo container/presentational.
 *
 * @returns Daftar pengguna dari sumber data lokal.
 */
export default function ContainerPresentational() {
  return <UserContainer fetchUsers={fetchUsers} />;
}
