const iconMenu = document.querySelector(".menu-icon");
const iconClose = document.querySelector(".icon-close");
console.log(iconMenu);
function toggleMenu() {
  let x = document.querySelector(".header-top .submenu");

  if (!x.classList.contains("active")) {
    x.classList.add("active");
    console.log("Ngu");
    iconMenu.style.display = "none";
  } else {
    x.classList.remove("active");
  }
  console.log(x);
}
function closeMenu() {
  let x = document.querySelector(".header-top .submenu.active");
  x.classList.remove("active");
  iconMenu.style.display = "block";
}
iconMenu.addEventListener("click", toggleMenu);
iconClose.addEventListener("click", closeMenu);
