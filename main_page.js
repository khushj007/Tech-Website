var navbar = document.querySelector(".navbar");
var nleft = document.querySelector(".nleft");
var nright = document.querySelector(".nright");
document.addEventListener("scroll", function () {
    if (scrollY > 404) {
        navbar.classList.add("white");
        nleft.classList.add("nlmodified");
        nright.classList.add("nrmodified");
    }
    else {
        navbar.classList.remove("white");
        nleft.classList.remove("nlmodified");
        nright.classList.remove("nrmodified");
    }
});
