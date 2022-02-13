const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.createElement('li');
ingredientsEl.classList.add('item');
ingredients.textContent = [];
console.log(ingredientsEl);

document.ul.appendChild(ingredientsEl);