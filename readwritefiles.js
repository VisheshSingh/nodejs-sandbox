var fs = require('fs');
/* SYNCHRONOUS VERSION
var readme = fs.readFileSync('readme.txt', 'utf8');
// console.log(readme);

fs.writeFileSync('writeme.txt', readme); */

//ASYNCHRONOUS VERSION
fs.readFile('readme.txt', 'utf8', function(err, data){
    //console.log(data);
    fs.writeFile('writeme.txt', data, (error) => { console.log('Err: not found') });
});

console.log('I will be executed first');