const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient =>{
     const liElement = document.createElement('li');
     liElement.textContent = ingredient;
     liElement.classList.add('item');
     return liElement;
     
})
ingredientsEl.append(...ingredientsList);