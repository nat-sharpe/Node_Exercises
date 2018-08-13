var positiveNums = function (listToCheck) {
    var answer = [];
    for (var num of listToCheck) {
        if (num >= 0) {
            answer.push(num);
        }
    }
    return answer;
};

exports.positiveNums = positiveNums;
