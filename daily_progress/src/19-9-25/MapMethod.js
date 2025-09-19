var input = [1,2,3];

var output = input.map(function(values,index,array){
    console.log(values);
});

var input = [1,2,3];

var output = input.map(function(values){
    return values * 2;
});

console.log(output);
console.log(input);