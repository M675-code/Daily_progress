//ES6/Babel

var student = {
    name: "Shoaib",
    sayName: function(){
        console.log(this.name)
    }
}

student.sayName();

//if method is assign into another variable then binding of this is lost example below
var student = {
    name: "Shoaib",
    sayName: function(){
        console.log(this.name)
    }
}

var greetStudent = student.sayName;

greetStudent();

//call
student.sayName.call({name:"Test"})

//2 things are going on 1. Function running 2. context set for "this"
var greetStudent = student.sayName.bind({
    name: "Hi from Bind"
});
