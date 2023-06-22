const task3Element = document.getElementById('task-3');

// 1. Create two new functions: One that takes no parameters and simply shows an alert() with some text of your choice and one that receives a name as a parameter and then uses alert() to output that name.
function greetPeople() {
    alert('Hi! Good Morning');
}

function showName(name) {
    alert(`Hi! ${name}`);
}

// 2. Call both functions directly from your code.
greetPeople();
showName('Shabd Kumar');

// 3. Add an event listener to task3Element and attach it to the first function (the one without arguments). Click this task thereafter to verify whether it works.
task3Element.addEventListener('click', greetPeople);

// 4. Add a brand-new function that takes three parameters (three strings, give them any names you want) that returns one combined string (where the three strings are concatenated).
function concat(str1, str2, str3) {
    return `${str1} ${str2} ${str3}`;
}

// 5. Call that new function directly from your code and alert() the result of that function.
alert(concat('Hi!', 'Good', 'Evening'));