const svgArrow=`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.46002H16" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 2.46002L16 9.46002L9 16.46" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


`;

const elements=document.querySelectorAll(".icon-arrow");

elements.forEach(element=>element.innerHTML=svgArrow);