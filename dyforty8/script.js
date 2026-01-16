var chutki = document.querySelector("img")
var msg = document.querySelector("h2 span")


  chutki.addEventListener("mouseenter", function () {
    msg.textContent = "Donforget to eat your vegetables!";
  })

  chutki.addEventListener("mouseleave", function () {
    msg.textContent = "vegetables!";
  })



// var box = document.querySelector("#box");

// box.addEventListener("click", function() {
// console.log("Event !");
// });

// var box = document.querySelector("#box");

// box.addEventListener("mouseenter", function() {
// console.log("Enter.. !");
// });

// var box = document.querySelector("#box");

// box.addEventListener("mouseleave", function() {
// console.log("Left...!");
// });