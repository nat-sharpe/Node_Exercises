var ticTacToe = function (endGame) {
    var i = 0;
    while (i < 3) {
        var j = 0;
        var column = '';
        var diaganol1 = '';
        var diaganol2 = '';
        while (j < 3) {
            var line = endGame[j];
            if (line[0] !== null && line[0] === line[1] && line[0] === line[2]) {
                return line[0];
            }
            column+= line[i];
            if (column[0] === column[1] && column[0] === column[2]) {
                return column[0];
            }
            diaganol1+= line[j];
            if (diaganol1[0] === diaganol1[1] && diaganol1[0] === diaganol1[2]){
                    return diaganol1[0];
            }
            diaganol2+= line[2-j];
            if (diaganol2[0] === diaganol2[1] && diaganol2[0] === diaganol2[2]) {
                return diaganol2[0];
            }
            j++;
        }
        i++;
    }
    return null;
};

exports.ticTacToe = ticTacToe;
