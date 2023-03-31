import React from "react";
import styles from "../../styles.module.css";

function MenuSection({ items }) {
  return (
    <section>
      {items.map((item) => {
        return (
          <article key={item.id}>
            <img src={item.image} alt={item.item} />
            <div className={styles.aboutContainer}>
              <div className={styles.titleAndPriceContainer}>
                <h2>{item.item}</h2>
                <p>${item.price}</p>
              </div>
              <p>{item.about}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default MenuSection;
