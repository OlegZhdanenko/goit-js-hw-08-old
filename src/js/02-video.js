import player from '@vimeo/player'
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new player(iframe);

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
const onPlay = timeupdate (seconds) { }
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(onPlay).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});