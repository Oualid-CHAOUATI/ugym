function initTransform(element, transition) {
  element.style.transform = "translateX(var(--x,0)) translateY(var(--y,0)) ";
  element.style.transition = ` ${transition}ms`;
}
function setProperty({ element, property, value }) {
  // value *= amplifier;

  element.style.setProperty("--" + property, value + "%");
}

function applyMagneticEffect({ element, amplifier, transition = 200 }) {
  if (Number(amplifier)) amplifier = { x: amplifier, y: amplifier };

  initTransform(element, transition);

  element.addEventListener("mouseleave", (e) => {
    setProperty({ element, property: "x", value: 0 });
    setProperty({ element, property: "y", value: 0 });
  });

  element.addEventListener("mousemove", (e) => {
    const { layerX: cursorX, layerY: cursorY } = e;
    const width = element.offsetWidth;
    const height = element.offsetHeight;

    const sizeX = -width / 2;

    const sizeY = -height / 2;

    let x = (cursorX + sizeX) / width;
    x *= amplifier.x;
    setProperty({ element, property: "x", value: x });

    let y = (cursorY + sizeY) / height;
    y *= amplifier.y;
    setProperty({ element, property: "y", value: y });
  });
}

const anchors = document.querySelectorAll(".nav-menu a");

anchors.forEach((anchor) => {
  // console.log("applying");
  applyMagneticEffect({ element: anchor, amplifier: 50 });
});

const magneticBtns = document.querySelectorAll(".magnetic-btn");
magneticBtns.forEach((btn) => {
  applyMagneticEffect({ element: btn, amplifier: { x: 30, y: 70 } });
});

const hamburgerLabel = document.querySelector(".hamburger-label");

applyMagneticEffect({ element: hamburgerLabel, amplifier: 100 });
