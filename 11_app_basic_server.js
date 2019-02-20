// using http custom module
var http = require('http');

// this will handel the server
function onRequest(request,response) {
    console.log("A user has made a request " + request);
    response.writeHead(202, {"Context-Type":"text/plain"});
    response.write("Here is your response");
    response.end();
}

// this will trigger above onRequest function, 8000 is the port number(you can chose any port)
http.createServer(onRequest).listen(8000);
console.log("Server is running..");