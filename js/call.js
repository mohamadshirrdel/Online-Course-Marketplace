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
var map = L.map("map").setView([35.723854274919326, 51.37305615219803], 16);
var marker = L.marker([35.723854274919326, 51.37305615219803]).addTo(map);
var circle = L.circle([35.723854274919326, 51.37305615219803], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 50,
}).addTo(map);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
