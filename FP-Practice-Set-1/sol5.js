// Question
// Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

const getCityNames1 = arrayOfCities => arrayOfCities.map(city => city.name);

const cityName = cityObject => cityObject.name;
const getCityNames2 = arrayOfCities => arrayOfCities.map(cityName);

const getCityNames = arrayOfCities => arrayOfCities.map(({name}) => name);   // using destructuring

const cities = [
    { name: 'New York', population: 8538000 },
    { name: 'Los Angeles', population: 3976000 },
    { name: 'Bangalore', population: 13608000 }
  ];
  
  console.log(getCityNames(cities)); 
  // Output: ["New York", "Los Angeles", "Bangalore"]