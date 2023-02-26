let getInput = document.querySelector('#font-size-control');
let getSpan = document.querySelector('#text');
getInput.addEventListener('input', (event) => getSpan.style.fontSize = Number(getInput.value) + 'px');