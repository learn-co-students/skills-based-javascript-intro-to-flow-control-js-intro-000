function basicTeenager (age) {
  if (age >= 13 && age <= 19) {
   return "You are a teenager!"
  }
  // age is equal to 13
    // wants you to check if the ages is between 13 and 19
    // all your strings in all the functions will be returned
}

function teenager (age) {
  if (age >= 13 && age <= 19) {
   return "You are a teenager!"
  }
  else {
   return "You are not a teenager"
  }

  }
 // will need if and else


function ageChecker (age) {
  if (age >= 13 && age <= 19 ) {
  return "You are a teenager!"
  }
  else if (age >= 20){
  return "You are a grownup"
  }
  else if (age >= 12){
  return "You are a kid"
  }
  // will need an if else if and else
}

function ternaryTeenager (age) {
  return (age >= 13 && age <= 19) ? 'You are a teenager' : 'You are not a teenager';
  // you will want to return the ternary statement
  // return condition ? valueIfTrue : valueIfFalse
}

function switchAge (age) {
  switch(age){
  case 13:
    return "You are a teenager"
  case 14:
    return "You are a teenager"
  case 15:
    return "You are a teenager"
  case 16:
    return "You are a teenager"
  case 17:
    return "You are a teenager"
  case 18:
    return "You are a teenager"
  case 19:
    return "You are a teenager"
  default:
    return "You have an age"
  }
  // switch(age) << age is what we are checking
  // each case will be a value of age (can't use age >= 13 && age <= 19).
  // case 13:
  // case 14:
  // with return values you don't need break;
}
