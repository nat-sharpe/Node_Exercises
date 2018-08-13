var square = function (size, char) {
    var count1 = 0;
    while (count1 < size) {
        var line = '';
        var count2 = 0; 
        while (count2 < size) {
            line = line + char + ' ';
            count2++;
        }
        console.log(line);
        count1++;
    }
};

exports.square = square;
