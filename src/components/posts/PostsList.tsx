import React from "react";
import { useParams } from "react-router-dom";
import { postApi } from "../../services/PostService";
import PostItem from "./PostItem";
import styles from "./PostsList.module.css";

const PostsList = () => {
  const { userId } = useParams();
  const {
    data: posts,
    isLoading,
    error,
  } = postApi.useFetchPostsByUserIdQuery(userId);

  return (
    <React.Fragment>
      {isLoading && <div>Is loading...</div>}
      {error && <div>Someting went wrong</div>}
      <ul className={styles.list + " scrollbar"}>
        {posts &&
          posts.map((post, index) => {
            return <PostItem key={post.id} post={post} />;
          })}
      </ul>
    </React.Fragment>
  );
};

export default PostsList;
