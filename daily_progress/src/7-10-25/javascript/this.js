//Default Binding
function foo() { 
    console.log(this.name)
 }

 var name = "Mahak"

 foo();

 //Call, Apply

 function foo(arg1, arg2) { 
    console.log(this.name)
    console.log(arg1)
    console.log(arg2)
    
}

 foo.call({
    name: "Reactjs"
 }, "Angular", "Ember");

//  foo.call({
//     name: "Mobx"
//  });

//Apply

function foo(arg1, arg2) { 
    console.log(this.name)
    console.log(arg1)
    console.log(arg2)
    
}

 foo.apply({
    name: "Reactjs" }, ["Angular", "Ember"]);
