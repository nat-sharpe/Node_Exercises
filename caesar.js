// Exercise 6:
// Takes three arguments from cipher() and determines the replacement letter, based on the offset
var getOffset = function (offset, index) {
    // If number is being decrypted:
    if (offset < (-1 * index)) {
        var newOffset = (26 + (index + offset));
        return newOffset;
    }
    // If number is being encrypted:
    if (offset > (26 - index)) {
        var newOffset = (offset - (26 - index));
        return newOffset;
    }
    else {
        return (index + offset);
    }           
};
// Finds the case of the letter and uses getOffset() to determine the replacement letter
// Returns the full encrypted message
var cipher = function (string, offset) {
    var lowerAbc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperAbc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var newString = '';

    for (var letter of string) {
        if (lowerAbc.includes(letter)) {
            index = lowerAbc.indexOf(letter);
            newString += lowerAbc[getOffset(offset, index, letter)];
        }
        else if (upperAbc.includes(letter)) {
            index = upperAbc.indexOf(letter);
            newString += upperAbc[getOffset(offset, index, letter)];
        }
        else {
            newString += letter;
        }
    }
    return newString;
};

exports.cipher = cipher;
