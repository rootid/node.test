
//Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.
//For example:
//  /api/parsetime?iso=2013-08-10T12:10:15.474Z
//
//The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:
//
//    {
//      "hour": 14,
//      "minute": 23,
//      "second": 15
//    }
//Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. For example:
//
//    { "unixtime": 1376136615474 }
//
//Your server should listen on the port provided by the first argument to your program.

//var url = require('url');
//var http = require('http');
//
//var server = http.createServer(function (req, res) {
//    res.writeHead(200, {"Content-Type" : "text/json"});
//});


var http = require('http');
var url = require('url');
var routes = {
    "/api/parsetime": function(parsedUrl) {
    d = new Date(parsedUrl.query.iso);
        return {
            hour: d.getHours(),
            minute: d.getMinutes(),
            second: d.getSeconds()
        };
    },
    "/api/unixtime": function(parsedUrl) {
        return {
            unixtime: (new Date(parsedUrl.query.iso)).getTime()
        };
    }
}

server = http.createServer(function(request, response) {
    parsedUrl = url.parse(request.url, true);
    resource = routes[parsedUrl.pathname];
    if (resource) {
        response.writeHead(200, {"Content-Type": "application/json"});
        response.end(JSON.stringify(resource(parsedUrl)));
    }
    else {
        response.writeHead(404);
        response.end();
    }
});



