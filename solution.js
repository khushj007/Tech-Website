const al = document.querySelectorAll(".bt")[0];
const dl = document.querySelectorAll(".bt")[1];
const nl = document.querySelectorAll(".bt")[2];
const cv = document.querySelectorAll(".bt")[3];

const alc = document.querySelector(".alc");
const nlc = document.querySelector(".nlc");
const dlc = document.querySelector(".dlc");
const cvc = document.querySelector(".cvc");

al.addEventListener("click", () => {
  al.classList.add("border-top");
  dl.classList.remove("border-top");
  nl.classList.remove("border-top");
  cv.classList.remove("border-top");

  alc.classList.remove("no-display");
  dlc.classList.add("no-display");
  nlc.classList.add("no-display");
  cvc.classList.add("no-display");
});

dl.addEventListener("click", () => {
  al.classList.remove("border-top");
  dl.classList.add("border-top");
  nl.classList.remove("border-top");
  cv.classList.remove("border-top");

  alc.classList.add("no-display");
  dlc.classList.remove("no-display");
  nlc.classList.add("no-display");
  cvc.classList.add("no-display");
});
nl.addEventListener("click", () => {
  al.classList.remove("border-top");
  dl.classList.remove("border-top");
  nl.classList.add("border-top");
  cv.classList.remove("border-top");

  alc.classList.add("no-display");
  dlc.classList.add("no-display");
  nlc.classList.remove("no-display");
  cvc.classList.add("no-display");
});
cv.addEventListener("click", () => {
  al.classList.remove("border-top");
  dl.classList.remove("border-top");
  nl.classList.remove("border-top");
  cv.classList.add("border-top");

  alc.classList.add("no-display");
  dlc.classList.add("no-display");
  nlc.classList.add("no-display");
  cvc.classList.remove("no-display");
});
