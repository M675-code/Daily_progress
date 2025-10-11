class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var shoaib = new Student("Shoaib","Bhimani");
var shoaib1 = new Student("Shoaib1","Bhimani1");

console.log(shoaib)
console.log(shoaib1)


class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayName(){
    console.log(this.firstName)
}
}

var shoaib = new Student("Shoaib","Bhimani");

shoaib.sayName();


class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayName(){
    console.log(this.firstName)
}
}

var shoaib = new Student("Shoaib","Bhimani");
console.log(shoaib)
shoaib.sayName();

//2nd type of assign
var greetStudent = shoaib.sayName;
greetStudent();


class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    this.sayName = this.sayName.bind(this)
    }
    sayName(){
    console.log(this.firstName)
}
}

var shoaib = new Student("Shoaib","Bhimani");
var greetStudent = shoaib.sayName;
greetStudent();
// using the 5th line || line 53. It is one way to solve the loss of the context value