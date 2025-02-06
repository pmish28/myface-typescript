// document.addEventListener("DOMContentLoaded", function () {
// // Add your JavaScript here
// });

document.getElementById("changeColourButton").addEventListener("click", () =>{
  let items = document.getElementsByClassName("postList");
  for (i = 0; i < items.length; i++) {
    items[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
  }
});
