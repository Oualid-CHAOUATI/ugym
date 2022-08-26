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

const svgCheck = `<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 13.2714V14.4674C26.9984 17.2707 26.0906 19.9985 24.4121 22.2438C22.7336 24.4891 20.3743 26.1316 17.686 26.9265C14.9977 27.7213 12.1244 27.6259 9.49481 26.6544C6.86518 25.6828 4.62005 23.8873 3.09425 21.5356C1.56845 19.1838 0.843729 16.4019 1.02818 13.6046C1.21263 10.8073 2.29637 8.14462 4.11776 6.0136C5.93916 3.88257 8.40062 2.3974 11.135 1.77959C13.8695 1.16178 16.7303 1.44444 19.291 2.5854" stroke="#F2E308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27 4.06714L14 17.0801L10.1 13.1801" stroke="#F2E308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const svgUncheck = `<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 27.46C21.1797 27.46 27 21.6397 27 14.46C27 7.28026 21.1797 1.45996 14 1.45996C6.8203 1.45996 1 7.28026 1 14.46C1 21.6397 6.8203 27.46 14 27.46Z" stroke="#E21C28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9 10.5601L10.1 18.3601" stroke="#E21C28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.1 10.5601L17.9 18.3601" stroke="#E21C28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
const svgStar = `<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 0.459961L16.6432 10.1337H26.8148L18.5858 16.1124L21.729 25.7862L13.5 19.8075L5.27101 25.7862L8.4142 16.1124L0.185208 10.1337H10.3568L13.5 0.459961Z" fill="#F2E308"/>
</svg>
`;

const pricingCardsWrapper = document.querySelector(
  ".pricing-section .cards-wrapper"
);

class PricingCardBuilder {
  constructor({ stars, title, price, points, className = "" }) {
    const card = document.createElement("div");
    card.className = "card " + className;

    card.appendChild(this.buildStars(stars));
    card.appendChild(this.buildTitle(title));
    card.appendChild(this.buildPrice(price));
    card.appendChild(this.buildProperies(points));
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
    starWrapper.innerHTML = svgStar;

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
    const svg = propertyRank < cardPoints ? svgCheck : svgUncheck;
    const propertyElement = document.createElement("p");
    if (svg == svgUncheck) propertyElement.className += "disabled";
    propertyElement.innerHTML = propertyString;

    const div = document.createElement("div");
    div.className = "property-wrapper";

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

for (let i = 0; i < pricingCardsArray.length; i++) {
  const builder = new PricingCardBuilder(pricingCardsArray[i]);
  pricingCardsWrapper.appendChild(builder.buildCard());
}
