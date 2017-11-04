var http = require('http');

var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('How are you doing, Ninjas!');
});

server.listen(3001, '127.0.0.1');
console.log('Now listening to port:3001');