import React from "react";
import { userApi } from "../../services/UserService";
import UserItem from "./UserItem";
import styles from "./UsersList.module.css";

const UsersList = () => {
  const { data: users, isLoading, error } = userApi.useFetchAllUsersQuery("");

  return (
    <ul className={styles.list + " scrollbar"}>
      {isLoading && <div>Loading...</div>}
      {error && <div>Something went wrong</div>}
      {users &&
        users.map((user, index) => {
          return <UserItem key={user.id} user={user} index={++index} />;
        })}
    </ul>
  );
};

export default UsersList;
