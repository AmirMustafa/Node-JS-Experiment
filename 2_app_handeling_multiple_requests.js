// Here we are seeing multiple requests concepts
// request
function request(order) {
    console.log("customer order", order);
    response(function () {
        console.log("data delivered", order);
    })
}

// response
function response(callback) {   // This function collects all the requests within first 5 seconds
    setTimeout(callback, 5000);
}

// call
request(1);
request(2);
request(3);
request(4);
request(5);

// within 5 seconds all request's data is delivered