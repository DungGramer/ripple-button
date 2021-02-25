document.head.innerHTML +=
	'<link rel="stylesheet" href="https://dunggramer.github.io/ripple-button/ripple-button.css" />';

function createRipple(event) {
	const button = event.currentTarget;
	const circle = document.createElement("span");
	const diameter = Math.max(button.clientWidth, button.clientHeight);
	const radius = diameter / 2;

	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
	circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
	circle.setAttribute("ripple", "");

	button.appendChild(circle);

	setTimeout(() => {
		button.removeChild(circle);
	}, 600);
}

const buttons = document.querySelectorAll("button[ripple]");

for (const button of buttons) {
	button.addEventListener("click", createRipple);
}
