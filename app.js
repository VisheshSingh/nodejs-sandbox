var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
        myReadStream.pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/contact.html', 'utf8');
        myReadStream.pipe(res);
    } else if(req.url === '/api/ninjas'){
        var ninjas = [{name: 'ryu', age: 29}, {name:'yoshi', age: 25}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/404.html', 'utf8');
        myReadStream.pipe(res);
    }
    
    //res.end('howdy gang!');

});

server.listen(3001, '127.0.0.1');
console.log('Now listening to port:3001');