const balloonCount = 24;
let popCounter = 0;
const colors = [
  "radial-gradient(circle at 35% 25%, #80d8ff 6%, #40c4ff 20%, #00b0ff 45%, #01579b 100%)",
  "radial-gradient(circle at 35% 25%, #ff9e80 6%, #ff6e40 20%, #ff3d00 45%, #bf360c 100%)",
  "radial-gradient(circle at 35% 25%, #ffff8d 6%, #ffff00 20%, #ffea00 45%, #f57f17 100%)",
  "radial-gradient(circle at 35% 25%, #b9f6ca 6%, #69f0ae 20%, #00e676 45%, #1b5e20 100%)",
  "radial-gradient(circle at 35% 25%, #ea80fc 6%, #e040fb 20%, #d500f9 45%, #4a148c 100%)",
];

const container = document.querySelector("#container");

// Create balloons
for (let i = 0; i < balloonCount; ++i) {
  const element = document.createElement("div");

  element.className = "balloon";
  element.style.background = getRandomColor();

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
  element.style.background = "";

  const text = document.createTextNode("Pop!");
  element.appendChild(text);

  element.removeEventListener("mouseover", popBalloon);

  popCounter++;
  if (popCounter === balloonCount) {
    endOfGameDisplay();
  }
}

function endOfGameDisplay() {
  container.innerHTML = '<div class="display-text">Yay !<br>🎈🎉</div>';
}
const element = document.createElement("div");
