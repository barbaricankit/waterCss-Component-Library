const btnToast1 = document.querySelector(".btn-toast-1");
const btnToast2 = document.querySelector(".btn-toast-2");
const toast1 = document.querySelector(".toast-desc-1");
const toast2 = document.querySelector(".toast-desc-2");
const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".nav__bar");
const searchIcon = document.querySelector(".menu__item .fa-search");
const searchBar = document.querySelector(".search_bar");
const backIcon = document.querySelector(".back_icon");
const user = document.querySelector(".user");
const userMenu = document.querySelector(".user-menu");
const userSubMenu = document.querySelectorAll(".user-sub-menu");
const navBarName = document.querySelectorAll(".nav__bar div .nav__item");

btnToast1.addEventListener("click", () => {
  toast1.classList.add("show");
  setTimeout(() => {
    toast1.classList.remove("show");
  }, 5000);
});
btnToast2.addEventListener("click", () => {
  toast2.classList.add("show");
  setTimeout(() => {
    toast2.classList.remove("show");
  }, 5000);
});

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("show-nav-bar");
  navBarName.forEach((element) => {
    element.classList.toggle("show-nav-name");
  });
});

navBarName.forEach((element) => {
  element.addEventListener("click", () => {
    navBar.classList.remove("show-nav-bar");
  });
});

searchIcon.addEventListener("click", () => {
  searchBar.classList.add("show-search_bar");
});

backIcon.addEventListener("click", () => {
  searchBar.classList.remove("show-search_bar");
});

userSubMenu.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element);
    userMenu.classList.remove(" show-user-menu");
  });
});
user.addEventListener("click", () => {
  userMenu.classList.toggle("show-user-menu");
});
// userSubMenu.addEventListener("click", () => {
//   userMenu.classList.remove("show-user-menu");
// });
// document.onclick = (e) => {
//   console.log(e, e.target);
//   if (e.target.classList !== "show-user-menu") {
//     userMenu.classList.remove("show-user-menu");
//   }
// };
