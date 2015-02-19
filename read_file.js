var fs = require('fs')

/*
    Loading the file sync + async orderA
    From good-parts
    request = prepare_the_request(  );
    send_request_asynchronously(request, function (response) {
            display(response);
        });
 */

var contents = fs.readFileSync('/etc/hosts')
console.log(contents)
console.log("read complete.")

fs.readFile( '/etc/hosts',function(err,contents) {
    console.log(contents)
});

console.log('reading files async ordering')



var readCb = function(err,contents) {
    console.log(contents)
};

fs.readFile('/etc/hosts',readCb)
fs.readFile('/etc/hostname',readCb)
