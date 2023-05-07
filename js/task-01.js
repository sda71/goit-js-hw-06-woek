
// const categoriesList = document.querySelector('#categories');

// const categoriesItems = categoriesList.querySelectorAll('.item');

// console.log(`Number of categories: ${categoriesItems.length}`);

// categoriesItems.forEach(item => {
//     const itemTitle = item.querySelector('h2').textContent;
//     const itemElements = item.querySelectorAll('li').length;

// console.log(`Category: ${itemTitle}`);
// console.log(`Elements: ${itemElements}`);
// });


const categoriesList = document.querySelector('#categories');

const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item =>{
  const itemTitle = item.firstElementChild.textContent;
  console.log(`Category: ${itemTitle}`);
  
  const numOfElements = item.querySelectorAll('li').length;
  console.log(`Elements: ${numOfElements}`);
   
});