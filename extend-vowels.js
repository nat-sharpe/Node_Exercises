var extendLongVowels = function (string, vowels, length) {
    var newString = '';
    var previousLetter = '';
    var vowelsToLengthen = vowels;
    for (var letter of string) {
        if (vowelsToLengthen.includes(letter) && letter === previousLetter) {
            for (var i = 1; i < length; i++) {
                newString += letter
            }
        }
        else { 
            newString += letter;
            previousLetter = letter.toLowerCase();
        }
    }
    return newString;
};


exports.extendLongVowels = extendLongVowels;
