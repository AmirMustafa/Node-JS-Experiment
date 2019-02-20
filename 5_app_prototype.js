// Node JS Prototypes
// This is the function
function Person(name) {
    this.name = name;
}

// we use prototype to add the function/method to our custom prototype
Person.prototype = {
    greet: function () {
        console.log( "hello world my name is " +  this.name);
    }
};

var frank = new Person("Amir Mustafa"); // creating object of the Person
frank.greet();