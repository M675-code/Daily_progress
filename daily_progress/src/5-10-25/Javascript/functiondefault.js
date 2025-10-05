//Use ES6 / Babel 
function foo(name, age){
    console.log(name || "mahak");
    console.log(age || 24)
}

foo();

function foo(name = "mahak", age=24){
    console.log(name);
    console.log(age)
}

foo("Liam",51);