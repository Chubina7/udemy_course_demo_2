import React from "react";
import EventItem from "../event-item/EventItem";
import styles from "./EventList.module.css";

export default function EventList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((each) => {
        return (
          <EventItem
            key={each.id}
            id={each.id}
            title={each.title}
            location={each.location}
            date={each.date}
            image={each.image}
          />
        );
      })}
    </ul>
  );
}
