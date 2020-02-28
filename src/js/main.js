"use strict";
import { filter } from "./filter.js";
import { addCard } from "./cards.js";
import { database } from "./database.js";

const position = document.querySelector(".main");
window.addEventListener("load", () => {
  for (let i = 0; i < database.length; i++) {
    addCard(database[i], position);
  }
});
