
//var mymodule = require('./mymodule.js')
//var dirName = process.argv[2];
//var extName = process.argv[3];
//var cb = process.argv[3];
//mymodule(dirName,extName,function(err, list) {
//    if (err) {
//        return;
//    }
//});


var mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], function(error, data) {
        if (error) {
                console.log(error);
                return;
        }
        data.forEach(function(entry) {
                console.log(entry);
        })
})
