
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

// Fix the code below so that it evaluates to true
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