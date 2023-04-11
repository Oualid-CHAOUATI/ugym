const checkbox = document.querySelector("#scheme-checkbox");
checkbox.addEventListener("click", (e) => {
  let scheme = "dark";

  if (checkbox.checked) scheme = "light";

  document.documentElement.setAttribute("color-scheme", scheme);
});
