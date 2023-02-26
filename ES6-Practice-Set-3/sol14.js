// Question
// Create a function which takes in the given object and returns a sentence which indicates name of the person and where the person lives.

// const printData = ({name, postalCode, country}) => `${name} lives in ${country}`;
const printData = ({name, country}) => `${name} lives in ${country}`;

const userData1 = {
    name: 'Gaurav',
    postalCode: '12134',
    country: 'Japan',
}
console.log(printData(userData1)); // Gaurav lives in Japan
  
  
const userData2 = {
    name: 'Pritam',
    postalCode: '560223',
    country: 'India',
}
console.log(printData(userData2)); // Pritam lives in India