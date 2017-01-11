//require() is a node.js function and works with gulp, but not with regular js files to be displayed in browsers. therefore need to install webpack
//var $ = require('jquery');
//
//node wy of importing module:
//var Person = require('./modules/Person');
//
//new js ES6 native way
//import Person from './modules/Person';
//
//class Adult extends Person{
//  payTaxes(){
//    console.log(this.name + " owes 0 in taxes");
//  }
//}
//test webpack with browserSync
//alert("webpack test3 test4 test5");
//
//var john = new Person("John Doe", "blue");
//john.greet();
//
//var jane = new Adult("Jane Smith", "red"); //jane now belongs to the Adult class
//jane.greet();
//jane.payTaxes();

//code for mobile menu:

//new js ES6 native way of importing modules
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
//var revealOnScroll = new RevealOnScroll();

import $ from 'jquery';

//these values will be used placed in the RevealOnScroll params
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");