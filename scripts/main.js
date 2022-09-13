

// setInterval(() => {
//     brightness = Math.floor(Math.random() * 100) + ("%");
//     document.querySelector(".rouge").style.filter = `brightness(${brightness})`;
//     console.log(brightness)
// }, 1);

// setInterval(() => {
//     brightness = Math.floor(Math.random() * 100) + ("%");
//     document.querySelector(".vert").style.filter = `brightness(${brightness})`;
//     console.log(brightness)
// }, 1);

 
// function tempo() {
//      intervall = Math.floor(Math.random() * 500) + 0;
//      return intervall
// }

function rouge(){
    setInterval(() => {
        var min = 95;
        var max = 120;
    brightness = Math.floor(Math.random() * (max - min) + min) + ("%");
    document.querySelector(".rouge").style.filter = `brightness(${brightness})`;
    console.log(brightness)
}, 20);
}

function vert(){
    setInterval(() => {
        var min = 130;
        var max = 150;
    brightness = Math.floor(Math.random() * (max - min) + min) + ("%");
    document.querySelector(".vert").style.filter = `brightness(${brightness})`;
    console.log(brightness)
},100);
}

function jaune(){
    setInterval(() => {
        var min = 80;
        var max = 100;
    brightness = Math.floor(Math.random() * (max - min) + min) + ("%");
    document.querySelector(".jaune").style.filter = `brightness(${brightness})`;
    console.log(brightness)
},1);
}



let start = document.querySelector(".start");
let intro = document.querySelector(".intro");
let musique = document.querySelector(".musique");
let demarre = document.querySelector(".demarre");
let moteur = document.querySelector(".moteur");
let convecteurPng= document.querySelector(".convecteurPng");

start.onclick=function(){
    moteur.play();

    setTimeout(() => {
        jaune();
    }, 2500);
    
    setTimeout(() => {
        vert();
    }, 2550);

    setTimeout(() => {
        convecteurPng.classList.add("desactive");
        rouge();
    }, 2600);
    };
















