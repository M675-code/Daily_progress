var fruits = ["banana"];
        //
        //fruits.push("Apple")
        let newFruits = fruits.concat("Apple")
        console.log(fruits)
        console.log(newFruits)

var fruits = ["banana","apples"];
fruits.splice(0,1)
console.log(fruits);


var fruits = ["banana","apples"];
const newFruits1 = fruits.filter((fruit, index) =>{
    return index !== 0
})

console.log(newFruits1)
console.log(fruits)


var fruits = ["banana","apples"];
fruits[0] ="Water Melon"
console.log(fruits)

var fruits = ["banana","apples"];
const newFruits2 = fruits.map((fruit) =>{
    return fruit + "Mapped"
})

console.log(newFruits2)

var fruits = ["banana","apples"];
const newFruits3 = fruits.map((fruit, index) =>{
    if(index === 0){
    return "Water melon"
    }

    return fruit;
})

console.log(newFruits3)
console.log(fruits)

        