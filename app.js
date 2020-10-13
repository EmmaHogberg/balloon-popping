const balloonCount = 24;
const colors = ["#00e676", "#d500f9", "#00b0ff", "#ffff00", "#ff3d00"];

const container = document.querySelector("#container");

// Create balloons
for (let i = 0; i < balloonCount; ++i) {
  const element = document.createElement("div");

  element.className = "balloon";
  element.style.backgroundColor = getRandomColor();

  element.addEventListener("mouseover", popBalloon);

  container.appendChild(element);
}

// Randomize balloon color
function getRandomColor() {
  const colorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[colorIndex];
  return color;
}

// Remove balloon and add pop text
function popBalloon(event) {
  const element = event.target;

  element.className = "popped";
  element.style.backgroundColor = "";

  const text = document.createTextNode("POP!");
  element.appendChild(text);

  element.removeEventListener("mouseover", popBalloon);
}
