// Question
// Write an ES6 function that takes an array of objects and returns the sum of all ages.

const sumOfAges1 = arrayOfObjects => {
    const [{age: ageOne}, {age: ageTwo}, {age: ageThree}, {age: ageFour}] = arrayOfObjects;
    return ageOne + ageTwo + ageThree + ageFour;
}
// can we make it more dynamic??? like using spread or anything else

const sumOfAges = arrayOfObjects => {
    let sum = 0;
    for(let i=0; i<arrayOfObjects.length; i++){
        sum += arrayOfObjects[i].age;
    }
    return sum;
}

var array = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
];

console.log(sumOfAges(array)); // 121