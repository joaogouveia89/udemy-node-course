var Emmiter = require('./emmiter');
var emtr = new Emmiter();

emtr.on('greet', function(){
    console.log('Somewhere, someone said hello');
});

emtr.on('greet', function(){
    console.log('A greeting occured');
});

console.log('Hello');
emtr.emit('greet');