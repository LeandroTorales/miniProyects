const barsIcon = document.querySelector("#barsIcon");
const xIcon = document.querySelector("#xIcon");
const container = document.querySelector(".container");
const barsContainer = document.querySelector(".bars--container");
const ul = document.querySelector("ul");

const arrOfLi = () => {
  const HTMLCollection = ul.children;
  const makeArr = [...HTMLCollection];
  const newArr = [];
  for (let i = 0; i < makeArr.length; i++) {
    newArr.push(makeArr[i]);
  }
  return newArr;
};

const init = () => {
  barsIcon.addEventListener("click", () => {
    container.classList.add("rotateActive");
    barsContainer.classList.add("rotateActive");
    arrOfLi().forEach((li) => li.classList.add("active"));
  });
  xIcon.addEventListener("click", () => {
    container.classList.remove("rotateActive");
    barsContainer.classList.remove("rotateActive");
    arrOfLi().forEach((li) => li.classList.remove("active"));
  });
};
init();
