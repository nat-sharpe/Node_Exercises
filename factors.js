var factors = function (num) {
    var factorList = [];
    var count = 0;
    while (count < num) {
        if (num % count === 0) {
            factorList.push(count);
        }
        count++;    
    }
    return factorList;
};

exports.factors = factors;
