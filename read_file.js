// Write a program that prompts the user to enter a file name, and reads in the contents of the file, convert the text to all caps, and prints it out.
// Trigger an error condition by running the program on a non-existent file. Your program should display the error message.

var fs = require('fs');
var readline = require('readline');

var readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

readlineInterface.question('What file would you like to read? ', function(answer) {
    fs.readFile(answer, 'utf8', function(error, data) {
        if (error) {
            return console.log('Error. File does not exist.');
        }
        else {
            console.log(data.toUpperCase());
        }
    });
    readlineInterface.close();
});



