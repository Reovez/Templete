
// checking where to add a num to an array
function IndexNum(arr, num) {
    arr.push(num);
    arr.sort(function(a, b){return a-b});// return a-b or a+b makes a decending or asending array
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
  
  for (let i in y){ // for (let i of y ) should be used here
    if (y.hasOwnProperty(i)){ownProps.push(i)}// has OwnProperty returns a boolean
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
// question.keys()
//question.values();
//question.entries();
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
//class definitions are NOT hoisted
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
      var age = new Date().getFullYear() - this.year;
  console.log(age);
    }
    /*static is basically a method that is attached
to this class definition,
and this class definition is under the hood,
behind the scenes, so it won't be inherited by john, but can be used like this: Person.greeting()
*/
    static greeting(){console.log('hi')}
}
const john = new Person('john', 34,1878)
//inheritence
//es5
  //we have to call the superclass function constructor with this as a this keyword
  //So, when creating a new athlete object,(new) creates a new empty object,
  //called the athlete function constructor,and sets the this keywordto the newly created empty objects.
  //in execution context that we're in here,
//the this keyword will point to the new empty object.
//Now, if we want a person property's name,
//year, and age to be set
//on the new athlete object,
//then we need to call the person function constructor
//with the this keyword also set
//to our newly created athlete object
  
var athlete5 = function(name, age,year,olimpicGames, medals){
  Person.call(this,name,age,year);
  this.olimpicGames = olimpicGames;
  this.medals= medals;
}
athlete5.prototype = Object.create(Person.prototype);
athlete5.prototype.wonMedal = function(){
  this.medals++;
  console.log(medals);
}
var jonny = new athlete5('jonny',43,2017,3,4);
//es6
class Person{
  constructor(name,age,year){
      this.name = name;
      this.age = age;
      this.year = year;
  }
}
class athlete6 extends Person{
  constructor(name,age,year,olimpicGames,medals){
     super(name,age,year);
     this.olimpicGames= olimpicGames;
     this.medals=medals;
  }
  wonMedals (){
    this.medals++;
    console.log(medals);
  }
}
/*var bubbleSort = function(arr){
  var counter = 1
  var temp =0;
  var lastDot = arr.length-1;
  while(counter !=0){
  for (let i =0; i<arr.length;i++){
    if (arr[i]>arr[i+1]){
      temp = arr[i];
      arr[i]=arr[i+1];
      arr[i+1]=temp;
      counter = counter+1;
    }else{
    counter =0;
    }
  }
}
return arr
}
*/
function swap(a, b, array) { // a = array[j], b = array[j + 1]
	let left = array[b]; //array[j+1]
	let right = array[a]; //array[j]
	array[a] = left;
	array[b] = right;
}


function bubbleSort(array) {
	let swapCounter = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				swap(j, j + 1, array);
				swapCounter++;
			}
		}
	}
	// console.log(swapCounter)
	return array;
}
// a code that i want to finish later
class TownElement{
  constructor(name,buildYear) {
      this.name = name;
      this.buildYear = buildYear;
  }

}

class Park extends TownElement{
  constructor(name,buildYear,noTree,parkArea,age){
      super(name,buildYear);
      this.noTree = noTree;
      this.parkArea = parkArea;
      this.age = age;
      
  }
  Density(){ console.log(`${parseInt(this.noTree/this.parkArea)} %`);};

};

class Street extends TownElement{
  constructor(name,buildYear,size=3,length){
      super(name,buildYear);
      this.size = size;
      this.length = length;
      
    
  }
  ClassifyStreet{
      const classification= new Map();
      classification.set(1,'tiny');
      classification.set(2,'small');
      classification.set(3,'normal');
      classification.set(4,'big');
      classification.set(5,'huge');
      console.log(`${this.name}, built in ${this.buildYear} is a ${classification.get(this.size)} street`);
  }

 
}
//setTimeOut and how it works
function getRecipe(){
 /* setTimeout(() => {
       const recipeID = [243,7765,43,5453,6546];
       console.log(recipeID);
       setTimeout((id)=>{
           const recipe = {title: 'pizzaHut', publisher: 'yours truly'}
          console.log(`${id} = ${recipe.title} by ${recipe.publisher}`);
          setTimeout(publisher => {console.log(publisher)},3000,recipe.publisher)
      },1000,recipeID[2])
  }, 1500);
  
*/
};
//promises
// promises accept (resolve, and reject) it's basically returning something, to use what you returned, use (then, catch)
// the argument used with (then ,catch) is the return result of resolve and reject
const getIDs = new Promise((resolve,reject)=>{
setTimeout(()=>{
        resolve([3,4,565,56,56,565,656])
},1599)
})
getIDs.then(IDs=> console.log(IDs))
.catch(error=> console.log('error'));
const recipeID = recID=>{
  return new Promise((resolve,regect)=>{
    setTimeout(ID=>{
      const recipe = {title: 'whatever', publisher: 'manager'};
      resolve(`${ID}: ${recipe.title}`)
    },1455,recID)
    

  })
}
//async function
// async can solve the .then hell by using await
//await can only be used inside an async function
//async will always return a promise

async function getRecipesAW(){
  const IDs = await(getIDs)
  console.log(IDs);
  const recipe = await getRecipe(IDa[2]);
  console.log(recipe);
  const related = await getRelated('Hayward');
  console.log(related)
  return recipe;
}
getRecipesAW().then(result=> console.log(result));
//fetch()
//without a server or an access you can use https://crossorigin.me/ or https://api.codetabs.com/v1/proxy/ or http://cors-anywhere.herokuapp.com/ before the url of most websites to make it work
// crossorigin would send data up to 2mb 
// fetch returns a promise, so deal with .then and .catch if you want to use the result
fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2487956/')
.then(result =>{
  console.log(result)
  // the result will return in json format and if we want to handle that we can change it to json
  return result.json()
})
.then(jResult=> {console.log(jResult)})
.catch(error=> {console.log(error)});
// we better  wrap it in a function like this:
function getWeather(woeid){
  fetch(`https://crossorigin.me//https://www.metaweather.com/api/location/${woeid}/`)
.then(result =>{
  console.log(result)
  return result.json()
})
.then(jResult=> {console.log(jResult)})
.catch(error=> {console.log(error)});
}
getWeather(2487956)
//async await
async function getWeatherAW(woeid){
  const result = await fetch(`https://www.metaweather.com/api/location/${woeid}/`);
  const data = await result.json();
  const today = data.consolidated_weather[0]
  console.log(`temperature in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
}
getWeatherAW(2487956)
// try and catch = it's availabe in javascript and can be used easily, try a code and if it doesn't work, then catch

async function getWeatherAW(woeid){
  try{
  const result = await fetch(`https://www.metaweather.com/api/location/${woeid}/`);
  const data = await result.json();
  const today = data.consolidated_weather[0]
  console.log(`temperature in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
  //async function will return a promise so we do this 
  return data
}catch(error){
  console.log(error);
}

}
// then if we try to store the data in a value, this wont work:
//const datainfo = getWeatherAW(2487956)
// you have to use .then
let dataInfo = getWeatherAW(2487956).then(data=>{dataInfo = data});
getWeatherAW(2487956)
//using reduce to triverse through an object
var averageRating = watchList.filter(x => x.Director === "Christopher Nolan").map(x => Number(x.imdbRating)).reduce((x1, x2) => x1 + x2) / watchList.filter(x => x.Director === "Christopher Nolan").length;
//finding max and min, could be usefull
function sumAll(arr) {
  var total = 0;
  var max = Math.max(...arr);
  var min = Math.min(...arr);
while (min<=max){
  total = total+min;
  min++;
}
return total
}

sumAll([1, 4]);