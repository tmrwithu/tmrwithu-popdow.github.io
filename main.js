// References to DOM elements
const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#btn");
const popCount = document.querySelector("#count");
popCount.innerText = syncCook();

function syncCook() {
    let popCookie = document.cookie.split(";").filter(m => m.startsWith('pop-cook'));
    let count = null;
    if (!popCookie.length) {
        document.cookie = 'pop-cook=0;';
        count = 0;
    } else {
        count = parseInt(popCookie[0].substr(9));
    }
    return count;
}
function addCook() {
    console.log("add");
    count = syncCook();
    console.log(count);
    let txt = `pop-cook=${++count};`;
    console.log(txt);
    document.cookie = txt;
}
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
btn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    openMouth();
})

btn.addEventListener("touchend", function (e) {

    e.preventDefault();
    closeMouth();
})

// The functions which will perform the cool stuff
function openMouth() {
    addCook();
    popCount.innerText = syncCook();
    popcat.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    popcat.src = closeMouthImg;
    closeMouthSound.play();
}