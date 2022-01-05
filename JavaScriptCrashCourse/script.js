
/*const s = 'hello, world';

//get length
console.log(s.length);

//change case
console.log(s.toUpperCase());

//substring
console.log(s.substring(0, 5));

//split by letter
console.log(s.split(''));

//split by comma and other stuff, this has comma and space
console.log(s.split(', '));*/

/* //ARRAYS//
const fruits = ["apples", "orange", "pears"];

console.log(fruits);
console.log(fruits[1]);

fruits[3]='grapes'; //add to array
console.log(fruits);

fruits.push('mangos'); //add to end of array
console.log(fruits);

fruits.unshift('strawberries');
console.log(fruits); //add to front of array

fruits.pop(); //pops off the last one
console.log(fruits);

console.log(Array.isArray(fruits)); //check if something is array

console.log(fruits.indexOf('orange')); //gives index number of value

*/

//Object Literalls//
const person = {
    firstName: 'Justin',
    lastName: 'Xu',
    age: 24,
    hobbies: ["gaming"],
    address: {
        street: '14 Mesquite Pl',
        city: 'Pomona',
        state: 'CA'
    }
}

console.log(person.hobbies[0]);
console.log(person.address.city);

const { firstName, lastName, address: {city}} = person; //pulling things out of person

console.log(firstName);
console.log(city);

//Arrays of Objects

const toDo=[
    {
        id: 1,
        text: 'take out the trash',
        isCompleted: true
    },
    {
        id:  2,
        text: 'meet with friend',
        isCompleted: false
    }
]

console.log(toDo);

console.log(toDo[1].text);

//convert to JSON
const todoJSON=JSON.stringify(toDo);
console.log(todoJSON);

//High order arrays (forEach, map, filter)
toDo.forEach(function(toDo){
    console.log(toDo.text)
}); //loops through each toDo items in array

const toDoText = toDo.map(function(toDo){
    return toDo.text;
}); //map, only takes out text value, returns new array

console.log(toDoText);

/* const toDoCompleted = toDo.filter(function(toDo){
    return toDo.isCompleted === true;
}); 

console.log(toDoCompleted); //filters

*/

//combine filter with map

const toDoCompleted = toDo.filter(function(toDo){
    return toDo.isCompleted === true;
}).map(function(toDo){
    return toDo.text;
})

console.log(toDoCompleted);  //only takes out text that is true




