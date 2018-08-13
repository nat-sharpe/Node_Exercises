var sumNumbers = function (listToSum) {
    answer = 0;
    for (var num of listToSum) {
        answer += num;
    }
    return answer;
};

exports.sumNumbers = sumNumbers;
