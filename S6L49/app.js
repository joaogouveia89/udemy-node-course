function greet(callback){
    console.log('Hello!');
    var data = {
        name: 'Joao Gouveia'
    };
    
    callback(data);
}

greet(function(data){
    console.log("the callback was invoked!");
    console.log(data.name);
})

