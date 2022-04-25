
// const sumTo = function(n){
//     let sum = 0;
//     for(let i = 0; i <= n; i++){
//        sum += i;
//     }

//     return sum;
// }

// console.log( sumTo(5) ); // 15
// console.log( sumTo(10) ); // 55

//*****the second mode */

// const sumTo = (n) => (n === 1) ? 1 : n + sumTo(n - 1);
// console.log( sumTo(5) ); // 15
// console.log( sumTo(10) ); // 55

//*********************** */

// const factorial = (n) => (n === 1) ? 1 : n * factorial(n - 1);
// console.log( factorial(5) ); // 120
// console.log( factorial(3) ); // 6 

//********************* */

// const fib = (n) => n <= 1 ? n : fib(n - 1) + fib(n - 2);
// console.log( fib(3) ); // 2
// console.log( fib(10) ); // 55

//******************* */

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: {
//                     value: 5,
//                     next: null
//                 }
//             }
//         }
//     }
// };

// const printList = function(list){

//     console.log((list.value) );

//     if (list.next) {
//         printList(list.next);
//     }
// }
// printList(list);

//******************* */

const printNumbers = function(from,to) {
    let number = from; 

    let timer = setInterval(function() {
        console.log( number );
        if (number === to) {
            clearInterval(timer);
        }
        number ++;
    }, 1000); 
}

//printNumbers(6, 13); // 6, 7, 8, 9, 10, 11, 12, 13
printNumbers(2, 5); // 2, 3, 4, 5