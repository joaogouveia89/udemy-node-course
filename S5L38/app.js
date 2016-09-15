var obj = {
    name: 'Joao Gouveia',
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name: 'Xulambs'});
obj.greet.apply({name: 'Xulambs'});

// the only difference between apply and apply is that if I have some parenthesis in call function you have to pass all the next params separeted by comma, and in apply you pass them inside an array