
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
  // Add your code below this line
  for (let i in y){
    if (y.hasOwnProperty(i)){ownProps.push(i)}
  }
