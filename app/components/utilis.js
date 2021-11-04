exports.formatTime = (time) => {
  let ms = '';
  let seconds = Math.floor(time % 60);
  let minutes = Math.floor(time / 60) % 60;

  let s = seconds.toString().padStart(2, '0');
  let m = minutes.toString().padStart(2, '0');

  ms = `${m}:${s}`;

  if (time == undefined || isNaN(time) || time < 0) {
    return null;
  } else {
    return ms;
  }
};
