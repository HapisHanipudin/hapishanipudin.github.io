// Scrolled Navbar
const navbar = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

// Modal Images
// Ambil semua elemen dengan kelas "img"
var imgElements = document.querySelectorAll(".img");

// Ambil elemen modal
var modal = document.querySelector(".modal");

// Ambil elemen modalImg dan modalTxt
var modalImg = modal.querySelector(".modalImg");
var modalTxt = modal.querySelector(".modalTxt");

// Tambahkan event listener ke setiap elemen dengan kelas "img"
imgElements.forEach(function (imgElement) {
  imgElement.addEventListener("click", function () {
    // Ambil src dan alt dari gambar yang diklik
    var imgSrc = imgElement.querySelector("img").getAttribute("src");
    var imgAlt = imgElement.querySelector("img").getAttribute("alt");

    // Set src dan innerHtml sesuai dengan nilai yang diambil
    modalImg.setAttribute("src", imgSrc);
    modalTxt.innerHTML = imgAlt;

    // Tampilkan modal
    modal.classList.add("appear");
  });
});

// Tambahkan event listener ke elemen close untuk menutup modal
var closeElement = modal.querySelector(".close");
closeElement.addEventListener("click", function () {
  // Sembunyikan modal
  modal.classList.remove("appear");
});

// const images = document.querySelectorAll(".images .img img");
// const modal = document.querySelector(".modal");
// const modalImg = document.querySelector(".modalImg");
// const modalTxt = document.querySelector(".modalTxt");
// const close = document.querySelector(".close");

// images.forEach((image) => {
//   image.addEventListener("click", () => {
//     modalImg.src = image.src;
//     modalTxt.innerHTML = image.alt;
//     modal.classList.add("appear");

//     close.addEventListener("click", () => {
//       modal.classList.remove("appear");
//     });
//   });
// });

// One Page Scroll
document.addEventListener("DOMContentLoaded", function () {
  let currentSectionIndex = 0;
  const sections = document.querySelectorAll(".section");

  function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: "smooth" });
  }

  window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      scrollToSection(currentSectionIndex);
    } else if (event.deltaY < 0 && currentSectionIndex > 0) {
      currentSectionIndex--;
      scrollToSection(currentSectionIndex);
    }
  });
});

// Navbar Click = Scroll
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Ambil target elemen yang sesuai dengan ID dari atribut href
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    // Gulir ke elemen target dengan efek smooth
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Active Class
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".section");
  const navbarLinks = document.querySelectorAll(".menu a");

  let currentSectionIndex = 0;

  // Temukan indeks dari bagian yang saat ini terlihat dalam jendela
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const rect = section.getBoundingClientRect();

    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
      currentSectionIndex = i;
      break;
    }
  }

  // Hapus kelas "active" dari semua item navbar
  navbarLinks.forEach((link) => link.classList.remove("active"));

  // Tambahkan kelas "active" pada item navbar yang sesuai
  navbarLinks[currentSectionIndex].classList.add("active");
});

// Preloader
window.onload = function () {
  document.body.classList.add("loaded");
};
