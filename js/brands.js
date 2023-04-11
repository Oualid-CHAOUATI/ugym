const brandsArray = [
  `allianz.svg`,
  "asics.svg",
  "diadora.svg",
  "herbalife.svg",
];

const brandsWrapper = document.querySelector(".brands");
brandsArray.forEach(async (brandSVG) => {
  const div = document.createElement("div");
  div.className = "brand-wrapper";

  const brandResponse = await fetch("../assets/svg/brands/" + brandSVG);
  const svgText = await brandResponse.text();

  div.innerHTML = svgText;
  brandsWrapper.appendChild(div);
});
