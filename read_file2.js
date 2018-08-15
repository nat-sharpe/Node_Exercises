// Write a program to prompt the user for two file names, the first file will be the input and the second file will be the output. 
// The program will read in the contents of the input file, convert its text to all caps, and then write the resulting contents to the output file.

var fs = require('fs');
var readline = require('readline');
var promisify = require('util').promisify;

var readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readlineInterface.question('What file would you like to read? ', function(answer1) {
    fs.readFile(answer1, 'utf8', function(error, data) {
        if (error) {
            console.log('Error: Was not able to read file.');
            readlineInterface.close();
        }
        else {
            readlineInterface.question('What file would you like to write to? ', function(answer2) {
                fs.writeFile(answer2, data.toUpperCase(), function(error) {
                    if (error) {
                        console.log('Error: Directory does not exist.');
                    } 
                    else {
                        console.log(`Wrote to: ${answer2}`);
                    }
                    readlineInterface.close();
                });         
            });
        }
    });
});


