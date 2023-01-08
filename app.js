// var petDog = "Rex";
// var petCat = "Pepper";

// console.log(petDog)
// console.log(petCat)

// console.log("My pet cat's name is", petCat)
// console.log("My pet dog's name is", petDog)

// var catSound = "purr";
// var dogSound = "woof";

// console.log(petDog, "says", dogSound)
// console.log(petCat, "says", catSound)

// catSound = "meow";
// console.log(petCat, "now says", catSound)

// var num1 = 2;
// var num2 = 5;
// var test1 = num1 % 2;
// var test2 = num2 % 2;
// var result1 = test1 == 0;
// var result2 = test2 == 0;

// console.log("Is", num1, "an even number?", result1);
// console.log("Is", num2, "an even number?", result2);

// var now = "Now in ";
// var three = 3;
// var d = "D!";
// console.log(now + three + d)

// var counter = 0;
// counter += 5;
// counter += 3;
// console.log(counter)


//IF ELSE STATEMENT
// var studentResult = 50;
// if(studentResult > 40){
//     console.log("You passed! Your score is", studentResult)
// } else{
//     console.log("You passed! Your score is", studentResult)
// }

// var age = 10;
// if(age >= 65){
//     console.log("You get your income from your pension.");
// } else if(age<65 && age>= 18){
//     console.log("Each month you get a salary.")
// } else if(age<18){
//     console.log("You get an allowance.")
// } else{
//     console.log("The value of the age is not numerical")
// }

// SWITCH STATEMENT
// var light = "green";
// switch(light){
//     case  "green":
//         console.log("Drive")
//         break;
//     case "orange":
//         console.log("Get ready")
//         break;
//     case "red":
//         console.log("Don't drive")
//         break;
//     default:
//         console.log("The light is not green")
//         break;
// }

// var day = "Sunday";
// switch(day){
//     case 'Monday':
//         console.log("Do something")
//         break;
//     case 'Tuesday':
//         console.log("Do something")
//         break;
//     case 'Wednesday':
//         console.log("Do something")
//         break;
//     case 'Thursday':
//         console.log("Do something")
//         break;
//     case 'Friday':
//         console.log("Do something")
//         break;
//     case 'Saturday':
//         console.log("Do something")
//         break;
//     case 'Sunday':
//         console.log("Do something")
//         break;
//     default:
//         break;

// }

// FOR LOOPS

// for(i=1; i<=5; i++){
//     console.log(i);
// }
// console.log("Counting completed!");


// for(i=5; i>=1; i--){
//     console.log(i);
// }
// console.log("Countdown finished!");

// WHILE LOOPS
// var counter = 1;

// while(counter<=5){
//     console.log(counter);
//     counter ++
// }
// console.log("Counting completed!")

// var counter = 5;

// while(counter >= 1){
//     console.log(counter);
//     counter --
// }
// console.log("Countdown finished!")

// var year = 2018

// while(year <= 2022){
//     console.log(year);
//     year ++
// }

// for(var i=1; i<10; i++){
//     if (i==1){
//         console.log("Gold medal");
//     } else if(i==2){
//         console.log("Silver medal");
//     } else if(i==3){
//         console.log("Bronze medal");
//     } else{
//         console.log(i)
//     }
// }

// for(var i=1; i<10; i++){
//     switch(i){
//         case '1':
//             console.log("Gold medal")
//             break;
//         case '2':
//             console.log("Silver medal")
//             break;
//         case '3':
//             console.log("Bronze medal")
//             break;
//         default:
//             console.log(i);
//             break;
//     }
// }

// FUNCTIONS
// function addTwoNumbers(){
//     var a = 10;
//     var b = 25;
//     var c = a + b;
//     console.log(c)
// }
// addTwoNumbers();

// function addTwoNumbers(a,b){
//     var c = a + b;
//     console.log(c)
// }
// addTwoNumbers(20, 10);

// function addItemToString(a, b){
//     var c = "Hello" + a + b;
//     console.log(c);
// }
// addItemToString(" Jerry", " I'm five!");


// ARRAYS
// var foodItems = ["rice", "beans", "cassava", "yam", "potates"]
// foodItems.push("millet");
// console.log(foodItems);
// foodItems.splice(2,3)
// console.log(foodItems);

// function listArrayItems(arr){
//     for(var i =0; i<arr.length; i++){
//         if(arr[i] == 'green'){
//             console.log(i*100, "tomato");
//         }else{
//             console.log(i+1, arr[i]);
//         }
        
//     }
// }
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
// listArrayItems(colors);

// function letterFinder(word, match){
//     for(var i=0; i<word.length; i++){
//         if(word[i] == match){
//             console.log("Found the", match, "at", i);
//         } else{
//             console.log("___No match found at", i);
//         }
//     }
// }
// letterFinder("test", "t");

// JAVASCRIPT OBJECTS
// var aiesecMembers = {};
// aiesecMembers.John = "nice";
// console.log(aiesecMembers);

// var ball = {
//     Height: 20,
//     Width: 30,
//     Name: "Elclassico",
//     bestFeature: "Classy"
// };

// console.log(ball.Width);

// var arrOfKeys = ['speed', 'altitude', 'color'];
// var drone = {
//     speed: 100,
//     altitude: 200,
//     color: "red"
// }

// for (var i = 0; i < arrOfKeys.length; i++) {
//     console.log(drone[arrOfKeys[i]]);
// }

// var randomNumber = Math.random() * 10;
// var numberWanted = Math.ceil(randomNumber);
// console.log(numberWanted);

// To read each individual character at a specific 
// index in a string, starting from zero, I can use the
// charAt() method:  
// var greet = "Hi John";
// console.log(greet.charAt(3));

// How to separate a string into an array list
// var practice = "List of items";
// console.log(practice.split(" "));


// var clothes = [];
// clothes.push("Hoodies");
// clothes.push("Shorts");
// clothes.push("Joggers");
// clothes.push("Sweats");
// clothes.push("Glasses");
// clothes.pop()
// clothes.push("Jeans");
// console.log(clothes);

// var favCar = {};
// favCar.color = "blue";
// favCar.convertible = false;
// console.log(favCar);

// var car = {};
// car.color = "Beige";
// car.type = "Toyota";
// car.lightOn = function(){
//     console.log("The lights are on!");
// }
// console.log(car);
// car.lightOn();

// To know what type of data your variable is:
// var test = typeof(10)
// console.log(test);

// To get errors to not end your code you can use the try catch

// try {
//     console.log(a+b);
// } catch (error) {
//     console.log(error);
//     console.log("Boohoo I'm still running");
// }

// To force an error I can use the throw error syntax
// throw new ReferenceError()


// function addTwoNums(a,b){
//     try {
//         if(typeof(a) != 'number'){
//             throw new ReferenceError("the first argument is not a number");
//         } else if (typeof(b) != 'number'){
//             throw new ReferenceError("the second argument is not a number");
//         } else{
//             console.log(a+b);
//         } 
//     } catch (err) {
//         console.log("Error!", err);
//     }   
// }
// addTwoNums(5,"5");
// console.log("It still works!");

// Functional Programming
// var currencyOne = 1;
// var currencyTwo;
// var exchangeRate = 725;

// function exchangeConversion(amount, rate){
//     return amount * rate;
// }

// currencyTwo = exchangeConversion(currencyOne,exchangeRate);
// console.log(currencyTwo);

//OOP functions (models)
// var virtualPet = {
//     sleepy: true,
//     nap: function(){
//         this.sleepy = false;
//     }
// }
// virtualPet.nap();
// console.log(virtualPet.sleepy);

// OBJECT ORIENTED PROGRAMMING
// Use 'this' in a method when referring to the object instance to avoid having to repeat codes


// class Train{
//     // Create a constructor function
//     constructor(color, lightsOn){
//         // the 'this' is the future object instance of the Train class
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }

//     toggleLights(){
//         this.lightsOn = !this.lightsOn;
//     }
//     lightsStatus(){
//         console.log("Lights on?", this.lightsOn);
//     }
//     getSelf(){
//         console.log(this);
//     }
//     getProtoype(){
//         var proto = Object.getPrototypeOf(this)
//         console.log(proto);
//     }
// }

// // var myFirstTrain = new Train("blue", false);
// // myFirstTrain.toggleLights();
// // myFirstTrain.lightsStatus();
// // myFirstTrain.getSelf();
// // myFirstTrain.getProtoype();


// // var mySecondTrain = new Train("red", true);
// // console.log(mySecondTrain);


// // Here HighSpeedTrain inherits from the Train class. SO we say HighSpeed Train extends the Train class
// class HighSpeedTrain extends Train{
//     constructor(passengers, highSpeedOn, color, lightsOn){
//         // 'super' is used because those properties are gotten from a higher class i.e our Train class
//         super(color, lightsOn);
//         this.passengers = passengers;
//         this.highSpeedOn = highSpeedOn;    
//     }
//     toggleHighSpeed(){
//         this.highSpeedOn = !TouchList.highSpeedOn;
//         console.log("High Speed Status:", this.highSpeedOn);
//     }
//     toggleLights(){
//         super.toggleLights();
//         super.lightsStatus();
//         console.log("Lights are 100% operational");
//     }
// }

// var train3 = new Train("blue", true);
// var highSpeed1 = new HighSpeedTrain(200, false, "orange", false);

// train3.toggleLights();
// train3.lightsStatus();
// highSpeed1.toggleLights();

// // Task 1: Code a Person class
// class Person {
//     constructor(name = "Tom", age = 20, energy = 100) {
//         this.name = name;
//         this.age = age;
//         this.energy = energy;
//     }
//     sleep() {
//         this.energy += 10;
//     }
//     doSomethingFun() {
//         this.energy -= 10;
//     }
// }

// // Task 2: Code a Worker class
// class Worker extends Person{
//     constructor(name, age, energy, xp = 0, hourlyWage = 10) {
//         super(name, age, energy,);
//         this.xp = xp;
//         this.hourlyWage = hourlyWage;
//     }
//     goToWork() {
//         this.xp += 10;
//     }
// }

// // Task 3: Code an intern object, run methods
// function intern() {
//     var intern = new Worker("Bob", 21, 110, 0, 10);
//     intern.goToWork();
//     return intern;
// }

// // Task 4: Code a manager object, methods
// function manager() {
//     var manager = new Worker("Alice", 30, 120, 100, 30);
//     manager.doSomethingFun();
//     return manager;
// }

// When a property doesn't exist within a scope it is undefined and not null

// Using for of loop
// var clothingItem = {
//     price: 50,
//     color: 'beige',
//     material: 'cotton',
//     season: 'autumn'
// }

// for( key of Object.keys(clothingItem) ) {
//     // We use object.keys to get the key value of an object. That is similar to object name[0] in python
//     console.log(key, ":", clothingItem[key])
//     // clothingItem[key] would give the value for each key 
//     // The for of loop is similar to for in loop in python
// }


// Template literals
// in JS6 we can use back ticks as strings instead of quotation marks
// This is: ``. It can serve as tripe quotations as that in python. And it allows for easier concactination. Eg
// let greet = "Hello";
// let place = "World";
// console.log(`${greet} ${place} !`)

// Here, we use ${} to fill in the variables to be concactinated and the `` is the placeholder

// // Task 1
// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
// function logDairy() {
//     for (var items of Object.keys(dairy)) {
//         console.log(dairy[items]);
//     }
// }
// logDairy();
// // Task 2
// const animal = {
//     canJump: true
// };
// const bird = Object.create(animal);
// bird.canFly = true;
// bird.hasFeathers = true;

// function birdCan() {
//     for (var feature of Object.keys(bird)) {
//         console.log(`${feature}: ${bird[feature]}`);
//     }
// }
// birdCan();

// // Task 3
// function animalCan() {
//     for (const prop in bird) {
//         console.log(`${prop}: ${bird[prop]}`);
//     }
// }
// animalCan();

// MAPS are used to transfer data from one array into another

// var array1 = [0,10,20,30,40,50];
// array1.map(function(num){
//     return num *10
// })

// FILTER is used to filter an array based on some tests
// const array2 = [0,1,2,3,4,5,6,7,8,9];
// var newArray = array2.filter(function(num){
//     return num >= 5;
// })

// FOR EACH as the name implies does something to an array for each item on it
// const fruits = ['kiwi','mango','apple','pear'];
// // function appendIndex(fruit, index){
// //     console.log(`${index}: ${fruit}`);
// // }
// // fruits.forEach(appendIndex);

// fruits.forEach(function(fruit,index){
//     console.log(`${fruit}`)
// })


// JAVASCRIPT TESTINB LIBRARY includes: Jasmine, Mocha, Karma, qUnit, JEST

// Mocking allows you to separate the code you're testing from other dependencies. We use it to make the unit testing stand alone

// Snapshot testing is used by developers to verify that there are no regressions in the DOM of our apps after some changes to the code base are made

// To use JEST, we run on the terminal after ensuring we initialize npm: npm install --save-dev jest
