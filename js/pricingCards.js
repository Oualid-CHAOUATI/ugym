const pricingCardsArray = [
  {
    stars: 1,
    title: `basic`,
    price: 120,
    points: 2,
  },
  {
    stars: 2,
    title: `premium`,
    price: 240,
    points: 3,
    className: "highlight",
  },
  {
    stars: 3,
    title: `diamond`,
    price: 420,
    points: "*",
  },
];

const properties = [
  "5 days in a week",
  "1 sweatshirt",
  "1 botle of protein",
  "Access to videos",
  "Muscle stretching",
];

const baseURL = "../assets/svg/pricing-card-svgs/";

const svgCheck = fetch(baseURL + `checked.svg`).then((response) =>
  response.text()
);

const svgUncheck = fetch(baseURL + `unchecked.svg`).then((response) =>
  response.text()
);

const svgStar = fetch(baseURL + `star.svg`).then((response) => response.text());

const pricingCardsWrapper = document.querySelector(
  ".pricing-section .cards-wrapper"
);

let svgCheckResolved = svgCheck;
let svgUncheckResolved = svgUncheck;
let svgStarResolved = svgStar;
class PricingCardBuilder {
  constructor({ stars, title, price, points, className = "" }) {
    const card = document.createElement("div");
    card.className = "card " + className;

    card.appendChild(this.buildStars(stars));
    card.appendChild(this.buildTitle(title));
    card.appendChild(this.buildPrice(price));

    const x = this.buildProperies(points);
    card.appendChild(x);
    card.appendChild(this.buildButton());
    this.card = card;
  }

  buildCard() {
    return this.card;
  }

  buildStars(stars) {
    const div = document.createElement("div");
    div.className = "stars-wrapper";

    const starWrapper = document.createElement("div");
    starWrapper.className = "star-wrapper";
    starWrapper.innerHTML = svgStarResolved;

    for (let i = 1; i <= stars; i++)
      div.appendChild(starWrapper.cloneNode(true));
    return div;
  }
  buildTitle(title) {
    const titleWrapper = document.createElement("h4");
    titleWrapper.className = "title";
    titleWrapper.innerHTML = title;
    return titleWrapper;
  }
  buildPrice(price) {
    const priceWrapper = document.createElement("p");
    priceWrapper.className = "price";
    priceWrapper.innerHTML = price;
    return priceWrapper;
  }
  buildProperty({ propertyString, propertyRank }, cardPoints) {
    if (cardPoints == "*") cardPoints = properties.length;
    const svg =
      propertyRank < cardPoints ? svgCheckResolved : svgUncheckResolved;
    const propertyElement = document.createElement("p");
    if (svg == svgUncheck) propertyElement.className += "disabled";
    propertyElement.innerHTML = propertyString;

    const div = document.createElement("div");
    div.className = "property-wrapper";

    // fe
    div.innerHTML = svg;
    div.appendChild(propertyElement);

    return div;
  }
  buildProperies(points) {
    const div = document.createElement("div");
    div.className = "properties-wrapper";

    for (let i = 0; i < properties.length; i++) {
      div.appendChild(
        this.buildProperty(
          { propertyString: properties[i], propertyRank: i },
          points
        )
      );
    }
    return div;
  }
  buildButton() {
    const btn = document.createElement("button");
    btn.className = "btn koulen-style magnetic-btn";
    btn.innerHTML = `
    <span>purchase now</span> 
    <span class="icon-arrow"></span>
    `;
    return btn;
  }
}

Promise.all([svgCheck, svgUncheck, svgStar]).then(
  ([svgCheck, svgUncheck, svgStar]) => {
    svgCheckResolved = svgCheck;
    svgUncheckResolved = svgUncheck;
    svgStarResolved = svgStar;

    for (let i = 0; i < pricingCardsArray.length; i++) {
      const builder = new PricingCardBuilder(pricingCardsArray[i]);
      pricingCardsWrapper.appendChild(builder.buildCard());
    }
  }
);
