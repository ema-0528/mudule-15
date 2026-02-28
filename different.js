// odd number.........
// for(let i = 0; i<20; i++){
//     if(i%2===1){
//         console.log(i);
//     }
// }
// for(let i = 0; i<20; i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }

// give me the list numbers between 1 to 30 divisible by 5

// for (let i = 1; i <=30; i++){
//     if(i%5===0){
//         console.log(i);
//     }
// }
// for (let i = 1; i <=30; i++){
//     if(i%3===0 || i%5===0){
//         console.log(i);
//     }
// }

// for(let i = 3; i <=40; i++){
//     if(i%5===0 && i%7===0){
//         console.log(i);
//     }
// }

// give me the sum of numbers from 1 to 20 that r divisible by 3 

// let sum = 0;
// for(let i = 1; i<=20; i++){
//     if(i%3===0){
//         console.log(i);
//         sum = sum + i;
//         console.log('sum', sum);
//     }
// }
// console.log('give me sum of numbers', sum);

// give me the sum of numbers from 5 to 120 that r divisible by 4


let sum = 0
for(let i = 5; i <=120; i++){
    if(i % 4===0){
        console.log(i);
        sum = sum + i;
        console.log('sum', sum);
    }
}
console.log('give me some of numbers', sum);