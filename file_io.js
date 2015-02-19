var fs = require('fs')

var file_name = process.argv[2]


//fs.readFile(file_name, 'utf-8', function (err, data) {
//    lst_ = data.split('\n')
//    console.log(lst_.length - 1);
//});


fs.readFile(file_name, function (err, data) {
    lst_ = data.toString();
    console.log(lst_.split('\n').length - 1);
});


//buffer_ = fs.readFileSync(file_name);
//len_ = buffer_.toString().split('\n').length - 1;
//console.log(len_)


//var contents = fs.readFileSync(file_name)
//console.log(contents)
//console.log("read complete.")
