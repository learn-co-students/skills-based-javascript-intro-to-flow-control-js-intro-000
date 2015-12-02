# JavaScript Flow Control

## Overview

* About
* If Statements
* If/Else Statements
* If/Else if/Else Statements
* Ternary Operators
* Switch Statements
* Resources

## About

Flow Control allows the execution of code only under certain conditions. In Ruby, we used case statements, if statements, if/else statements, if/elsif/else statements, ternary operators, and case statements to control what code runs when. JavaScript has similar methods to control what blocks of code to execute: if statements, if/else statements, if/else if/else statements, ternary operators, and switch statements.

## If Statements

Evaluates the code wrapped in parenthesis to either true or false. If `true`, the code block is executed: 

Syntax:

```javascript
if (conditionToTestIsTrue) {
  // code to be executed here
}
```

Example:

```javascript
var num = 7;

if (num < 10) {
  console.log(num + " is less than ten");
}

// This will print "7 is less than ten" to the console
```

## If/Else Statements

You will often see an `If` statement used in combination with an  `else` clause. An `else` clause is a fallback to an `if` statement and will only get executed if the previous `if` statement is false.
    
Syntax:

```javascript
if (conditionToTestIsTrue) {
  // condition is false hence code is not executed
} else {
  // code to be executed because previous `if` condition is false
}
```

Example:

```javascript
var num = 11;

if (num < 10) {
  console.log(num + " is less than ten");
} else {
  console.log(num + " is more than or equal to ten");
}

// This will print "11 is more than or equal to ten" to the console
```

## If/Else if/Else Statements

`if` statements can also be combined with an `else if` clause. This is like an else statement, but with its own condition. It will only run if its condition is true, and the previous statement's condition was false. 

Note: An important thing to keep in mind when transitioning to JavaScript from Ruby is that the `elsif` becomes two full words: `else if`.

Syntax:

```javascript
if (conditionToTestIsTrue){
    // condition is false hence code is not executed
} else if (thisConditionIsTrue) {
  // execute this code if previous `if` statement is false
} else {
  // execute this code if the 2 conditions above are false
}
```

Example:

```javascript
var num = 10;

if (num < 10) {
  console.log(num + " is less than ten");
} else if (num == 10) {
  console.log(num + " is equal to ten");
} else {
  console.log(num + " is more than ten");
}

// This will print "10 is equal to ten" to the console
```

## Ternary Operator

The ternary operator is used as a shortcut for the `if-else` statement. You've probably seen it before in Ruby looking something like this:

```ruby
cart = ["graphic t-shirt", "aluminum water bottle"]

puts cart.empty? ? "Please add something to your cart." : "You're ready to check out." 

# Above prints:
# You're ready to check out.
```

This operator tests a condition; if the condition is true, it returns a certain value, otherwise it returns a different value:

Syntax:

```javascript
conditionToTest ? valueToBeReturnedIfTrue : valueToBeReturnedIfFalse
```

Example:

```javascript
var num = 7;
num > 10 ? console.log(num + " is bigger than 10") : console.log(num + " is not bigger than 10");
// this will print "7 is not bigger than 10"
```

## Switch Statements

Switch statements acts like a big if/else if/else chain. The switch expression is evaluated once and the value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed.

Syntax:

```javascript
switch (expression) {
  case n:
      // code to be executed if case n is true
      break; // break out of switch statement once code executed
  case m:
      // code to be executed if case m is true
      break; // break out of switch statement once code executed
  default:  // all other cases
      // code to be executed if case n and case m false
}
```
  
First Example:

```javascript
var diet = "vegetarian";

switch (diet) {
  case "vegetarian":
    console.log("Where do you get your protein? :P ");
  case "gluten free":
    console.log("Wow, that eliminates all the best foods! :( ");
  default:
    console.log("Sounds like you're an omnivore.");
}

// Output:
// Where do you get your protein? :P 
// Wow, that eliminates all the best foods! :( 
// Sounds like you're an omnivore.

// Why????
// Because no breaking statement is found it executes all of the cases after the true case (which is case 1)
```

Second Example:

```javascript
var diet = "vegetarian";

switch (diet) {
  case "vegetarian":
    console.log("Where do you get your protein? :P ");
  case "gluten free":
    console.log("Wow, that eliminates all the best foods! :( ");
    break;
  default:
    console.log("Sounds like you're an omnivore.");
}

// Output:
// Where do you get your protein? :P 
// Wow, that eliminates all the best foods! :( 

// Why????
// Because break statement is found at the second case so execution stops there
```

## Resources

* [Codecademy - if/if else/if else if else](http://www.codecademy.com/glossary/javascript/if-statement)
* [MDN - if..else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
* [Codecademy - Ternary Operator](http://www.codecademy.com/glossary/javascript/ternary-operator)
* [Codecademy - Switch Statements](http://www.codecademy.com/glossary/javascript/switch-statements)

<a href='https://learn.co/lessons/intro-to-flow-control.js' data-visibility='hidden'>View this lesson on Learn.co</a>
