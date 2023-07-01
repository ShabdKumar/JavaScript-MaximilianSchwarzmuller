/* functions vs Methods */

const person = {
    name: "Shabd",
    greet: function greet() {       // function assigned to object is Method.
        console.log("Hi there");
    }
};

person.greet();     // Hi there


/* Storing Function in Variables */

const start = function () {
    console.log("Hi There");
};

start();        // Hi There