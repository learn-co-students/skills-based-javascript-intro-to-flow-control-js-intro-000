# JavaScript Flow Control

## Overview

* About
* If Statements
* If/Else Statements
* If/Else if/Else Statements
* Ternary Operators
* Switch Statments
* Resources

## About

Flow Control allows the excution of code only under certain conditions.

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
  // codition is false hence code is not executed
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

Syntax:

```javascript
if (conditionToTestIsTrue){
    // codition is false hence code is not executed
} else if (thisCondionIsTrue) {
  // excute this code if previous `if` statement is false
} else {
  // excute this code if the 2 conditions above are false
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

The ternary operator is used as a shortcut for the `if-else` statement. This operator tests a condition; if the condition is true, it returns a certain value, otherwise it returns a different value:

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
  
Example:

```javascript
// todo
```

## Resources

* []()
