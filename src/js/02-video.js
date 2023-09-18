import Player from '@vimeo/player';

const iframe = document.querySelector("iframe");

const options = {
    id: 59777392,
    width: 640,
    loop: true
}

const player = new Player(iframe, options);

player.on('timeupdate', function(time) {
    localStorage.setItem("timer", time.seconds)
});

player.setCurrentTime(localStorage.timer)
