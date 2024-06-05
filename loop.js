"use strict";
// Empty Array holding Objects
let myWork = [];
// / For loop
for (let a = 1; a <= 10; a++) {
    let lesson = {
        name: `Lesson ${a}`,
        status: a % 2 == 1 ? true : false
    };
    myWork.push(lesson);
}
console.log(myWork);
