// Question
// Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.

const checkForTeam1 = studentObject => studentObject.team === undefined ? {...studentObject, team: 'A'} : studentObject;

const checkForTeam = studentObject => studentObject.team ? studentObject : {...studentObject, team: 'A'};

// const checkForTeam2 = ({firstName, lastName, team: 'A'}) => ({firstName, lastName, team});  
// using default value... not done

// const checkForTeam3 = studentObject => {
//     studentObject.team ?? 'A';
//     return studentObject;
// }

// can we use nullish coalescing operator here???

console.log(checkForTeam({firstName: 'Penn', lastName: 'Ma'}))
// {firstName: 'Penn', lastName: 'Ma', team: A}

console.log(checkForTeam({firstName: 'John', lastName: 'Dee', team: 'B'}))
// {firstName: 'John', lastName: 'Dee', team: B}

console.log(checkForTeam({firstName: 'Priya', lastName: 'Raj'}))
// {firstName: 'Priya', lastName: 'Raj', team: A}