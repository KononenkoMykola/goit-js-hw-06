
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elems = ingredients.map(ingr => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingr;
  return itemEl;
});

const ulEl = document.querySelector('#ingredients');
ulEl.append(...elems);