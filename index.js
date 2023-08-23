// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    cool();
  });

function cool() {
    let cool = document.getElementById("text").textContent = "This is really cool!";
}

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );