import React from "react";
import { IUser } from "../../interfaces/IUser";
import styles from "./UserItemInfo.module.css";

interface UserItemInfoType {
  user: IUser;
}

const UserItemInfo: React.FC<UserItemInfoType> = ({ user }) => {
  const company = user.company;
  const address = user.address;
  const geo = address.geo;
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h3 className={styles.blockTitle}>User</h3>

        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.itemTitle}>Username:</span> {user.username}
          </li>

          <li className={styles.item}>
            <span className={styles.itemTitle}>Email: </span>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </li>

          <li className={styles.item}>
            <span className={styles.itemTitle}>Websilte: </span>
            <a href={`http://${user.website}`} target="_blank">
              {user.website}
            </a>
          </li>

          <li className={styles.item}>
            <span className={styles.itemTitle}>Phone: </span>
            <a href={`tell:${user.phone}`}>{user.phone}</a>
          </li>
        </ul>
      </div>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Company</h3>

        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.itemTitle}>Name:</span> {company.name}
          </li>

          <li className={styles.item}>
            <span className={styles.itemTitle}>Bs:</span> {company.bs}
          </li>

          <li className={styles.item}>
            <span className={styles.itemTitle}>CatchPhrase:</span>{" "}
            {company.catchPhrase}
          </li>
        </ul>
      </div>

      <div className={styles.block}>
        <h3 className={styles.blockTitle}>Street</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.itemTitle}>City:</span> {address.city}
          </li>
          <li className={styles.item}>
            <span className={styles.itemTitle}>Street:</span> {address.street}
          </li>
          <li className={styles.item}>
            <span className={styles.itemTitle}>Suite:</span> {address.suite}
          </li>
          <li className={styles.item}>
            <span className={styles.itemTitle}>ZipCode:</span> {address.zipcode}
          </li>
          <li className={styles.item}>
            <span className={styles.itemTitle}>Lat:</span> {geo.lat}
          </li>
          <li className={styles.item}>
            <span className={styles.itemTitle}>Lng:</span> {geo.lng}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserItemInfo;
