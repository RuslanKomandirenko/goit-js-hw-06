const navCategoriesEl = document.querySelectorAll('.item');
const numberOfCategoriesEl = navCategoriesEl.length;
console.log(`Number of categories: ${numberOfCategoriesEl}`);


for (let i = 0; i <= numberOfCategoriesEl; i += 1) {
    const headTextEl = navCategoriesEl[i].firstElementChild.textContent;
    console.log(`Category: ${headTextEl}`);

    const elementsOfCategoriesEl = navCategoriesEl[i].lastElementChild;
    const numberOfElementsEl = elementsOfCategoriesEl.querySelectorAll('li');
    console.log(`Elements: ${numberOfElementsEl.length}`);
}