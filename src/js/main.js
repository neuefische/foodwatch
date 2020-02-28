"use strict";
import { filter } from "./filter.js";
import { addCard, removeAllCards } from "./cards.js";
import { database } from "./database.js";

const position = document.querySelector(".card-container");
const filterButton = document.querySelector(".btn-container__button");

window.addEventListener("load", () => {
  for (let i = 0; i < database.length; i++) {
    addCard(database[i], position);
  }
});

filterButton.addEventListener("click", filterBtn => {
  const parameter = String(filterBtn.innerText);
  removeAllCards(position);
  addCard(filter(database, parameter), position);
});
