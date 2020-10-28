# JavaScript Flow Control

## Objectives
+ Write `if` statements in JS
+ Write `if`-`else if`-`else` statements in JS
+ Use the ternary operator in JS
+ Write `switch` statements in JS

## About

Sometimes, we only want to allow the execution of code under certain conditions.

Think of it this way. When you're driving a car, you can only go through a light **if** the light is green. **Otherwise**, if the light is yellow, you prepare to slow down; and if the light is red, you stop. Notice that we have distinct cases that we want to check for.

In programming, when we check for a statement in this way, we check to see whether the statement is `true` or `false`. JavaScript, being the friendly language that it is, uses `true` and `false` directly to mean exactly what they say.

Now, in `flow-control.js` let's write a function called `basicTeenager` that accepts an age as a parameter. The function should contain an if-statement that checks to see if the age is a teenager. If the age is between 13 and 19, return `"You are a teenager!"`

+ Define a function `teenager` that accepts an age as a parameter. If the age is between 13 and 19 it should return `"You are a teenager!"`. Otherwise, the function should return `"You are not a teenager"`.

+ Define a function `ageChecker` that takes in an age as a parameter. If the age is between 13-19 it should return `"You are a teenager!"`. If the age is 12 or below, it should return `"You are a kid"`. If the age is above 19, it should return `"You are a grownup"`

+ Define a function `ternaryTeenager` that accepts age as a parameter. The body of the function should use the ternary operator to return `"You are a teenager"` if age is between 13-19 and returns `"You are not a teenager"` if the age is anything else.
