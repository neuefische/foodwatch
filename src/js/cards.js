"use strict";
import { database } from "./database.js";

function addCard(content, position) {
  const title = content.name;
  const picture = content.img;
  const text = content.text;
  const stars = content.stars;
  const price = content.money;
  const category = content.category;
  const route = content.route;
  const menu = content.menu;

  const card = document.createElement("div");
  card.classList = "card";

  const head = document.createElement("div");
  head.classList = "card__card-head";

  const image = document.createElement("img");
  image.classList = "card-head__img";
  image.src = picture;

  const heading = document.createElement("h3");
  heading.classList = "card-head__heading";
  heading.innerText = title;

  const body = document.createElement("div");
  body.classList = "card__card-body";

  const left = document.createElement("div");
  left.classList = "card-body__left";

  const info = document.createElement("p");
  info.classList = "card-body__text";
  info.innerText = text;

  const right = document.createElement("div");
  right.classList = "card-body__right";

  const rating = document.createElement("div");
  rating.innerText = stars;

  const money = document.createElement("div");
  money.innerText = price;

  const labels = document.createElement("div");
  labels.innerText = category;

  const footer = document.createElement("div");
  footer.classList = "card__card-footer";

  const routeA = document.createElement("a");
  routeA.classList = "card__a";
  routeA.href = route;
  const menuA = document.createElement("a");
  menuA.classList = "card__a";
  menuA.href = menu;

  const btnRoute = document.createElement("button");
  btnRoute.classList = "card__btn-route";
  btnRoute.innerText = "Route";
  const btnMenu = document.createElement("button");
  btnMenu.classList = "card__btn-info";
  btnMenu.innerText = "Speisekarte";

  card.appendChild(head);
  head.appendChild(image);
  head.appendChild(heading);
  card.appendChild(body);
  body.appendChild(left);
  left.appendChild(info);
  body.appendChild(right);
  right.appendChild(rating);
  right.appendChild(money);
  right.appendChild(labels);
  card.appendChild(footer);
  footer.appendChild(routeA);
  routeA.appendChild(btnRoute);
  footer.appendChild(menuA);
  menuA.appendChild(btnMenu);
  position.appendChild(card);
}

const position = document.querySelector(".main");
window.addEventListener("load", () => {
  for (let i = 0; i < database.length; i++) {
    addCard(database[i], position);
  }
});
