var add = function(a){
    return a
}
console.log(add(4))

var add = function(a){
    return function(){
        alert(a)
    }
}
var secondfunc = add(4);
var secondfunc1 = add(14);

secondfunc()
secondfunc1()

var addby3 = function(a){
    return function(b){
        return b + a
    }
}

console.log( secondfunc(3))
console.log( secondfunc(12))



var addby3 = function(a){
    return function(b){
        return b + a
    }
}

var addby6 = function(a){
    return function(b){
        return b + a
    }
}

var secondfunc = addBy3(3); 
var secondfunc1 = addBy6(6); 

console.log( secondfunc1(3))
console.log( secondfunc1(12))



var addby3 = function(a){
    return function(b){
        return b + a
    }
}

console.log(addby3(3)(4));    