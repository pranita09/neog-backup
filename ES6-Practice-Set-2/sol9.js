// Question
// Write a function that takes a string as input and returns the string in all uppercase letters.

// const stringToUpperCase = str => str.toUpperCase(str);

const stringToUpperCase = str => {
    let newUppercaseString  = "";
    for(let i=0; i<str.length; i++){
        newUppercaseString += String.fromCharCode(str.charCodeAt(i)>96 && str.charCodeAt(i)<123 ? str.charCodeAt(i) - 32 : str.charCodeAt(i));
        // String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
        // str.charCodeAt(i) method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index i.
        // str.charAt(i) method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
    }
    return newUppercaseString;
}

console.log(stringToUpperCase("hello")); // "HELLO"

// ascii value for lower case : 97 to 122
// ascii value to upper case : 60 to 90
