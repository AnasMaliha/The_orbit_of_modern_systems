$(".owl-carousel-1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
 // rtl:true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
$(".owl-carousel-2").owlCarousel({
  loop: true,
  margin: 10,
 //rtl:true,
  nav: true,
  navText: ['<i class="fa-solid fa-arrow-left mx-1 arrow bg-arrow"></i>', '<i class="fa-solid fa-arrow-right  mx-1 arrow bg-arrow"></i>'],
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
