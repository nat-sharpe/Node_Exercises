// Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out.

var dns = require('dns');
var readline = require('readline');

var readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var lookupDNS = function (url) {
    dns.lookup(url, function(error, address) {
        var errorMessage = '\nError: Domain does not exist.\n';
        var successMessage =  `\nDomain Name: ${url}\nIP Address: ${address}\n`;

        if (error) {
            console.log(errorMessage);
        }
        else {
            console.log(successMessage);
        }
    });
};

readlineInterface.question('What website would you like to lookup? ', function(answer) {
    lookupDNS(answer);
    readlineInterface.close();
});
