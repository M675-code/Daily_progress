var numbers = [1,5,8,2,10];

    numbers.filter(function(value){
    console.log(value)
}) 


var numbers = [1,5,8,2,10];

var filteredNumber = numbers.filter(function(value){
    return value >= 5
})

console.log(filteredNumber)