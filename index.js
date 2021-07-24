// 1.Ways to print in javascript
//console.log("Hello World!");
//alert("Wooh hooo!!");
//document.write("This is document write")


// 2.Javascript console api(application programming interface)
// console.log("Hello World!", 4 + 6, "Another log");
// console.warn("This is warning");
// console.error("This is an error");

/*multi
 line 
 comment */



//3. Javascript variables
//What are variables? - Containers to store data values
var number1 = 2;
var number2 = 6;
// console.log(number1+number2);

//4. Datatypes in javascript
//String
var str1 = 'This is a string';
var str2 = "This is a string";

//Number
var num1 = 455;
var num2 = 45.6;

//Objects
var marks = {
    ravi: 34,
    sed: 37,
    lgt: 67
}
// console.log(marks);
//Boolean
var a = true;
var b = false;
// console.log(a);


// Undefined
// var und = undefined;

var abc;
// console.log(abc);

// var n = null;
// console.log(n);

/*
At a very high level, there are two types of data types
in javascript
1. Primitive Data Types: Undefined, Null, Number, String, Boolean, Symbol
2. Refrence Data Types: Arrays and Object

*/
var arr = [1, 2, 3, 4, 4];
// console.log(arr);

//Operators in Javascript
//Arithmetic Operators

var a = 36;
var b = 2;
// console.log("The value is a + b is : ", a+b);
// console.log("The value is a - b is : ", a-b);
// console.log("The value is a * b is : ", a*b);
// console.log("The value is a / b is : ", a/b);

//Assignment Operators

var c = b;
// c +=2;

// c -= 5;
c *= 2;
// c /= 2;
// console.log(c);


//Comparison operator
var x = 34;
var y = 56;
//  console.log(x==y);
//  console.log(x>=y);
//  console.log(x<y);
//  console.log(x>y);

//Logical Operators

//Logical And
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);


//Logical OR
// console.log(true ||true);
// console.log(true|| false);
// console.log(false ||false);

//Logical Not
// console.log(!false);
// console.log(!true);

//Functions in javascript
//
// function avg(a,b){
//     return (a+b)/2;
// }
// c1 = avg(4,6);
// c2 = avg(14, 16);
// console.log(c1, c2);

//Conditional in Javascript
// var age=18;
//Single if statement
// if(age>20){
//     console.log("You can apply for driving liscence.");
// }
// If-else statement
// if(age>20){
//     console.log("You can apply for driving liscence.");
// }
// else{
//     console.log("You can't apply for driving liscence.");
// }

//if-else ladder

// if(age<2){
//     console.log("You can't apply for driving liscence.");
// }
// else if(age<10){
//     console.log("You still can't apply for driving liscence.");
// }
// else{
//     console.log("You can apply for driving liscence.");
// }
// console.log("end of ladder.");

var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// for(var i =0; i<arr.length;i++){
//     if(i==3){
//         break;
//     }
//     console.log(arr[i]);
    
// }
// console.log("break");

// for(var i =0; i<arr.length;i++){
//     if(i==3){
//         continue;
//     }
//     console.log(arr[i]);
    
// }
// console.log("continue");

// arr.forEach(function(element){
//     console.log(element);
// })

let j = 0;
// const ab = 0;

// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// }
// while (j < arr.length);


let myArr=["Fan","Camera",34,null,true]

console.log(myArr.length);  
// myArr.pop(); //removing the last element
// console.log(myArr); 
// myArr.push("Poo");//to add the element
myArr.shift()
console.log(myArr); 