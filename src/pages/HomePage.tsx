import React from "react";
import UsersList from "../components/users/UsersList";
import PostsList from "../components/posts/PostsList";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.users}>
        <UsersList />
      </div>

      <div className={styles.userContent}>
        <PostsList />
      </div>
    </div>
  );
}

export default HomePage;
