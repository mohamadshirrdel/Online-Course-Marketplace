// swipper //

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const headers = document.querySelectorAll(".qustion header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const qustion = header.parentElement;
    const arrowIcon = header.querySelector("i");
    const isExpanded = qustion.classList.contains("expanded");

    if (!isExpanded) {
      qustion.style.height = "auto";
      arrowIcon.style.transform = "rotate(180deg)";
      qustion.classList.add("expanded");
    } else {
      qustion.style.height = "70px";
      arrowIcon.style.transform = "rotate(0deg)";
      qustion.classList.remove("expanded");
    }
  });
});
