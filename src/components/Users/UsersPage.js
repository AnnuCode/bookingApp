import { Fragment, useState } from "react";
import UsersList from "./UsersList";
import UsersDetails from "./UsersDetails"
export default function UsersPage () {
  const [user, setUser] = useState(null)
  return (
    <>
    <main className="users-page">
      <UsersList user={user} setUser={setUser}/>
      <UsersDetails user={user}/>
    </main>
    </>
  );
}