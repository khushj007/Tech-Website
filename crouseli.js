$("#one").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    "<i class='fa-solid fa-arrow-left'> </i> Prev ",
    "Next <i class='fa-solid fa-arrow-right'> </i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$("#two").owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    "<i class='fa-solid fa-arrow-left'> </i> Prev ",
    "Next <i class='fa-solid fa-arrow-right'> </i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
