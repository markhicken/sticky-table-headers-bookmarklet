var fs = require('fs');
var file = process.argv[2];

var contents = fs.readFileSync(file);
fs.writeFileSync(file, decodeURI(contents));

console.log('Decoded file: ' + file);
