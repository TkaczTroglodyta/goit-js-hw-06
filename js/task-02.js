const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listOfIngredients = document.querySelector('#ingredients');

const elementsOfIngredients = ingredients.map(element => {
  const items = document.createElement('li');
  items.textContent = element;
  items.classList.add('item');
  return items;
});

const placeItems = listOfIngredients.append(...elementsOfIngredients);
