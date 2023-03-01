// Question
// Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.

const podAndTeamAllocation1 = userObject => {
    const newUserObject = {...userObject, teamID: 667543};
    return newUserObject;
}

const podAndTeamAllocation = userObject => ({...userObject, teamID: 667543});

const userData = { firstName : "John", lastName: "Dee" }
// console.log(podAndTeamAllocation(userData))
// {firstName: 'John', lastName: 'Dee', teamId: 667543}


//Write a arrow function which takes an object and prints the particular sentence
//My name is Ankit Singhania. I scored 99 in Math and 96 in Computer from ISC board.

const myInfo = obj => {
    const {name, school: {board: [boardName], marks: [{subject: subOne, percent: percentOne}, {subject: subTwo, percent: percentTwo}]}} = obj;
    return `My name is ${name}. I scored ${percentOne} in ${subOne} and ${percentTwo} in ${subTwo} from ${boardName} board.`;
}

const myInfo2 = ({name, school: {board: [boardName], marks: [{subject: subOne, percent: percentOne}, {subject: subTwo, percent: percentTwo}]}}) =>  `My name is ${name}. I scored ${percentOne} in ${subOne} and ${percentTwo} in ${subTwo} from ${boardName} board.`;

// part 2 of above: what if we have multiple subjects in marks array of objects

const myTotalInfo = ({name, school: {board, marks}}) => {
    return `My name is ${name}. I have scored ${marks.map(obj => `${obj.percent} marks in ${obj.subject}`)} from ${board} board.`;
}

const myTotalInfo2 = ({name, school: {board, marks}}) => {
    return `My name is ${name}. I have scored ${marks.map((obj, index) => `${obj.percent} marks in ${obj.subject} ${index === marks.length-2 ? "and" : index === marks.length - 1 ? " " : ","} `).join(" ")} from ${board} board.`;
}

// const makeSentence = ({name, school: {board, marks}}) => {return `My name is ${name}. I scored ${marks.map((obj, index) => ${obj.percent} marks in ${obj.subject} ${index === marks.length -2 ? "and" : index === marks.length -1 ? " " : ","}).join(" ")}  from ${board[0]} board.`}

const obj ={
    name: 'Ankit Singhania',
    school: {
        board:['ISC'],
        marks: [{
            subject: 'Math',
            percent: 99
        },
                {
            subject: 'Computer',
            percent: 96
        },
        {
            subject: 'Science',
            percent: 90
        }]}
}

// console.log(myTotalInfo2(obj));




// write a function which will take an array of "n" numbers as an argument and will return the object containing maximum number, minimum number and avg of all numbers in array.

 // sampleOutput -
 // console.log(getOutput([1,2,3,4,5])) // output : {max: 5, min: 1, avg: 3}

const getOutput = (arr) => {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i]
        }
        sum += arr[i];
    }
    let avg = sum/arr.length;
    return {max, min, avg};
}

console.log(getOutput([1,2,3,4,5])) // output : {max: 5, min: 1, avg: 3}
