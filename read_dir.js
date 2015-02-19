var fs = require('fs')

var dirName = process.argv[2];
var extName = process.argv[3];

var readCb = function callback(err,list) {

    filter_lst = [];
    for (var idx_ in list) {
        local_lst = list[idx_].split('.');
        if ( local_lst.length == 2 && local_lst[1] == extName ) {
            filter_lst.push (list[idx_]);
            console.log(list[idx_]);
        }
    }
    //console.log(filter_lst);
};


fs.readdir(dirName,readCb);

