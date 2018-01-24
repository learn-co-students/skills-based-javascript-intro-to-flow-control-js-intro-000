function basicTeenager(age) {
  if (age >= 13 && age <= 19) { // has to be between 13 AND 19 years.
    return "You are a teenager!"// executed if `conditionToTest` is truthy
  }
}

function teenager(age) {
if (age >= 13 && age <= 19) {
  return "You are a teenager!"
}
else {
  return "You are not a teenager"
  // else defaults if the if conditions and else if conditions are false;
}
}

function ageChecker(age) { // we have conditions for age's values of 0-19 20+
if (age >= 13 && age <= 19) {
  return "You are a teenager!"
}
else if (age <= 12) {
  return "You are a kid"
}
else { // else takes no condition - and will automatically run if all the conditions above it are false.
  return "You are a grownup"
}
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager" // condition ? valueIfTrue : valueIfFalse || something to think about: if you were to return 1+1 does it return 1+1 or 2?
}

function switchAge(age) {
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
}
