// Question
// Create a function which takes a product object and returns a sentence about the product using ES6 features.

// const printProductDetails1 = ({name, specification: {capacity, size}, price}) => `${name} which is of ${size}, has a capacity of ${capacity}`;

const printProductDetails = ({name, specification: {capacity, size}}) => `${name} which is of ${size}, has a capacity of ${capacity}`;
// desrtucturing of nested object

const product = {
    name: "Apple MacBook Air 2020",
      specification: {
        capacity: "256GB",
        size: "13.3 Inch"
    },
    price: 82900
}
console.log(printProductDetails(product)); // Apple MacBook Air 2020 which is of 13.3 Inch, has a capacity of 256GB.