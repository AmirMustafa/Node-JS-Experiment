// this keyword - this points to the object name of the current function

var Amir = {
    print: function () {
        console.log(this === Amir); // object name == string name , true
    }
};
Amir.print();  

// now second function this points to the main above code which is global therefore o/p true
function worthless() {
    console.log(this === global);
}

worthless();