const elements = document.querySelectorAll(".icon-arrow");
fetch("../assets/svg/arrow-icon.svg")
  .then((response) => {
    // console.log(response);

    return response.text();
  })
  .then((svgData) => {
    // console.log(svgData);

    elements.forEach((element) => (element.innerHTML = svgData));
  });
