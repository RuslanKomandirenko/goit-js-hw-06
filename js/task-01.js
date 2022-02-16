const navCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${navCategoriesEl.length}`);

const numberOfElementsEl = document.querySelectorAll('.item');
numberOfElementsEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});

