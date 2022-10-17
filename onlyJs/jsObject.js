// Understanding callback and promises in javascript.
// function pa(){
//     console.log("A");
//     setTimeout(()=>{
//         console.log("Printed");
//     },0);
//     console.log("C");
// }
// pa();

const { resolve } = require("path");

//  const { resolve } = require("path");


// // promises in javascript.

// let completed = true;
// const learnJs = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(completed){
//             resolve("You have completed learning javascript");
//         }else{
//             reject("you don't know javascript at all");
//         }
//     },3000);
// })

// learnJs.then((message)=>{
//     console.log(message)},(error)=>{
//         console.log(error);
//     }
// );


// consuming promises
// learnJs
// .then((message)=>{console.log(message)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{
//     console.log("The promise is completed");
// })


// const gau = new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     resolve(10);
// },3000);
// });

// // consuming promises.
// // This is called promise chaining.

// gau.then((result)=>{
//     console.log(result);
//     return result*2;
// }).then((result)=>{
//     console.log(result);
//     return result*2;
// }).then((result)=>{
//     console.log(result);
// })

// THERE ARE THREE TYPES OF PROMISES
// 1. PARALLEL  2. RACE  3.SEQUENCIAL

// const promise1 = new Promise((resolve)=>{
//     resolve("Gautam");
// })
// const promise2 = new Promise((resolve)=>{
//     resolve("Kumar");
// })
// const promise3 = new Promise((resolve)=>{
//     resolve("Pandey");
// })

//   async function getName(){
//     let firstName = await promise1;
//     let secondName = await promise2;
//     let thirdName = await promise3;
//    return `${firstName} ${secondName} ${thirdName}`;
// }

// getName().then((resolve)=>{
//     console.log(resolve);
// })


// async function getData(){
//     return await Promise.resolve('I made it!');
// }
// const data = getData();
// console.log(data);

// async function f() {



//     let result = 'first!';
    
    
    
//     let promise = new Promise((resolve, reject) => {
    
    
    
//     setTimeout(() => resolve('done!'), 1000);
    
    
    
//     });
    
    
    
//     result = await promise;
    
    
    
//     console.log(result);
    
    
    
//     }
    
    
    
//     f();
    
//     async function getData() {



//         return await Promise.resolve('I made it!');
        
        
        
//         }
        
        
        
//         const data = getData();
        
        
        
//         console.log(data);
        
            
async function getData() {



    return await Promise.resolve('I made it!');
    
    
    
    }
    
    
    
    const data = getData();
    
    
    
    console.log(data);
    
    