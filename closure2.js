function greeter(name, age) {
    var message = name + " says howdy!! He is " + age + " years old";
    return function greet() {
        console.log(message);
    }
}

var jamesGreeter = greeter("James", 34);
var willGreeter = greeter("Will", 28);

jamesGreeter();
willGreeter();