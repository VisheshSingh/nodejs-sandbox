//Events module
var events = require('events');

// CREATE NEW EVENT EMITTER
var myEmitter = new events.EventEmitter();


myEmitter.on('smtg', function(msg) {
    console.log(msg);
})

//CALL THE EVENT CREATED
myEmitter.emit('smtg', 'This event was triggered');


//util module
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var john = new Person('john');
var adams = new Person('adams');

var people = [james, john, adams];

people.forEach(function(person) {
    person.on('speak', function(msg){
        console.log(person.name + ' said ' + msg);
    });
})

james.emit('speak', 'hey dudes');
john.emit('speak', 'hahahaha');
adams.emit('speak', 'heheheehe');