window.addEventListener('keydown', function(event) {

    let audio = document.querySelector(
        `audio[data-key="${event.keyCode}"]`
    );

    let tanu = document.querySelector(
        `.btn[data-key="${event.keyCode}"]`
    );

    if (!audio) return;

    tanu.classList.add('playing');

    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
        tanu.classList.remove('playing');
    }, 200);
});