var fs = require('fs')

var contents = fs.readFileSync('/etc/hosts')
console.log(contents)
console.log("read complete.")

fs.readFile( '/etc/hosts',function(err,contents) {
    console.log(contents)
});

console.log('reading files async ordering')
