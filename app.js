var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
})

app.get('/contact', function(req,res){
    res.sendFile(__dirname + '/contact.html');
})

app.get('/profile/:name', function(req,res){
    var data = {age: 25, job: 'ninja'}
    res.render('profile', {person: req.params.name, data:data});
})

app.listen(3001);
console.log('Now listening to port:3001');