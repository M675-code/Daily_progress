var student = {
    name: "Shoaib",
    sayName: function(){
        function bar() { 
            console.log(this)

         }
    }
}
//above sayName method points to student object but if it goes inside the bar function "this" value changes as the window
var student = {
    name: "Shoaib",
    sayName: function(){
        function bar() { 
            console.log(this.name)

         }
    }
}
var name = "Global"

student.sayName();
//It proves inside bar function "this" constext is Global

var student = {
    name: "Shoaib",
    sayName: function(){
        var bar = () => { 
            console.log(this.name)
         }
         bar();
    }
}
var name = "Global"

student.sayName();
//Inside the bar function value of "this" is now student object

var student = {
    name: "Shoaib",
    sayName: function(){
        
        setTimeout(function(){
            console.log(this.name)
        }, 1000)
    }
}
var name = "Global"

student.sayName();
//In above example this beomes Global

var student = {
    name: "Shoaib",
    sayName: function(){
        
        setTimeout(() => {
            console.log(this.name)
        }, 1000)
    }
}
var name = "Global"

student.sayName();
//using arrow function the change in value is solved