let start = document.querySelector(".start");
let intro = document.querySelector(".intro");
let musique = document.querySelector(".musique");
let demarre = document.querySelector(".demarre");
let moteur = document.querySelector(".moteur");
let convecteurPng= document.querySelector(".convecteurPng");
let reset = document.querySelector(".reset");


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


start.onclick=function(){
    moteur.play();

    setTimeout(() => {
        convecteurPng.classList.add("desactive");
        jaune();
    }, 2700);
    
    setTimeout(() => {
        vert();
    }, 2750);

    setTimeout(() => {
        rouge();
    }, 2800);
    };

reset.onclick=function(){
    location.reload();
return false;
}


















