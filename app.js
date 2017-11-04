console.log('Howdy Ninjas!');

//Function Definition
function sayHi() {
    console.log('Hi there!');
}

sayHi();
//Function expressions
var sayHello = function() {
    console.log('Hello there!');
}

sayHello();

//Callback function
function callback(func) {
    func();
}

callback(sayHi);