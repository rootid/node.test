var fs = require('fs')

//var extName = '';
//var readCb = function callback(err,list) {
//    if (err)  {
//        return callback(err);
//    }
//    filter_lst = [];
//    for (var idx_ in list) {
//        local_lst = list[idx_].split('.');
//        if ( local_lst.length == 2 && local_lst[1] == extName ) {
//            filter_lst.push (list[idx_]);
//            console.log(list[idx_]);
//        }
//    }
//    //console.log(filter_lst);
//};
//
//module.exports =  function bar (dirname,extPath,cb) {
//    extName = extPath;
//    fs.readdir(dirname,readCb);
//};


module.exports = function (dir, filter, callback) {
        var fs = require("fs");
        var patt = new RegExp("\\." + filter + "$", "i");
        var out = [];
        fs.readdir(dir, function (error, list) {
                if (error) {
                        return callback(error);
                } else {
                        list.forEach(function(entry) {
                                if (patt.test(entry))
                                        out.push(entry);
                        });
                        return callback(null, out);
                }
        });
}

