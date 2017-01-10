//ES6 - js still uses prototypes, but now instead of saying function can say class and ad constructor function:
//function Person(fullName, favColor) {
//  this.name = fullName;
//  this.favoriteColor = favColor;
//  this.greet = function() {
//    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
//  }
//

//ES6 way
//class Person{
//  constructor(fullName, favColor) {
//  this.name = fullName;
//  this.favoriteColor = favColor;
//  }
//  
//  greet() {
//    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
//  }
//}

// exports object is what webpack expects to be returned by a require() call
//module.exports = Person;

//new ES6 way of exporting a module:
//export default Person;

//import mobile menu module:

