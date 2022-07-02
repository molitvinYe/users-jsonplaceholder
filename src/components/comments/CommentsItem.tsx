import React from "react";
import { IComment } from "../../interfaces/IComment";
import styles from "./CommentsItem.module.css";

interface CommentsItem {
  comment: IComment;
}

const CommentsItem: React.FC<CommentsItem> = ({ comment }) => {
  return (
    <li className={styles.container}>
      <h3 className={styles.name}>{comment.name}</h3>
      <span className={styles.email}>{comment.email}</span>
      <p className={styles.body}>{comment.body}</p>
    </li>
  );
};

export default CommentsItem;
