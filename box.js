var box = function (height, width, char1, char2) {
    var count1 = 0;
    while (count1 < height) {
        var line = '';
        var count2 = 0;
        while (count2 < width) {
            if (count1 === 0 || (count1 + 1) === height) {
                line += char1;
            }
            else if (count2 > 0 && count2 < (width - 1)) {
                line += char2;
            }
            else {
                line += char1;
            }
            count2++;
        }
        console.log(line);    
        count1++;    
    }
}

exports.box = box;
