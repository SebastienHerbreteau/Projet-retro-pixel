let start = document.querySelector(".start");
let launch = document.querySelector(".launch");
let intro = document.querySelector(".intro");
let musique = document.querySelector(".musique");
let demarre = document.querySelector(".demarre");
let moteur = document.querySelector(".moteur");
let convecteurPng = document.querySelector(".convecteurPng");
let reset = document.querySelector(".reset");
let voyage = document.querySelector(".voyage");
let firstFlash = document.querySelector(".first-flash");
let affiche = document.querySelector(".affiche");
let fleche = document.querySelector(".fleche");
let diodeRouge = document.querySelector(".diodeRouge");
let diodeJaune = document.querySelector(".diodeJaune");
let diodeVert = document.querySelector(".diodeVert");
let levier = document.querySelector(".levier");
let voiture = document.querySelector(".voiture");
let frein = document.querySelector(".frein");
let generique = document.querySelector(".generique")
let fondu = document.querySelector(".fondu")
let huey = document.querySelector(".huey")

function rouge() {
  setInterval(() => {
    var min = 95;
    var max = 120;
    brightness = Math.floor(Math.random() * (max - min) + min) + "%";
    document.querySelector(".rouge").style.filter = `brightness(${brightness})`;
    diodeRouge.style.filter = `brightness(${brightness})`;
  }, 20);
}

function vert() {
  setInterval(() => {
    var min = 130;
    var max = 150;
    brightness = Math.floor(Math.random() * (max - min) + min) + "%";
    document.querySelector(".vert").style.filter = `brightness(${brightness})`;
    diodeVert.style.filter = `brightness(${brightness})`;
  }, 100);
}

function jaune() {
  setInterval(() => {
    var min = 80;
    var max = 100;
    brightness = Math.floor(Math.random() * (max - min) + min) + "%";
    document.querySelector(".jaune").style.filter = `brightness(${brightness})`;
    diodeJaune.style.filter = `brightness(${brightness})`;
  }, 1);
}

start.onclick = function () {
  moteur.play();
  start.classList.add("push");
  setTimeout(() => {
    convecteurPng.classList.add("desactive");
    jaune();
  }, 2600);

  setTimeout(() => {
    vert();
  }, 2650);

  setTimeout(() => {
    rouge();
  }, 2700);
};

reset.onclick = function () {
  location.reload();
  return false;
};

fleche.onclick = function () {
  location.reload();
  return false;
};

levier.onclick = function () {
  setTimeout(() => {
    levier.play();
    // launch.classList.add("push");
  }, 1);

  setTimeout(() => {
    voyage.play();
  }, 500);

  setTimeout(() => {
    firstFlash.classList.add("animFirstFlash", "active");
  }, 1800);

  setTimeout(() => {
    frein.play();
  }, 4000);

  setTimeout(() => {
    intro.classList.add("desactive");
  }, 4300);

  setTimeout(() => {
    musique.play();
    affiche.classList.replace("desactive", "active");
  }, 4000);

  setTimeout(() => {
    voiture.classList.add("scale");
  }, 5000);

  setTimeout(() => {
    voiture.classList.add("index");
  }, 8000);
};

setTimeout(() => {
  generique.classList.add("animGene");
  generique.classList.replace("desactive", "active");
  
}, 30000);

setTimeout(() => {
  fondu.classList.add("animFondu");
  fondu.classList.replace("desactive", "active");
  
}, 28000);

setTimeout(() => {
  huey.play();
  
}, 29000);

