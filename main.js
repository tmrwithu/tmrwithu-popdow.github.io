const popCount = document.querySelector('#count');

const openMouthImg = document.querySelector('#pop-img');
const closeMouthImg = document.querySelector('#unpop-img');

Howler.volume(0.2);
const openMouthSound = new Howl({ src: ['./sound/sound-open.mp3'] });
const closeMouthSound = new Howl({ src: ['./sound/sound-close.mp3'] });

const commaSeparate = (number) => {
    return Intl.NumberFormat('th-TH').format(number);
};

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
    const newCount = parseInt(getPopCount()) + 1;
    setCookie('pop-count', newCount);
    return newCount;
};

const openMouth = (e) => {
    e.preventDefault();

    popCount.innerText = commaSeparate(addPopCount());

    openMouthImg.style.display = 'block';
    closeMouthImg.style.display = 'none';
    openMouthSound.play();
};

const closeMouth = (e) => {
    e.preventDefault();

    openMouthImg.style.display = 'none';
    closeMouthImg.style.display = 'block';
    closeMouthSound.play();
};

popCount.innerText = commaSeparate(getPopCount());

document.addEventListener('keydown', openMouth);
document.addEventListener('keyup', closeMouth);
document.addEventListener('mousedown', openMouth);
document.addEventListener('mouseup', closeMouth);
document.addEventListener('touchstart', openMouth);
document.addEventListener('touchend', closeMouth);
