/**
 * Struktur data pengguna yang ditampilkan pada {@link UserList}.
 */
interface User {
  id: number;
  name: string;
  age: number;
}

const USERS: User[] = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
];

/**
 * Merender daftar pengguna menggunakan `.map()` dengan `user.id` sebagai `key` stabil.
 *
 * @returns Elemen `<ul>` berisi daftar pengguna.
 */
const UserList = () => {
  return (
    <ul>
      {USERS.map((user) => (
        <li key={user.id}>
          <h2>Name: {user.name}</h2>
          <p>Age: {user.age}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
