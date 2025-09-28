var student = {
    firstName: "Mahak" 
}
student.firstName = "MJ"

console.log(student)


var student1 = {
    firstName: "Mahak" 
}

var newStudent = {
    ...student1,
    firstName:"MJ",
    age: 26
}
console.log(newStudent)
console.log(student1)

//Concat
//Filter
//Map
//Reduce
//Spread operator