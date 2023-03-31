import React from "react";
import { menuData } from "./menuData";

function MenuNav({ setItems }) {
  function all() {
    setItems(menuData);
  }

  function breakFast() {
    setItems(
      menuData.filter((items) => {
        return items.category === "breakfast";
      })
    );
  }

  function lunch() {
    setItems(
      menuData.filter((items) => {
        return items.category === "lunch";
      })
    );
  }

  function shakes() {
    setItems(
      menuData.filter((items) => {
        return items.category === "shake";
      })
    );
  }

  return (
    <nav>
      <div>
        <button onClick={all}>All</button>
        <button onClick={breakFast}>Breakfast</button>
        <button onClick={lunch}>Lunch</button>
        <button onClick={shakes}>Shakes</button>
      </div>
    </nav>
  );
}

export default MenuNav;
