// Question 
// Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

const getProductNamesInLowerCase1 = arrayOfProducts => arrayOfProducts.map(product => product.name.toLowerCase());

const getNameInSmallCase = product => product.name.toLowerCase();
const getProductNamesInLowerCase2 = arrayOfProducts => arrayOfProducts.map(getNameInSmallCase);

const getProductNamesInLowerCase = arrayOfProducts => arrayOfProducts.map(({name}) => name.toLowerCase());   // using destructuring

const products = [
    { name: 'Lip Balm', stock: 100 },
    { name: 'PERFUME', stock: 400 },
    { name: 'Socks', stock: 200 }
  ];
  console.log(getProductNamesInLowerCase(products));
  // Output: ["lip balm", "perfume", "socks"]