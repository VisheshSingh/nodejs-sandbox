//GLOBAL OBJECT - These object are available across all modules
console.log('Hello');

// setTimeout(function() {
//     console.log('3 secs passed');
// }, 3000);

var time = 2;

var timer = setInterval(function() {
    time += 2;
    console.log( time + 'secs have passed');
    if(time > 10) {
        clearInterval(timer);
    }
}, 2000);

//Directory name
console.log(__dirname);

//File name
console.log(__filename);