// Question
// Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.

const podAndTeamAllocation1 = userObject => {
    const newUserObject = {...userObject, teamID: 667543};
    return newUserObject;
}

const podAndTeamAllocation = userObject => ({...userObject, teamID: 667543});

const userData = { firstName : "John", lastName: "Dee" }
console.log(podAndTeamAllocation(userData))
// {firstName: 'John', lastName: 'Dee', teamId: 667543}