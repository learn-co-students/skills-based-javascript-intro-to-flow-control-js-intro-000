/*
  :( I aleady forgot how to write a function,
  I'll look into the solution and see if I gain more understanding
*/

function basicTeenager(age) { // basicTeenager is the name and age is the variable?
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else if (age < 13) {
    return "You are a kid"; // this value need to be false, isn't it?
  } else {
    return "You are a grownup";
  }
}
/*
The + expected - actual info helps a lot, there were too many typos
and I can fixed it baden on the expected - actual info
*/

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
} // if-else shortcut conditionToTest ? valueToBeReturnedIfTrue : valueToBeReturnedIfFalse

function switchAge(age) {
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
      return "You have an age"
  }
}
