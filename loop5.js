"use strict";
let myArray = [];
for (let i = 0; i <= 10; i++) {
    myArray.push(i);
}
console.log("myArray =", myArray);
for (let i = 0; i < myArray.length; i++) {
    console.log(`index:${i}, value:${myArray[i]}`);
}
for (let value of myArray) {
    console.log("value:", value);
}
