var leet = function (string) {
    var leetAbc = ['a', 'e', 'g', 'i', 'o', 's', 't'];
    var leetNum = ['4', '3', '6', '1', '0', '5', '7'];
    var newString = '';

    for (var letter of string) {
        letter = letter.toLowerCase();
        if (leetAbc.includes(letter)) {
            var count = 0;
            while (count < leetNum.length) {
                if (letter === leetAbc[count]) {
                    newString += leetNum[count];
                    break;
                }
                else {
                    count++;
                }
            }
        }
        else {
            newString = newString + letter;
        }
    }
    return newString;
};

exports.leet = leet;
