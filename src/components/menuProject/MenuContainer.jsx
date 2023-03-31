import React, { useState } from "react";
import MenuNav from "./MenuNav";
import MenuSection from "./MenuSection";
import { menuData } from "./menuData";
import styles from "../../styles.module.css";

function MenuContainer() {
  const [items, setItems] = useState(menuData);

  return (
    <main>
      <header>
        <h1>Our Menu</h1>
        <div className={styles.underline}></div>
      </header>
      <MenuNav setItems={setItems} />
      <MenuSection items={items} />
    </main>
  );
}

export default MenuContainer;
