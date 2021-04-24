const btnToast1 = document.querySelector(".btn-toast-1");
const btnToast2 = document.querySelector(".btn-toast-2");
const toast1 = document.querySelector(".toast-desc-1");
const toast2 = document.querySelector(".toast-desc-2");
const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".fixed-vertical-bar");
const navBarName = document.querySelectorAll(
  ".fixed-vertical-bar div .navigation-option"
);

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
