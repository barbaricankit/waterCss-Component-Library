const btnToast1 = document.querySelector(".btn-toast-1");
const btnToast2 = document.querySelector(".btn-toast-2");
const toast1 = document.querySelector(".toast-desc-1");
const toast2 = document.querySelector(".toast-desc-2");

btnToast1.addEventListener("click", () => {
  console.log("Button Clicked");
  toast1.classList.add("show");
  setTimeout(() => {
    toast1.classList.remove("show");
  }, 5000);
});
btnToast2.addEventListener("click", () => {
  console.log("Button Clicked");
  toast2.classList.add("show");
  setTimeout(() => {
    toast2.classList.remove("show");
  }, 5000);
});