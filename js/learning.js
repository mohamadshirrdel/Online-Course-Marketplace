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

// ------ //
const headers = document.querySelectorAll(".tab .header_box");

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
      qustion.style.height = "50px";
      arrowIcon.style.transform = "rotate(0deg)";
      qustion.classList.remove("expanded");
    }
  });
});

// -----//
document
  .getElementById("moror-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".moror").style.display = "flex";
    document.querySelector(".barname-tahsili").style.display = "none";
    document.querySelector(".modares").style.display = "none";
    document.querySelector(".soalat-motedavels").style.display = "none";
  });

document
  .getElementById("barname-tahsili-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".moror").style.display = "none";
    document.querySelector(".barname-tahsili").style.display = "flex";
    document.querySelector(".modares").style.display = "none";
    document.querySelector(".soalat-motedavels").style.display = "none";
  });

document
  .getElementById("modares-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".moror").style.display = "none";
    document.querySelector(".barname-tahsili").style.display = "none";
    document.querySelector(".modares").style.display = "flex";
    document.querySelector(".soalat-motedavels").style.display = "none";
  });

document
  .getElementById("soalat-motedavel-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".moror").style.display = "none";
    document.querySelector(".barname-tahsili").style.display = "none";
    document.querySelector(".modares").style.display = "none";
    document.querySelector(".soalat-motedavels").style.display = "flex";
  });

const headers2 = document.querySelectorAll(".tab-barname header");

headers2.forEach((header2) => {
  header2.addEventListener("click", () => {
    const qustion = header2.parentElement;
    const arrowIcon = header2.querySelector("i");
    const isExpanded = qustion.classList.contains("expanded");

    if (!isExpanded) {
      qustion.style.height = "auto";
      arrowIcon.style.transform = "rotate(180deg)";
      qustion.classList.add("expanded");
      qustion.style.backgroundColor = "#fff";
    } else {
      qustion.style.height = "70px";
      arrowIcon.style.transform = "rotate(0deg)";
      qustion.classList.remove("expanded");
      qustion.style.backgroundColor = "#f5f5f5";
    }
  });
});

const headers3 = document.querySelectorAll(".soalat-motedavel header");

headers3.forEach((header3) => {
  header3.addEventListener("click", () => {
    const qustion = header3.parentElement;
    const arrowIcon = header3.querySelector("i");
    const isExpanded = qustion.classList.contains("expanded");
    var h6hover = qustion.querySelector(".h6_hover");

    if (!isExpanded) {
      qustion.style.height = "auto";
      arrowIcon.style.transform = "rotate(180deg)";
      qustion.classList.add("expanded");
      qustion.style.backgroundColor = "#fff";
      h6hover.style.color = "#219c90";
      qustion.style.border = "1px solid #aaa";
    } else {
      qustion.style.height = "60px";
      arrowIcon.style.transform = "rotate(0deg)";
      qustion.classList.remove("expanded");
      qustion.style.backgroundColor = "#F9FAFC";
      h6hover.style.color = "#000";
      qustion.style.border = "none";
    }
  });
});
