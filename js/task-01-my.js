
// // Получаем ссылку на список категорий по id
// const categoriesList = document.querySelector('#categories');

// // Получаем все элементы списка категорий, которые имеют класс 'item'
// const categoriesItems = categoriesList.querySelectorAll('.item');


// // Выводим количество категорий в списке в консоль
// console.log(`В списке ${categoriesItems.length} категории.`);

// // Для каждого элемента списка категорий
// categoriesItems.forEach(item => {
//   // Получаем заголовок элемента (элемент <h2>) и сохраняем его в переменную itemTitle
//   const itemTitle = item.querySelector('h2').textContent;
  
//   // Получаем все элементы списка категории (элементы <li> вложенные в <ul>) и сохраняем их количество в переменную itemElements
//   const itemElements = item.querySelectorAll('li').length;
  
//   // Выводим в консоль заголовок элемента и количество вложенных элементов
//   console.log(`Категория: ${itemTitle} \nКоличество элементов: ${itemElements}`);
// });



// Получаем ссылку на список категорий по id

const categoriesList = document.querySelector('#categories');
console.log(categoriesList);

// Получаем все элементы списка категорий, которые имеют класс 'item'
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(categoriesItems);



// Выводим количество категорий в списке в консоль
console.log(`Number of categories: ${categoriesItems.length}`);


// Для каждого элемента списка категорий
categoriesItems.forEach(item => {
     // Получаем заголовок элемента (элемент <h2>) и сохраняем его в переменную itemTitle
    const itemTitle = item.querySelector('h2').textContent;
  

      // Получаем все элементы списка категории (элементы <li> вложенные в <ul>) 
//   и сохраняем их количество в переменную itemElements

const itemElements = item.querySelectorAll('li').length;

console.log(`Category: ${itemTitle}`);
console.log(`Elements: ${itemElements}`);
})



 

  


  
  // Выводим в консоль заголовок элемента и количество вложенных элементов
