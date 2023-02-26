// Question
// Convert the function getData, into an ES6 function with least amount of characters. Hint: Destructuring


// function getData(person) {
//     const name = person.name;
// 		const address = person.address.city
//     console.log(name); // John Doe
//     console.log(address); // New York
// }


const person = {
    name: 'John Doe',
    address: {
      city: 'New York',
      state: 'NY',
    },
  };
  
  const {name, address, city, state} = person;    // First destructured the object and then used it's keys in the function
  
  // console.log(city, state)
  
  const getData = () => ({
    name,
    city: address.city,
    state: address.state
  });
  
  // const getData = ({name, address: [city]}) => person;    This can also be used but it's output is: { name: 'John Doe', address: { city: 'New York', state: 'NY' } } 
  
  console.log(getData(person));    // { name: 'John Doe', city: 'New York', state: 'NY' }
  
  