var Person = require("./newperson.js");
var Student = require("./student.js");

var person = new Person();
person.say();
person.eat();
console.log("-----------------");

var student = new Student();

student.sleep();
student.eat();
student.study();