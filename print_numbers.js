var printNumbersFor = function (start, end) {
    for (start; start <= end; start++) {
        console.log(start);
    }
};

var printNumbersWhile = function (start, end) {
    while (start <= end) {
        console.log(start);
        start++;
    }
};

exports.printNumbersFor = printNumbersFor;
exports.printNumbersWhile = printNumbersWhile;


