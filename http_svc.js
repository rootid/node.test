var http_ = require('http')

http_.createServer ( function (req,resp) { 
    resp.writeHead(200);
    resp.write("Hello world\n");
    
    setTimeout(function() {
        resp.write("Completed hello world\n"); 
        resp.end();
    },2000);

}).listen(8080);

console.log("listening to port 8080");
