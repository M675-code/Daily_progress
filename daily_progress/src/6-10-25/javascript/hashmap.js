var person = {
    name: "Mahak"
}

var names = []

var person = new Map();

person.set("name","mahak")
person.set("age",25)

var foo = () => {

}

person.set(foo, "Hello World")

console.log(person.get("name"))
console.log(person.size)

person.array.forEach((value, key, map) => {
    console.log(value);
});

console.log(person.keys())
console.log(person.values())
console.log(person.get(foo))

for(var value of person.keys()){
    console.log(value);
}

for(var value of person.values()){
    console.log(value);
}

for(var [key, value] of person.entries()){
    console.log(key);
    console.log(value);
}
