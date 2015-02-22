//"YYYY-MM-DD hh:mm"

var net = require('net');
var port = process.argv[2];
var server = net.createServer(function (socket) {
    var date = new Date(); 
    var month_ = parseInt(date.getMonth()) + 1;
    var min_ = date.getMinutes();
    if (min_ < 10 ) {
        min_ = String(min_);
        min_ = '0'+min_;
    }
    if (month_ < 10) {
        month_ = String(month_);
        month_ = '0'+month_;
    }
    //month_ = String(month_);
    var date_fmt = date.getFullYear() + "-" + month_  + "-" + date.getDate() + " " + date.getHours() + ":" + min_ + "\n";
    socket.write(date_fmt);
    socket.end();
});
server.listen(port);




//────────────────────────────────────────────────────────────────────────────────
//    var net = require('net')
//    
//    function zeroFill(i) {
//      return (i < 10 ? '0' : '') + i
//    }
//    
//    function now () {
//      var d = new Date()
//      return d.getFullYear() + '-'
//        + zeroFill(d.getMonth() + 1) + '-'
//        + zeroFill(d.getDate()) + ' '
//        + zeroFill(d.getHours()) + ':'
//        + zeroFill(d.getMinutes())
//    }
//    
//    var server = net.createServer(function (socket) {
//      socket.end(now() + '\n')
//    })
//    
//    server.listen(Number(process.argv[2]))
//
//────────────────────────────────────────────────────────────────────────────────
