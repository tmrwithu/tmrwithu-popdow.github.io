// References to DOM elements
const image = document.querySelector('#image');
const popButton = document.querySelector('#pop-btn');
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

    image.src = openMouthImg;
    closeMouthSound.pause();
    closeMouthSound.currentTime = 0;
    openMouthSound.play();

    popButton.classList.add('btn-active');
};

const closeMouth = (e) => {
    e.preventDefault();

    image.src = closeMouthImg;
    openMouthSound.pause();
    openMouthSound.currentTime = 0;
    closeMouthSound.play();

    popButton.classList.remove('btn-active');
};

// Display current pop count
popCount.innerText = getPopCount();

// Event Handlers (Desktops)
document.addEventListener('mousedown', openMouth);
document.addEventListener('mouseup', closeMouth);

// Event Handers (Touch Screens)
document.addEventListener('touchstart', openMouth);
document.addEventListener('touchend', closeMouth);
