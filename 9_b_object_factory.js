// here we have made a copy of movies module and used
 
var movies = require('./movies');
var bmovies = movies;
bmovies.favMovie = "Venom"; 
console.log("Marvel movie is " + bmovies.favMovie);