// 1. Creating a Lesson Plan(Using for loop )
// Step 1
let myWork:
   { name: string,
     status: boolean,
   }[] = []
// Step 2
for(let a = 1; a<=10; a++){
    let lesson = {
        name: `Lesson ${a}`,
        status:  a % 2 == 1 ? true : false
};
// Step 3
myWork.push(lesson);
}
// Step 4
console.log(myWork);


