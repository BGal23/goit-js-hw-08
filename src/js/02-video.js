import Player from '@vimeo/player';

const iframe = document.querySelector("iframe");

const options = {
    id: 59777392,
    width: 640,
    loop: true
}

const player = new Player(iframe, options);

player.setVolume(0);

player.on('timeupdate', function(time) {
    console.log(time.seconds);
});