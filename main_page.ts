const navbar: Element = document.querySelector(".navbar")!;
const nleft: Element = document.querySelector(".nleft")!;
const nright: Element = document.querySelector(".nright")!;

document.addEventListener("scroll", (): void => {
  if (scrollY > 404) {
    navbar.classList.add("white");
    nleft.classList.add("nlmodified");
    nright.classList.add("nrmodified");
  } else {
    navbar.classList.remove("white");
    nleft.classList.remove("nlmodified");
    nright.classList.remove("nrmodified");
  }
});
