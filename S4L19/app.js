var person = {
    firstname: 'Joao',
    lastname: 'Gouveia',
    greet: function(){
        console.log("Hello " + this.firstname + " " + this.lastname);
    }
}

person.greet();