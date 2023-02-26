// Question
// Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.

const findPerson1 = (arrayOfPeople, name) => {
    for(let i=0; i<arrayOfPeople.length; i++){
        if(arrayOfPeople[i].name===name){
            return arrayOfPeople[i];
        }
    }
    return null;
}

// how to do it in more shorter way??

// const findPerson = (arrayOfObjects, name) => arrayOfObjects.map((eachPerson)=> eachPerson.name === name ?  eachPerson : null); // still wrong

console.log(findPerson1([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }], "Akhil"))
