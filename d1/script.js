// let name = 'Peter Griffin'; //string

// let num1 = 12; //numeric

// let num2 = 3; // numeric

// console.log(num1 + num2);

// console.log("Hello World");

// console.log("Using JavaScript");

// single or double quotes ok
// "Hello World"
// 'Hello world'

//concentation

/*"charlie" + "brown" */ //"charliebrown"

//Escape Characters starts with "\"
// "Singin \"Do wah diddy, diddy,dum diddy do\" "

// "This is a backslash: \\"

// let x = 2;
// let y = 3;

// console.log(x);
//expected output : 2

// console.log(x = y + 1); // 3 + 1
//expected output : 4

// console.log(x = x * y); // 4 * 3
//expected output : 12

//let bar = 5
//number + number -> addition
//bar += 2 // 7

//expected output is 7
//console.log(bar);

//let bar = 5
//number - number -> subtraction
//bar -= 2 // 3

//expected output is 3
//console.log(bar);

//let bar = 5
//number * number -> multiply
//bar *= 2 // 10

//expected output is 10
//console.log(bar);

let bar = 5
//number / number -> division
bar /= 2 // 2.5

//expected output is 2.5
console.log(bar);

// comparison operators

/* JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) 
is only true if the operands are of the same type and the contents match. The more commonly-used abstract comparison (e.g. ==) 
converts the operands to the same type before making the comparison. */

//strict
//console.log(1 === 1);
//expected output true

//console.log("1" === 1);
//expected output false


// not strict
//console.log(1 == 1);
//expected output true

//console.log("1" == 1);
//expected output true


//pang check if equal ba o hindi
//inequality(not strict)

//console.log(1 != 2);
//expected output true

//console.log(1 != '1');
//expected output false

//inequality (strict)
//console.log(3 !== '3');
//expected output true

//console.log(1 !== '1');
//expected output true

// relational operators

// let x = 4;
// let y = 3;

// console.log(x < y);
//expected output false

// console.log(x > y);
//expected output true

// console.log(x >= y);
//expected output true

// console.log(y>=x);
// expected output false

// console.log(x <= y);
//expected output false

// console.log(y <= x);
// expected output true

//logic operators

/* There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT). 
Logical operators are typically used with Boolean (logical) values. When they are, they return a Boolean value. 
However, the && and || operators actually return the value of one of the specified operands, 
so if these operators are used with non-Boolean values, they may return a non-Boolean value. */
// && true din dapat pareho para maging true

// console.log((19> 11) && (23 <50));
// //returns true

// //|| dapat true pareho pag isa true, true na lahat


// console.log((19> 11) || (23 <50));
// //returns true

// console.log((19> 11) || (23 ===50));
// //returns true

// //Not operator(!) rinereverse dahil sa !

// console.log((19> 11) || (23 <50));
// //returns true

// console.log((19> 11) || (23 ===50));
// //returns true

// console.log(!(100<150));
// //returns false

//Conditonal Statements
/* In any programming language, the code needs to make decisions and carry out actions accordingly depending on different inputs. 
For example, in a game, if the player's number of lives is 0, then it's game over. 
Conditional statements allow us to represent such decision making in JavaScript, 
from the choice that must be made to the resulting outcome of those choices.
 */

 // let x = 10;
 // if (x === 10){
 // 	console.log('Equal to 10');
 // }

 //else{
 	//console.log('it is not equal to 10');
 //}


let x = 23;
 if (x === 10){
 	console.log('Equal to 10');
 }

 else if (x > 10) {
 	console.log('x is greater than 10');
 }

 else {
 	console.log('x is less than 10');
 }







