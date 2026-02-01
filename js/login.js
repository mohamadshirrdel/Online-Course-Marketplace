document
  .getElementById("loginLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";

    document.getElementById("loginLink").style.backgroundColor = "#f5f5f5";
    document.getElementById("signupLink").style.backgroundColor = "";
  });

document
  .getElementById("signupLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";

    document.getElementById("signupLink").style.backgroundColor = "#f5f5f5";
    document.getElementById("loginLink").style.backgroundColor = "#fff";
  });

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
