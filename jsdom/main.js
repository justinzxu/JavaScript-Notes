//Single element
// document.getElementById('my-form');
// document.querySelector('.class');
// document.querySelector('tag');
//document. querySelector('#id');

//Multiple element
//console.log(document.querySelectorAll('.item'));

//const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));

//Manipulate DOM
//const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
/*
ul.firstElementChild.textContent = 'Justin is cool';
ul.children[1].innerText = 'Justin';
ul.lastElementChild.innerHTML = '<h3>hello!</h3>';

const btn = document.querySelector('.btn');
//btn.style.background= 'blue';
btn.addEventListener('mouseout', (e)=> {
    e.preventDefault();
    document.querySelector('#my-form').style.background = 'green';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hi!</h1>';
});

*/

const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    //console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === ''){
        //document.querySelector('body').style.background='black';
        msg.classList.add('error');
        msg.innerHTML = 'please enter stuff';

        setTimeout(()=> msg.remove(), 1000);
    }
    else{
        console.log('success');
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);

        //clear fields
        nameInput.value='';
        emailInput.value='';
    }
}

