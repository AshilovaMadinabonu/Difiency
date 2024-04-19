// const toggle = document.getElementById("toggleDark");
// const section = document.querySelector("body");

// toggle.addEventListener("click", function () {
//   this.classList.toggle("bi-moon");
//   if (this.classList.toggle("bi-brightness-high-fill")) {
//     body.style.background = "white", "#FFF7F4";
//     body.style.color = "black";
//     body.style.transition = "0.8s";
//   } else {
//     body.style.background = "black", "#373737";
//     body.style.color = "white";
//     body.style.transition = "0.8s";
//   }
// });

var icon = document.getElementById("icon")

icon.onclick = function () {
  document.body.classList.toggle('dark-theme');
  if(document.body.classList.contains('dark-theme')){
    icon.src = "./assets/img/sun.png"
  }else{
    icon.src = "./assets/img/moon.png"
  }
}