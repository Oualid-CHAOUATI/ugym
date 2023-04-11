(() => {
  let activeAnchor = document.querySelector(".nav-link.active");

  function callback(entries) {
    entries.forEach((entry) => handler(entry));
  }

  function handler(entry) {
    console.log(entry);
    const target = entry.target;
    const id = target.id;
    const { isIntersecting } = entry;
    if (isIntersecting) {
      const anchorToBeActive = document.querySelector(
        `.nav-link[href='#${id}']`
      );
      activeAnchor.classList.remove("active");
      if (anchorToBeActive) {
        anchorToBeActive.classList.add("active");
        activeAnchor = anchorToBeActive;
      }

      target.classList.add("intersected");
    }
    // if()
    console.log(target.id);
    console.log(isIntersecting);
  }

  const elements = document.querySelectorAll(".watch");
  console.log("elements to watch " + elements);

  const observer = new IntersectionObserver(callback, {
    rootMargin: "0% 0% -200px 0%",
  });
  elements.forEach((element) => observer.observe(element));
})();
