// Sticky navbar
window.onscroll = function () {
  scrollFunction();
};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
const navLink = navbar.getElementsByClassName("nav_link");

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Menu nav fuunction
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("dropdown");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("menu-active");
});

// Button
const template = () => {
  console.log("Yah gagal melihat template.");
  alert("Tidak bisa melanjutkan, ini hanya untuk ujian!");
};

const create = () => {
  console.log("Gagal membuat undangan baru");
  alert("Gagal membuat undangan baru, ini hanya untuk ujian!");
};
