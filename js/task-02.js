const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('ul');

const elements = ingredients.map(ingredient => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = ingredient;
  
  return ingredientsEl;
});

console.log(elements);

ulEl.append(...elements);
