window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let audios = document.querySelectorAll('audio');
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
});

document.addEventListener('play', function (e) {
    let audios = document.getElementsByTagName('audio');
    for (let i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
        }
    }
}, true);

document.addEventListener('keydown', function (e) {
    let keys = document.querySelectorAll('kbd');
    for (let i = 0, len = keys.length; i < len; i++) {
        if (keys[i] != e.target) {
            keys[i].classList.remove('playing');
        }
    }
}, true);