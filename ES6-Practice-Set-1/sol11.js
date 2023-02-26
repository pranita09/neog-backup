// Question
// Console individual values of the product object using object destructuring.

const product = {
    title: "iPhone",
    price: 5999,
    description: "The iPhone is a smartphone developed by Apple"
}
 
// Your ES6 code here
const {title, price, description} = product;
  

console.log(title); // iPhone
console.log(price); // 5999
console.log(description); // The iPhone is a smartphone developed by Apple