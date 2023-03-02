// Write a function that takes an array and returns all the numbers in a new array increased by 10.

const addByTen = arrayOfNumbers => {
    let newArray = arrayOfNumbers.map(num => num + 10);
    return newArray;
}

// console.log(addByTen([1,2,3,4,5]));

// Write a function that takes an array and returns a new array having even numbers multiplied by 20 and odd numbers multiplied by 30.

const multiples = numArr => numArr.map(num => num % 2 === 0 ? num * 20 : num * 30);

// Write a function that takes an array and returns a new array having even indexes numbers subtracted by 2 and odd indexes numbers added by 3.

const changesInNumbers = numArr => numArr.map((num, index) => index % 2 === 0 ? num - 2 : num + 3);
// console.log(changesInNumbers([1,2,3,4,5,6]))


//Write a program using destructing to find a number in this object which is divisible both by 3 and 5

const obj = {
    a: 10,
    b: 12,
    arr: [10, 8, 15, 14, 30]
}

const divisibility = ({a, b, arr}) => {
    let numArr = [a, b, ...arr];
    let arrOfMultiples = [];
    for(let num of numArr){
        if(num%3===0 && num%5===0){
            arrOfMultiples[arrOfMultiples.length] = num;
        }
    }
    return arrOfMultiples;
}

// alternate
const { a, b, arr } = obj;
const result = [a, b, ...arr].filter(elem => elem%3===0 && elem%5===0);
// console.log(result);

// console.log(divisibility(obj));


//Write a function that takes the above object and returns a new array containing the company names.
//Output: ['Chalo', 'Razorpay', 'No Broker']

const obj1 = {
    details: [
        {name: 'Ankit', company: 'Chalo'},
        {name: 'Rohan', company: 'Razorpay'},
        {name: 'Shivam', company: 'No Broker'}
    ]
}

const companies = ({details}) => details.map(person => person.company); 
// console.log(companies(obj1));

const obj2 = {
    details: [{name: 'Ankit', company: 'Chalo'},
          {name: 'Rohan', company: 'Razorpay'},
          {name: 'Shivam', company: 'No Broker'}
                                 ]
    }
//Write a function that takes the above object and returns a new array containing the company names for people having names starting with A.

const companies1 = ({details}) => details.filter(person => person.name[0]=== 'A' ?? person.company ); 
console.log(companies1(obj2));