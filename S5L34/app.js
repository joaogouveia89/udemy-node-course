var Emmiter = require('events');
var eventConfig = require('./config').events;
var emtr = new Emmiter();

emtr.on(eventConfig.GREET, function(){
    console.log('Somewhere, someone said hello');
});

emtr.on(eventConfig.GREET, function(){
    console.log('A greeting occured');
});

console.log('Hello');
emtr.emit(eventConfig.GREET);