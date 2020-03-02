"use strict";
import { filter } from "./filter.js";
import { addCard, removeAllCards } from "./cards.js";
import { database } from "./database.js";

const position = document.querySelector(".card-container");
const filterButton = document.querySelectorAll(".btn-container__button");

window.addEventListener("load", () => {
  addCard(database, position);
});

filterButton.forEach(addFilterEventListener => {
  addFilterEventListener.addEventListener("click", filterBtn => {
    const parameter = addFilterEventListener.innerText;
    removeAllCards(position);
    addCard(filter(database, parameter), position);
  });
});
