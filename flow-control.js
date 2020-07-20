function basicTeenager(age) {
if (age <=19 && age >=13) {
  return "You are a teenager!" }
}

function teenager(age) {
  if (age <=19 && age >=13) {
    return "You are a teenager!"
  } else if (age >19 || age <13) {
      return "You are not a teenager" }
}

function ageChecker(age) {
  if (age <=19 && age >=13) {
    return "You are a teenager!"
  } else if (age >19) {
    return "You are a grownup"
  } else if (age <13) {
    return "You are a kid" }
}

function ternaryTeenager(age) {
return (age <=19 && age >=13) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
switch (age)
case 13: // age=13
return "You are a teenager"; // code to be executed if case 13 is true
break;
case 14: // age=14
return "You are a teenager"; // code to be executed if case 14 is true
break;
case 15: // age=15
return "You are a teenager"; // code to be executed if case 15 is true
break;
case 16: // age=16
return "You are a teenager"; // code to be executed if case 16 is true
break;
case 17: // age=17
return "You are a teenager"; // code to be executed if case 17 is true
break;
case 18: // age=18
return "You are a teenager"; // code to be executed if case 18 is true
break;
case 19: // age=19
return "You are a teenager"; // code to be executed if case 19 is true
break;
default: // all other cases
return "You have an age"; // code to be executed if all cases are false
}
