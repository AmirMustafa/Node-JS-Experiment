// using http custom module
var http = require('http');
var fs = require('fs');

// this will 404 error - this will just accept response
function send404Request(response) {
    response.writeHead("404", {'Context-Type':'text/plain'});
    response.write("There is some Error..");
    response.end();
}

// this will handel the server
function onRequest(request,response) {
    
    // when request is GET and url is hit
    if(request.method == 'GET' && request.url == '/' ) {
        response.writeHead('202', {'Content-Type': 'text/html'});   // we have created html page(here amir.html), therefore content type html
        fs.createReadStream("./amir.html").pipe(response);          // this is from fs cutom module loaded the created html page
        response.write('Here is your response');                    // pipe will load page slowly without delay
    } else {
        send404Request(response);   // for 404 req call that function
    }
}

// this will trigger above onRequest function, 8000 is the port number(you can chose any port)
http.createServer(onRequest).listen(8000);
console.log("Server is running..");