const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const ingredientElement = document.createElement('li');
  ingredientElement.textContent = ingredient;

  ingredientList.appendChild(ingredientElement);

  console.log(ingredientElement);
});
