// References to DOM elements
const popcat = document.querySelector('#popcat');
const btn = document.querySelector('#btn');
const popCount = document.querySelector('#count');

// The two images of the POP CAT
const openMouthImg = './images/DOW2.png';
const closeMouthImg = './images/DOW1.png';

// The two Popping sounds
const openMouthSound = new Audio('./sound/sound-open.mp3');
const closeMouthSound = new Audio('./sound/sound-close.mp3');

const getCookie = (name) => {
    const cookie = document.cookie.split('; ').filter((e) => e.startsWith(name))[0];
    if (!cookie) return cookie;
    return cookie.split('=')[1];
};

const setCookie = (name, value) => {
    document.cookie = `${name}=${value}`;
    return value;
};

const getPopCount = () => {
    return (getCookie('pop-count') || setCookie('pop-count', 0));
};

const addPopCount = () => {
    setCookie('pop-count', parseInt(getPopCount()) + 1);
};

// The functions which will perform the cool stuff
const openMouth = (e) => {
    e.preventDefault();
    addPopCount();
    popCount.innerText = getPopCount();
    popcat.src = openMouthImg;
    openMouthSound.play();
};

const closeMouth = (e) => {
    e.preventDefault();
    popcat.src = closeMouthImg;
    closeMouthSound.play();
};

// Display current pop count
popCount.innerText = getPopCount();

// Event Handlers (Desktops)
btn.addEventListener('mousedown', openMouth);
btn.addEventListener('mouseup', closeMouth);

// Event Handers (Touch Screens)
btn.addEventListener('touchstart', openMouth);
btn.addEventListener('touchend', closeMouth);
