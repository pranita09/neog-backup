// Question
// Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

const formatProduct = ({name, price, inStock}) => inStock ? `${name} costs INR ${price} and is in stock.` : `${name} costs INR ${price} and is out of stock.`; 

// Destructured the object and used template literals

const product = {
    name: 'Socks',
    price: 249,
    inStock: true,
};

const product2 = {
    name: 'Shoes',
    price: 2000,
    inStock: false,
};

const message = formatProduct(product);
console.log(message);
// Socks costs INR 249 and is in stock.

const message2 = formatProduct(product2);
console.log(message2);
// Shoes costs INR 2000 and is out of stock.