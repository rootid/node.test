
var sum_ = 0;
for (i=2;i<process.argv.length;i++) {
    sum_ += parseInt(process.argv[i]);
}


var lst = []
lst.push(process.argv[0])
lst.push(process.argv[1])
lst.push(sum_)
console.log(sum_)
