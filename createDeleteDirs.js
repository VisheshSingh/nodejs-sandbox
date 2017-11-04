var fs = require('fs');

//DELETE FILE 
// fs.unlink('writeme.txt');

//MAKE AND REMOVE DIR SYNCHRONOUSLY
// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

//MAKE AND REMOVE DIR ASYNCHRONOUSLY
// fs.mkdir('stuff', function(){
//     fs.readFile('readme.txt', 'utf8', function(err, data){
//         fs.writeFile('./stuff/writeme.txt', data);
//     })
// });

fs.unlink('./stuff/writeme.txt', function(){
    fs.rmdir('stuff');
});
