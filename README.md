# JavaScript Flow Control

## Objectives
+ Write `if` statements in JS
+ Write `if`-`else if`-`else` statements in JS
+ Use the ternary operator in JS
+ Write `switch` statements in JS

## About

Flow Control allows the execution of code only under certain conditions.

JavaScript has similar methods to control what blocks of code to execute: `if` statements, `if`-`else` statements, `if`-`else if`-`else` statements, ternary operators, and `switch` statements.

You'll be writing your code in `flow-control.js`. Make sure to run the tests using `learn`.

## `if` Statements

`if` statements look like this:

``` javascript
if (something) {
  // do something
}
```

They work as the name implies: _if_ `something` is _truthy_ (so the boolean `true` or anything other than the empty string (`''`), `0`, `null`, or `undefined`), the code in between the curly braces runs; if not, the code between the curly braces is skipped.

Now, in `flow-control.js` let's write a function called `basicTeenager` that accepts an age as a parameter. The function should contain an if-statement that checks to see if the age is a teenager. If the age is between 13 and 19, return `"You are a teenager!"`

## `if`-`else` Statements

You will often see an `if` statement used in combination with an  `else` clause. An `else` clause will only get executed if the previous `if` statement is falsey.

Syntax:

```javascript
if (conditionToTest) {
  // executed if `conditionToTest` is truthy
} else {
  // executed if `conditionToTest` is falsey
}
```

+ Define a function `teenager` that accepts an age as a parameter. If the age is between 13 and 19 it should return `"You are a teenager!"`. Otherwise, the function should return `"You are not a teenager"`.

## `if`/`else if` Statements

`if` statements can also be combined with an `else if` clause. This is like an `else` statement, but with its own condition. It will only run if its condition is true, and the previous statement's condition was false.

```javascript
if (conditionToTest1`){
    // condition is false hence code is not executed
} else if (conditionToTest2) {
  // execute this code if `conditionToTest1`statement is falsey AND `conditionToTest2` is truthy
}
```

You can optionally add a final `else` statement after all of your `else if` statements. You can probably guess what will happen: if _all of the other statements_ are falsey, this final `else` block will execute; otherwise, an earlier statement executes and the `else` block is skipped.

``` javascript
if (conditionToTest1`){
    // condition is false hence code is not executed
} else if (conditionToTest2) {
  // execute this code if `conditionToTest1`statement is falsey AND `conditionToTest2` is truthy
} else {
  // execute this code iff none of the other conditions are met
}
```


+ Define a function `ageChecker` that takes in an age as a parameter. If the age is between 13-19 it should return `"You are a teenager!"`. If the age is 12 or below, it should return `"You are a kid"`. If the age is above 19, it should return `"You are a grownup"`

## Ternary Operator

Remember the ternary operator? You can think of it as a shortcut for the `if-else` statement.

This operator tests a condition; if the condition is truthy, it evaluates the left-hand side of the colon; otherwise it evaluates the right-hand side of the colon.

Syntax:

```javascript
conditionToTest ? valueToBeReturnedIfTrue : valueToBeReturnedIfFalse
```

+ Define a function `ternaryTeenager` that accepts age as a parameter. The body of the function should use the ternary operator to return `"You are a teenager"` if age is between 13-19 and returns `"You are not a teenager"` if the age is anything else.


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
var mood = "hungry"
switch(mood){
  case "happy":
    console.log("Dance to Pharrel's Happy");
    break;
  case "sad":
    console.log("You should eat a pint of icecream");
    break;
  case "anxious":
    console.log("Take some deep breaths");
    break;
  case "hungry":
    console.log("You should eat a big chocolate cake");
    break;
  default:
    console.log("That's not a mood we support");
}
```

In the example above, we'll see `"You should eat a big chocolate cake"` printed to the console. If we change the value of the `mood` variable to `sad` you'll see `"You should eat a pint of icecream"`. If the value of `mood` changed to `"grumpy"`, the default statement would trigger and print out `"That's not a mood we support"`.

+ Define a function `switchAge` that accepts an age as a parameter. The case statement should switch on `age` and return `"You are a teenager"` if the age is 13, 14, 15, 16, 17, 18, or 19, and return `"You have an age"` as the default.


## Resources

* [Codecademy - if/if else/if else if else](http://www.codecademy.com/glossary/javascript/if-statement)
* [MDN - if..else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
* [Codecademy - Ternary Operator](http://www.codecademy.com/glossary/javascript/ternary-operator)
* [Codecademy - Switch Statements](http://www.codecademy.com/glossary/javascript/switch-statements)

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/intro-to-flow-control.js'>Intro To Flow Control in JS</a> on Learn.co and start learning to code for free.</p>
