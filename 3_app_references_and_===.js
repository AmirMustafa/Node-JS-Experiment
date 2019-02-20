// References and ===
//original object
var Name = {
    favcolor:"Red",
    favmovie: "Titanic"
};

// new object passed from Name
var New = Name;

// Here we have changed the new fav color as green but Name object favcolor is also turned green. This is because node references the original object
New.favcolor = "Green";
console.log(Name);

// == and ===

console.log(20 == '20');    // true - checks no only
console.log(20 === '20');   // false -checks no + data type