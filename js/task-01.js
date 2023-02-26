const links = document.querySelectorAll('.item');

console.log('Number of categories: '+ links.length);

links.forEach(element => {
    console.log('Category: ' + element.firstElementChild.textContent);  
    console.log('Elements: ' + element.lastElementChild.children.length);  
});
