// 4.Exploring Objects with for...in Loop
// 1
let myObject:any = {
    Item_1:  " Phone ",
    Item_2:  " Car ",
    Item_3:  " Airpods "
}
// 2
for(let obj in myObject){
    console.log(`Property: ${ obj }, value: ${ myObject[obj] }`)
}
