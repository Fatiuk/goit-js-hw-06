//   const categoryList = document.querySelector('#categories');
const categoryList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach(element => {
  const categoryName = element.firstElementChild;
  const categoryElementList = element.lastElementChild;

  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryElementList.children.length}`);
});
