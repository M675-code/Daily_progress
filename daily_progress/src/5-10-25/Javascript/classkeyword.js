//use ES6/babel 
function Dog(name, age){
    this.name = name;
    this.age = age;
}

class Dog{
    constructor(){
        this.name = name;
        this.age = age;
    }
    bark() {
        alert(this.name);
    }
}

class BullDog extends Dog{
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }
}

var dog1 = new BullDog("Bruno", 8, "BullDog")

dog1.bark();
