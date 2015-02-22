var map = require('through2-map')
var http = require('http');
var port = process.argv[2];

rCb = map(function(chunk) {
    return chunk.toString().toUpperCase();
});

http.createServer(function (req, res) {
  var body = "";
  if (req.method == 'POST') {
      req.pipe(rCb).pipe(res);
  }
}).listen(port);



//────────────────────────────────────────────────────────────────────────────────
//    var http = require('http')
//    var map = require('through2-map')
//    
//    var server = http.createServer(function (req, res) {
//      if (req.method != 'POST')
//        return res.end('send me a POST\n')
//    
//      req.pipe(map(function (chunk) {
//        return chunk.toString().toUpperCase()
//      })).pipe(res)
//    })
//    
//    server.listen(Number(process.argv[2]))
//
────────────────────────────────────────────────────────────────────────────────


