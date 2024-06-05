"use strict";
let myObject = {
    Item_1: " Phone ",
    Item_2: " Car ",
    Item_3: " Airpods "
};
for (let obj in myObject) {
    console.log(`Property: ${obj}, value: ${myObject[obj]}`);
}
