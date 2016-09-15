function Person(fn, ln){
    this.lastName = ln;
    this.firstName = fn;
}

var joao = new Person('Joao', 'Gouveia'); 

Person.prototype.greet = function(){
    console.log("hello " + this.firstName + " " + this.lastName);
};

joao.greet();