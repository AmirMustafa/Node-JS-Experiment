// we will set movies module value from here and view
 
var movies = require('./movies');
var amovies = movies;
amovies.favMovie = "Spider Man 1"; 
console.log("Marvel movie is " + amovies.favMovie);