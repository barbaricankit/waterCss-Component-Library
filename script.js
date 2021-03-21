//const btnAvatar = document.getElementById("avatar-btn");
const btnToast1 = document.querySelector(".toastBtn1");
const btnToast2 = document.querySelector(".toastBtn2");
const toast1 = document.querySelector(".toastDesc1");
const toast2 = document.querySelector(".toastDesc2");
// btnAvatar.addEventListener("click", () => {
//   console.log("clicked");
//   //resmall-avatar width: 80px; border-radius: 50%;
// });

btnToast1.addEventListener("click", () => {
  console.log("Button Clicked");
  toast1.classList.add("show");
  setTimeout(() => {
    toast1.classList.remove("show");
  }, 3000);
});
btnToast2.addEventListener("click", () => {
  console.log("Button Clicked");
  toast2.classList.add("show");
  setTimeout(() => {
    toast2.classList.remove("show");
  }, 3000);
});