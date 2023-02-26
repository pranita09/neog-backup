// Question
// Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

const getMaxElement = array => {
    let max = array[0];
    for(let i=0; i<array.length; i++){
        if(array[i]>max){
            max = array[i];
        }
    }
    return max;
}

const getMaxElement1 = array => Math.max.apply(null, array);
const getMaxElement2 = array => Math.max.apply(0, array);   // refer apply() method in w3schools, can replace 0 with " " or Math

// If we use only Math.max on array it will print NaN (Not a Number) in the console as it does not work for the arrays.
// The apply() Method − To solve the above problem or to make Math.max work for the arrays we use apply() method with it. The apply() method is invoked using two arguments one is the given this value, and another is the array to which we want to operate operations.
//Here, we are passing the null to the apply() method, because the first argument to the apply() method that was this is not used here, so we use null in place of that.

let array = [4,78,8,3,6,0,12,34]
console.log(getMaxElement2(array)) // 78