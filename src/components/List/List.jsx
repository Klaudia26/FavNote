import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";

const ListWrapper = ({ items }) => (
  <>
    {items.length ? (
      <ul className={styles.wrapper}>
        {items.map((item) => (
          <ListItem key={item.title} {...item} />
        ))}
      </ul>
    ) : (
      <h1 className={styles.noItem}>
        There's nothig here yet, please add some new items.
      </h1>
    )}
  </>
);

export default ListWrapper;
