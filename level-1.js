// Question 1
// Declare and initialise a variable with a string value.

var car = "Audi";

// Question 2
// Create an object variable called person and give it two properties (a key and a value) of your choice.

var person = {
    name: "Shamil",
    age: 26
}

// Question 3
// Create a variable called outOfStock and assign it a boolean value. 
// Create an if else statement that checks the value of outOfStock.
// If it is true, console log "Out of stock". Otherwise log "In stock".

var outOfStock = true; 

if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

// Question 4
// Create an array of five numbers. Loop through the array and console log each value.

var numbers = [15, 01, 10, 16, 12];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// Question 5
// Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.

for (var count = 15; count <= 25; count++) {
    console.log(count);
}

// Question 6
// Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.

for (var count = 15; count <= 25; count++) {
    console.log(count);
}
if(count === 20) {
    console.log(count);
}

// Question 7
// Create an array of two objects. Each object must have the same three properties (with different values):
 
var StudentList = [
    {
      Name : "Thor Hansen",
      Age : 20,
      likesToStudy : true,
    },
    {
      Firstname : "Eva Maria",
      Age : 26,
      likesToStudy : false,
    }
  ];
  
StudentList.forEach(student => {console.log(student.Age, student.likesToStudy)})


// Question 8
// Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
// Inside the function, log the string "I don't like " together with the argument.
// Call the function and pass in a value of your choice.

function whatIDontlike(theSpice){
    console.log("I don't like " + theSpice);
  }

  whatIDontlike("cinnamon");


// Question 9
// Create a function that accepts two arguments. Inside the function, subtract the second argument from the first and console log the result.

function subtractTwoNumbers(firstValue, secondValue) {
    var sum = secondValue - firstValue;
    console.log(sum);
}

subtractTwoNumbers(5, 15);

// 10 . 


// Question 10
// Create an empty array. Create a function that accepts one argument. Inside the function, add the argument to the array. Call the function and pass in a value of any type.

var favSportList = [];

function addValueToList(item) {
    favSportList.push(item);
}

addValueToList("jiujitsu");

