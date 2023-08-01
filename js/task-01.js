const categories = document.querySelector('#categories');
const categoriesLength = `Number of categories = ${categories.children.length}`;
console.log(categoriesLength);

const items = document.querySelectorAll('.item h2');
const elementsCount = items.forEach(element =>
  console.log(
    `\nCategory: ${element.textContent}\nElements: ${element.nextElementSibling.children.length}`
  )
);
