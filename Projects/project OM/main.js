const key1 = document.querySelector("#k1");
const key2 = document.querySelector("#k2");
const key3 = document.querySelector("#k3");
const key4 = document.querySelector("#k4");

const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
const a4 = document.querySelector("#a4");

window.addEventListener("keydown", (e) => {
  if (e.key == "w") {
    e.preventDefault();
    a1.play();
    key1.classList.toggle("glow");
  }
  if (e.key == "e") {
    e.preventDefault();
    a2.play();
    key2.classList.toggle("glow");
  }
  if (e.key == "o") {
    e.preventDefault();
    a3.play();
    key3.classList.toggle("glow");
  }
  if (e.key == "p") {
    e.preventDefault();
    a4.play();
    key4.classList.toggle("glow");
  }
});
