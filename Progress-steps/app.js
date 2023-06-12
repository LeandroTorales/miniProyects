const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const lineSteps = document.querySelector(".lineSteps");
const steps = document.querySelectorAll(".step");

let counterSteps = 1;

const updateButtons = () => {
  if (counterSteps <= 1) prev.setAttribute("disabled", "true");
  if (counterSteps > 1) {
    prev.removeAttribute("disabled");
    next.removeAttribute("disabled");
  }
  if (counterSteps === steps.length) next.setAttribute("disabled", "true");
};

const prevStep = () => {
  if (counterSteps <= 1) return;
  counterSteps--;
  return update();
};

const nextStep = () => {
  if (counterSteps === steps.length) return;
  counterSteps++;
  return update();
};

const updateCircles = () => {
  steps.forEach((step, index) => {
    if (index < counterSteps) return step.classList.add("active");
    return step.classList.remove("active");
  });
};

const updateLineSteps = () => {
  const actives = document.querySelectorAll(".active");
  return (lineSteps.style.width = ((actives.length - 1) / (steps.length - 1)) * 100 + "%");
};

const update = () => {
  updateCircles();
  updateLineSteps();
  updateButtons();
};

const init = () => {
  window.addEventListener("DOMContentLoaded", update);
  prev.addEventListener("click", prevStep);
  next.addEventListener("click", nextStep);
};

init();
