import React, { useState, useEffect } from "react";
import { IPost } from "../../interfaces/IPost";
import CommentsList from "../comments/CommentsList";

import CustomButton from "../ui/CustomButton";
import styles from "./PostItem.module.css";

interface PostItemType {
  post: IPost;
}

const PostItem: React.FC<PostItemType> = ({ post }) => {
  const [isShow, setIsShow] = useState(false);
  const showCommentsHandler = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <li className={styles.container}>
      <div className={styles.block}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.paragraph}>{post.body}</p>
        <CustomButton
          className={`${styles.button} ${isShow && styles.button__show}`}
          click={showCommentsHandler}
        >
          {isShow ? "Close comments" : "View coments"}
        </CustomButton>
        {isShow && <CommentsList postId={post.id} />}
      </div>
    </li>
  );
};

export default PostItem;
