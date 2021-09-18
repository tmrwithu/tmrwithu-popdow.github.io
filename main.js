// References to DOM elements
const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");
const popCount = document.querySelector("#count");

// The two images of the POP CAT
const openMouthImg = "./images/DOW2.png";
const closeMouthImg = "./images/DOW1.png";

// The two Popping sounds
const openMouthSound = new Audio("./sound/sound-open.mp3");
const closeMouthSound = new Audio("./sound/sound-close.mp3");

// Event Handlers (Desktops)
btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

// Event Handers (Touch Screens)
btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
})

btn.addEventListener("touchend", function(e) {
    
    e.preventDefault();
    closeMouth();
})

// The functions which will perform the cool stuff
function openMouth() {
    let count = parseInt(popCount.innerText);
    popCount.innerText = count+1;
    popcat.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    popcat.src = closeMouthImg;
    closeMouthSound.play();
}