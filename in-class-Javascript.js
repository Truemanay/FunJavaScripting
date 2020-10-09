

console.log("hi there!");

// Array created
var items = [1, 2, 3, 4, 5, "Auggie"];

console.log("Before reverse: " + items);
reverseArray(items);
console.log("After reverse: " + items);
console.log("================================");
reverseArrayShift(items)
console.log("Array Shift: " + items);
// reverseArrayPOP(items)
// console.log("Array POP: " + items);

nextBDAY(12, 16);


//Reverse array function
function reverseArray(mary){

  var left = 0;
  var right = mary.length - 1;

  while(left < right){
    var temp = mary[right];
    mary[right] = mary[left];
    mary[left] = temp;
    left++;
    right--;
  }

}
//For some reason it the console returned an error on my pop function.
// function reverseArrayPOP(lerry){
//
//   var tempArray = [];
//   var left = 0;
//   var right = lerry.length - 1;
//
//   while(lerry > -1){
//     var tempPop = lerry.pop();
//     tempArray.push(tempPop);
//
//      left++;
//      right--;
//
//   }

//Reverse array function using shift
function reverseArrayShift(bob){

  var tempArray = [];
  var left = 0;
  var right = bob.length - 1;

  while(bob > -1){
    var tempShift = bob.shift();
    tempArray.unshift(tempShift);

     left++;
     right--;

  }

}

function nextBDAY(month, day){
  var currDate = new Date();
  var currMonth = currDate.getMonth();
  var currDay = currDate.getDate();
  var birthday = new Date(2020, month, day);
  var diff = birthday - currDate;
  diff = diff / 1000;
  diff = diff / 86400;
  console.log(currMonth + ", " + currDay + " diff: " + diff);
}
