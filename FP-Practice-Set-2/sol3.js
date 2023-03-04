// Question 3
//Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.

const employeeData = [
	{name: "ram", dept: "marketer"}, 
	{name: "Radha", dept: "SDE"},
	{name: "shyam", dept: "finance professional"},
]

// Your code here
const greetEmployeeMessages = arrayOfEmployees => arrayOfEmployees.map(({name, dept}) => `Hi ${name} we are glad to have you as a ${dept}`)


console.log(greetEmployeeMessages(employeeData));
// Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']