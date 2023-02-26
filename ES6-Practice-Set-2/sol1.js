// Question
// Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value. Initial age should be 30.

const person = {
    name: "Joy",
    age: 30
}

console.log(person.age);

person['age'] = 45;
// person.age = 35;   alternate

console.log(person.age);