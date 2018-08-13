var matrixSum = function (matrix1, matrix2) {
    var answer = [];
    var i = 0;
    while (i < 2) {
        var j = 0;
        var lineA = matrix1[i];
        var lineB = matrix2[i];
        while (j < 2) {
            var num = lineA[j] + lineB[j];
            answer.push(num);
            j++;
        }
        i++;
    }
    return answer;
};

exports.matrixSum = matrixSum;
