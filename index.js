// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
let cool = document.getElementById("text").textContent = "This is really cool!";
  });

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

console.log(change);

document.addEventListener("DomContentLoaded", function() {

});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );