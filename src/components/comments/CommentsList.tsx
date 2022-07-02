import React from "react";
import { commentApi } from "../../services/CommentService";
import CommentsItem from "./CommentsItem";
import styles from "./CommentsList.module.css";

interface CommentsListType {
  postId: number;
}

const CommentsList: React.FC<CommentsListType> = ({ postId }) => {
  const {
    data: comments,
    isLoading,
    error,
  } = commentApi.useFetchCommentsByPostIdQuery(postId);

  return (
    <React.Fragment>
      {isLoading && <div>Is loading...</div>}
      {error && <div>Someting went wrong</div>}
      <ul className={styles.container + " scrollbar"}>
        {comments &&
          comments.map((comment) => {
            return <CommentsItem key={comment.id} comment={comment} />;
          })}
      </ul>
    </React.Fragment>
  );
};

export default CommentsList;
