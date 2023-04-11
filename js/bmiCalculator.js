const form = document.querySelector(".bmi-form");
const resultWrapper = form.querySelector(".result-wrapper");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  const elements = e.target.elements;
  const height = elements.inputHeight.value / 100;
  const weight = elements.inputWeight.value;
  let result = weight / (height * height);
  console.log(result);
  result = result.toFixed(2);
  const resultNumber = ` <span class="result-number">${result}</span> `;
  console.log(result);

  let message = "your BMI is" + resultNumber;
  +resultNumber;
  if (isNaN(result) || result < 0 || result == 0)
    message = "please fill correctly the fields , then retry";
  else {
    const takeCare = ",you should take more care of yourself";

    if (result < 18.5) message += " and it's lower then the average" + takeCare;
    else if (result > 25)
      message += " and its higher then the average" + takeCare;
    else message += " and you are healthy";
  }

  resultWrapper.innerHTML = message;
  console.log(elements);
});
