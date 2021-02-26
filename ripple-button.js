document.head.innerHTML +=
  '<link rel="stylesheet" href="https://dunggramer.github.io/ripple-button/ripple-button.css" />';

/**
 * Check mobile device
 * return true if is mobile
 *
 * @return {boolean}
 */
function isMobile() {
  const regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

function createRipple(event) {
  const button = event.currentTarget;
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  const circle = document.createElement('span');
  circle.setAttribute('ripple', '');
  circle.style.width = circle.style.height = `${diameter}px`;

  let locationTouch = {
    x: event.clientX,
    y: event.clientY,
  };
  const locationButton = {
    x: button.offsetLeft,
    y: button.offsetTop,
  };

  if (isMobile()) {
    locationTouch.x = event.touches[0].clientX;
    locationTouch.y = event.touches[0].clientY;
  }
  circle.style.left = `${locationTouch.x - locationButton.x - radius}px`;
  circle.style.top = `${locationTouch.y - locationButton.y - radius}px`;

  button.appendChild(circle);

  setTimeout(() => {
    button.removeChild(circle);
  }, 700); //timeout = animation-time
}

const buttons = document.querySelectorAll('button[ripple]');

for (const button of buttons) {
  const touchEvent = isMobile() ? 'touchstart' : 'mousedown';
  button.addEventListener(touchEvent, createRipple);
}
