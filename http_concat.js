
//Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).
//
//The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.
//

var http = require('http');
var url = process.argv[2];

//var bl_ = bl(function (err, data) {  
//    var result = data.toString();
//    console.log(result.length());
//});

http.get(url, function(req) {
    var data_ = "";
    req.setEncoding("utf8");
    req.on('data', function (chunk) {
        data_ += chunk;
    });
    req.on("end", function() {
        console.log(data_.length);
        console.log(data_);
    });
});


//────────────────────────────────────────────────────────────────────────────────
//    var http = require('http')
//    var bl = require('bl')
//    
//    http.get(process.argv[2], function (response) {
//      response.pipe(bl(function (err, data) {
//        if (err)
//          return console.error(err)
//        data = data.toString()
//        console.log(data.length)
//        console.log(data)
//      }))  
//    })
//
//────────────────────────────────────────────────────────────────────────────────


