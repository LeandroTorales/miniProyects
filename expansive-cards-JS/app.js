import { dataImages } from "./dataImages.js";
const body = document.querySelector("body");

const templateCards = (card) => {
  const { img, text } = card;
  return `
    <div class="div--backgroundImage" style="background-image: url(${img})">
      <h2 class="textImage">${text}</h2>
    </div>
  `;
};

const generateCardsMap = () => {
  body.innerHTML = dataImages.map((elem) => templateCards(elem)).join("");
};

const handleAnimation = (e) => {
  const divsBackground = document.querySelectorAll(".div--backgroundImage");

  const removeClassFromOtherElements = () => {
    divsBackground.forEach((elem) => elem.classList.remove("active"));
  };

  if (!e.target.classList.contains("div--backgroundImage")) return removeClassFromOtherElements();

  divsBackground.forEach((elem) =>
    elem.addEventListener("click", () => {
      removeClassFromOtherElements();
      elem.classList.add("active");
    })
  );
};

const init = () => {
  window.addEventListener("DOMContentLoaded", generateCardsMap);
  body.addEventListener("click", handleAnimation);
};

init();
