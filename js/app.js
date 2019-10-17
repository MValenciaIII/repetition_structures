// Loops

/*
A repetition structure causes a statement or set of statements to executet repeatedly
This Allows a programmer to avoid duplicate code

While loop = Whil e a condition is true, do some task

Do-While loop 
Do some task, while condition is true
    Do
    Statement 
    Statement
    While condition




Do-Until 
Do some task, while a condition is false (or until it's true)

With all loops, be careful not to create infinite loops = always provide a way to break out



While loop - pretest loop
    While condition
    statement
    statement
    End While.


Working with modules and loops 
 To run a program multiple times, Modules con be put within a loop.



Count-controlled loops
 Iterates a specfic number of times


 Sentinel is a special value that marks the end of a list of values

 Loops can be nested.


 
*/

// for (let index = 0; index < 10; index++) {
//     const element = [index];
//     console.log(element);    
// }  // gives us not defined

// for (var index = 0; index < 10; index++) {
//     const element = [index];
//     console.log(element);    
// } == gives us 11

//Var is global scoped // let is local scoped and const is local as well.
// Use varibles i, j, k for loops/functions

// console.log(index)

// var i = 0
// while (i < 10) { //is true
//     //do stuff
//     console.log(i);

//     i++;
// }

// var notAgreed = false;
// while (!notAgreed && (times <= 1001)) {//is true
//     //do stuff
//     //show terms popup
//     //click handler button
//     // set timer for every 30 minutes
//     //if click
//         //notAgreed = false
//     //if times == 1000
//         //notAgreed = true;
//         //lock account = true;

//     //times++
// }

// do {
//     //fire popup
//     // if click
//         //notAgreed = true
//     //do stuff at least once
// } while (condition) { //if true continue looping
    
// }

for (let i = 0; i < 10; i++) {
    
    for (let j = 10; j > 0; j--) {
        
        console.log(j-i);
        
    }
}

