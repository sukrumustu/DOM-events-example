
const langInput = document.querySelector('.lang-input');
// console.log(langInput);
const addButton = document.querySelector('#add-btn');
// console.log(addButton);
const delButton = document.querySelector('#del-btn');
// console.log(delButton);
const langList = document.querySelector('#lang-list');
// console.log(langList);

const newUl = document.createElement('ul');
langList.appendChild(newUl);



addButton.addEventListener('click', () => {

    !langInput.value ? alert('Please enter a language.') :newUl.innerHTML += `<li>${langInput.value}</li>`;
    langInput.value = "";
    langInput.focus();

} );

delButton.addEventListener( 'click', ()=> {

    newUl.childElementCount > 0 ? newUl.removeChild(newUl.lastElementChild) : alert("There is no item to delete.");
});


langInput.addEventListener( 'keydown', (event)=> {
// console.log(event);
// console.log(event.target);
// console.log(event.target.value);
// console.log(event.keyCode);

 if (event.keyCode === 13) {
    addButton.click()};

// if (event.code === 'Enter') {
//     addButton.click()};


if (event.keyCode ===46){
    delButton.click()};

// if (event.code ==='Delete'){
//     delButton.click()};


});  

window.addEventListener('load', () =>{
    langInput.focus();
});
