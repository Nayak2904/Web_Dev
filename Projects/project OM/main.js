const key1 = document.querySelector("#k1");
const key2 = document.querySelector("#k2");
const key3 = document.querySelector("#k3");
const key4 = document.querySelector("#k4");

const key5 = document.querySelector("#k5");
const key6 = document.querySelector("#k6");
const key7 = document.querySelector("#k7");
const key8 = document.querySelector("#k8");

const key9 = document.querySelector("#k9");
const key10= document.querySelector("#k10");
const key11= document.querySelector("#k11");

const key12= document.querySelector("#k12");
const key13= document.querySelector("#k13");
const key14= document.querySelector("#k14");

const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
const a4 = document.querySelector("#a4");

const a5 = document.querySelector("#a5");
const a6 = document.querySelector("#a6");
const a7 = document.querySelector("#a7");
const a8 = document.querySelector("#a8");

const a9 = document.querySelector("#a9");
const a10 = document.querySelector("#a10");
const a11= document.querySelector("#a11");

const a12= document.querySelector("#a12");
const a13= document.querySelector("#a13");
const a14= document.querySelector("#a14");


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


  if (e.key == "a") {
    e.preventDefault();
    a5.play();
    key5.classList.toggle("glow");
  }
  if (e.key == "s") {
    e.preventDefault();
    a6.play();
    key6.classList.toggle("glow");
  }
  if (e.key == "k") {
    e.preventDefault();
    a7.play();
    key7.classList.toggle("glow");
  }
  if (e.key == "l") {
    e.preventDefault();
    a8.play();
    key8.classList.toggle("glow");
  }


  if (e.key == "z") {
    e.preventDefault();
    a9.play();
    key9.classList.toggle("glow");
  }
  if (e.key == "x") {
    e.preventDefault();
    a10.play();
    key10.classList.toggle("glow");
  }
  if (e.key == "c") {
    e.preventDefault();
    a11.play();
    key11.classList.toggle("glow");
  }


  if (e.key == "b") {
    e.preventDefault();
    a12.play();
    key12.classList.toggle("glow");
  }
  if (e.key == "n") {
    e.preventDefault();
    a13.play();
    key13.classList.toggle("glow");
  }
  if (e.key == "m") {
    e.preventDefault();
    a14.play();
    key14.classList.toggle("glow");
  }
});
