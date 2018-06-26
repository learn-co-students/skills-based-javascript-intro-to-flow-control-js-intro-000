function basicTeenager(age) {
  if (age < 20 && age > 12) {
    return "You are a teenager!"
}
}

function teenager(age) {
  if (age < 20 && age > 12) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
}
}
//If the age is between 13-19 it should return "You are a teenager!".
//If the age is 12 or below, it should return "You are a kid".
// If the age is above 19, it should return "You are a grownup"
function ageChecker(age) {
  if (age < 20 && age > 12) {
    return "You are a teenager!"
  } else if (age < 13) {
    return "You are a kid"
  } else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  return age < 20 && age > 12 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age) {
    case 13:
      return "You are a teenager";
      break;
    case 14:
      return "You are a teenager";
      break;
    case 15:
      return "You are a teenager";
      break;
    case 16:
      return "You are a teenager";
      break;
    case 17:
      return "You are a teenager";
      break;
    case 18:
      return "You are a teenager";
      break;
    case 19:
      return "You are a teenager";
      break;
    default:
      return "You have an age";
  }
}
