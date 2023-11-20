// this is the click code


const H808 = document.getElementById("H808");

H808.addEventListener('click', () => {
    new Audio("./sounds/noise-808-kick.wav").play();
})

const clock = document.getElementById("clock");


clock.addEventListener('click', () => {
    new Audio("./sounds/clock.wav").play();
})


const Tbap = document.getElementById("Tbap");

Tbap.addEventListener('click', () => {
    new Audio("./sounds/thick-bap.wav").play();
})


const kick808 = document.getElementById("kick808");

kick808.addEventListener('click', () => {
    new Audio("./sounds/808-kick.wav").play();
})


const Tkick = document.getElementById("Tkick");

Tkick.addEventListener('click', () => {
    new Audio("./sounds/thick-kick.wav").play();
})


const Snapper = document.getElementById("Snapper");

Snapper.addEventListener('click', () => {
    new Audio("./sounds/snappin-bap.wav").play();
})


const Tsnare = document.getElementById("Tsnare");

Tsnare.addEventListener('click', () => {
    new Audio("./sounds/thud-snare.wav").play();
})


const L8bit = document.getElementById("L8bit");

L8bit.addEventListener('click', () => {
    new Audio("./sounds/long-8bit.wav").play();
})


const Shoota = document.getElementById("Shoota");

Shoota.addEventListener('click', () => {
    new Audio("./sounds/throw-your-middle-finger.wav").play();
})


// this is the keypress event code


document.addEventListener("keypress", (event) => {
    if(event.keyCode == 97) {
        new Audio("./sounds/noise-808-kick.wav").play();
}
else if(event.keyCode == 115){
    new Audio("./sounds/clock.wav").play();
}
else if(event.keyCode == 100){
    new Audio("./sounds/thick-bap.wav").play();
}
else if(event.keyCode == 102){
    new Audio("./sounds/808-kick.wav").play();
}
else if(event.keyCode == 103){
    new Audio("./sounds/thick-kick.wav").play();
}
else if(event.keyCode == 104){
    new Audio("./sounds/snappin-bap.wav").play();
}
else if(event.keyCode == 106){
    new Audio("./sounds/thud-snare.wav").play();
}
else if(event.keyCode == 107){
    new Audio("./sounds/long-8bit.wav").play();
}
else if(event.keyCode == 108){
    new Audio("./sounds/throw-your-middle-finger.wav").play();
}
})