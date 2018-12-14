
// checking where to add a num to an array
function IndexNum(arr, num) {
    arr.push(num);
    arr.sort(function(a, b){return a-b});
    return arr.indexOf(num);
};
// Fibonacci
function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
// finding a value
function find(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i=0;i<test.length;i++) {
      if (target.indexOf(test[i]) < 0)
        return false;
    }
    return true;
   }
   //found this on FreeCodeCamp
   function x(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let y = new x("yoy");
  let ownProps = [];
  
  for (let i in y){
    if (y.hasOwnProperty(i)){ownProps.push(i)}
  }
  // another one
  function Lion(name) {
  this.name = name;
}

let simba = new Lion("Snoopy");

Dog.prototype.isPrototypeOf(simba);  // => true


Object.prototype.isPrototypeOf(Lion.prototype);

// using the arguments with es5
function isFullAge(){
  //console.log(arguments);
  var arr3 = Array.prototype.slice.call(arguments);
  arr3.forEach(function(cur){ console.log((2018-cur)>= 18)});
}
//es6
function isFulAge(limit,...years){
years.forEach(cur=> console.log((2018-cur)>=limit))
}
//isFulAge(18,1990,1888,1965,2016)


// Map()
let question = new Map();
question.set('question','what is the best game of all time?');
question.set(1,'ChronoCross');
question.set(2,'FinalFantasy');
question.set(3,'MetalGear');
question.set('correct',1);
question.set('true','correct answer is 1')
question.set('false','Wrong, please don\'t try again' );
//question.get(1);
//question.delete();
//question.size();
//question.clear();
if (question.has(3)){console.table(question)}
question.forEach((value,key)=> console.log(`the key is ${key} and the value is ${value}`));
for (let [key,value] of question.entries()){
if (typeof (key) ==='number'){
    console.log(`the answer of ${key} is ${value}`);
}
}
const ans = parseInt(prompt('please enter the correct answer'));
question.get('correct')=== ans? console.log(question.get('true')):console.log(question.get('false'));
//console.log(question.get(ans===(question.get('correct'))));
//constructor in es5
/*
var Person = function(name,age,year){
  this.name = name;
  this.age=age;
  this.year = year;
}
Person.prototype.calcAge = function(){
  var age = new Date().getFullYear - this.year;
  console.log(age);
}
var john = new Person('john', 34,1989);
*/
//classes in es6
class Person{
    constructor(name,age,year){
        this.name = name;
        this.age = age;
        this.year = year;
    }
    /*now we can add our code in here.
    So there's no function keywords here, no prototype
    like we had to do here.
    No, all we do here is to simply add this new method
    right to our class.
    And note that we don't have any separating punctuation here,
    okay, so no commas or no semicolons
    */
    calcAge(){
      var age = new Date().getFullYear - this.year;
  console.log(age);
    }
}