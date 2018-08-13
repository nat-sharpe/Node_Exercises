var matrixMultiply = function (matrix1, matrix2) {
    var answer = [];
    var i = 0;
    while (i < 2) {
        var j = 0;
        var line = matrix1[i];
        while (j < 2) {
            var k = 0;
            var product = 0;
            while (k < 2) {
                var column = matrix2[k];
                var num1 = line[k];
                var num2 = column[j];
                product += (num1 * num2);
                k++;
            }
            answer.push(product);
            j++;
        }
        i++;
    }
    return answer;
};

exports.matrixMultiply = matrixMultiply;
