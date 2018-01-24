function basicTeenager(age) {
  if (age >=13 && age <=19) { // analyze if age is between 13 and 19
    return "You are a teenager!" // if true, return "You are a teenager!"
  }
}

function teenager(age) {
  if (age >=13 && age <=19) { // analyze if age is between 13 and 19
    return "You are a teenager!" // if (age >=13 && age <=19) is truthy, return "You are a teenager!"
  } else {
    return "You are not a teenager"
  } // if (age >=13 && age <=19) is falsey, return "You are not a teenager"
}

function ageChecker(age) {
  if (age >=13 && age <=19) { // analyze if age is between 13 and 19
    return "You are a teenager!" // if (age >=13 && age <=19) is truthy, return "You are a teenager!"
  } else if (age <=12) { // analyze if age is 12 or below
    return "You are a kid" // if (age <=12) is truthy, return "You are a kid"
  } else if (age >=20) { // analyze if age is 20 or above
    return "You are a grownup" // if (age >=20) is truthy, return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  if (age >=13 && age <=19) { // analyze if age is between 13 and 19
    return "You are a teenager" // if (age >=13 && age <=19) is truthy, return "You are a teenager"
  } else { // If falsey...
  return "You are not a teenager" // return "You are not a teenager"
  }
}

function switchAge(age) {
switch (age) {
  case 13:
  return "You are a teenager"; // if age is 13, return "You are a teenager" else...
  break;
  case 14:
  return "You are a teenager"; // if age is 14, return "You are a teenager" else...
  break;
  case 15:
  return "You are a teenager"; // if age is 15, return "You are a teenager" else...
  break;
  case 16:
  return "You are a teenager"; // if age is 16, return "You are a teenager" else...
  break;
  case 17:
  return "You are a teenager"; // if age is 17, return "You are a teenager" else...
  break;
  case 18:
  return "You are a teenager"; // if age is 18, return "You are a teenager" else...
  break;
  case 19:
  return "You are a teenager"; // if age is 19, return "You are a teenager" else...
  break; 
  default:
  return "You have an age" // if none of the above tests are true, return "You have an age"
}
}
