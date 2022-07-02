import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IUser } from "../../interfaces/IUser";
import { ReactComponent as ArrowBottomIcon } from "../../icons/arrowBottom.svg";
import CustomButton from "../ui/CustomButton";
import styles from "./UserItem.module.css";
import UserItemInfo from "./UserItemInfo";

interface UserItemType {
  user: IUser;
  index: number;
}

const UserItem: React.FC<UserItemType> = ({ user, index }) => {
  const [isActive, setIsActive] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    if (userId === `${user.id}`) setIsActive(true);
    return () => {
      setIsActive(false);
    };
  }, [userId]);

  const showHandler = () => setIsShowMore((prev) => !prev);

  return (
    <li className={`${styles.item} ${isActive ? styles.item__active : ""}`}>
      <div className={styles.itemContent}>
        <span className={styles.textName}>
          {index}. {user.name}
        </span>

        <CustomButton className={styles.button} click={showHandler}>
          <span>More</span>
          <ArrowBottomIcon
            className={isShowMore ? styles.arrowBottomIcon : ""}
          />
        </CustomButton>

        <Link
          to={`/home/${user.id}`}
          className={`${styles.link} ${isShowMore ? styles.link__show : ""}`}
        >
          <span className={styles.linkText}>View</span>
        </Link>
      </div>
      {isShowMore && <UserItemInfo user={user} />}
    </li>
  );
};

export default UserItem;
