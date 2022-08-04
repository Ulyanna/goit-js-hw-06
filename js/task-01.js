const numberOfCategoriesEl = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${numberOfCategoriesEl}`);

const liEl = document.querySelectorAll('.item');

liEl.forEach(function (element) {
  const categoriesTitle = element.children[0].textContent;
  const categoriesNumbersList = element.children[1].children.length;
  console.log(`Category: ${categoriesTitle}`);
  console.log(`Elements: ${categoriesNumbersList}`);
});
