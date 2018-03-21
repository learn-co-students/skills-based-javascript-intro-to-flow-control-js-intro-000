
function basicTeenager(age) {
if (age >= 13 && age <= 19) {
  return "You are a teenager!";
}
}

function teenager(age) {
if (age >= 13 && age <= 19) {
  return "You are a teenager!";
}
else {
  return "You are not a teenager";
}
}


function ageChecker(age) {
if (age >= 13 && age <= 19) {
  return "You are a teenager!";
}
else if (age <= 12) {
  return "You are a kid";
}
else if (age > 20) {
  return "You are a grownup";
}
}

// ternary = shortcut for the if/else statement. It tests a condition and returns 1 value if it's true and another if it's false. FORMULA: condition ? expr 1: expr 2

function ternaryTeenager(age) {
return ((age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager");
}


//switch = https://www.w3schools.com/js/js_switch.asp

function switchAge (age) {
  switch (age) {
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:

return "You are a teenager";
default:
 return "You have an age";
}
}