var banner = function (message, char) {
    var count1 = 0;
    while (count1 < 3) {
        var line = '';
        if (count1 === 0 || count1 === 2) {
            var count2 = 0;
            while (count2 < (message.length + 4)) {
                line += char;
                count2++;
            }
        }
        else {
            line = `${char} ${message} ${char}`;
        }
        console.log(line);    
        count1++;    
    }
};

exports.banner = banner;
