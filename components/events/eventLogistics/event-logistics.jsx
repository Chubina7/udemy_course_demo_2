import React from "react";
import AddressIcon from "../../icons/address-icon";
import DateIcon from "../../icons/date-icon";
import styles from "./event-logistics.module.css";
import LogisticsItem from "../logisticsItem/logistics-item";
import Image from "next/image";

export default function EventLogistics({ date, address, image, imageAlt }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image src={`/${image}`} alt={imageAlt} width={600} height={600} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}
