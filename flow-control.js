function isTeenager(age) {
  return age >= 13 && age <= 19;
}

function basicTeenager(age) {
  if (isTeenager(age)) return "You are a teenager!";
}

function teenager(age) {
  if (isTeenager(age)) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age){
  if (isTeenager(age)) {
    return "You are a teenager!";
  } else if (age < 13) {
    return "You are a kid";
  }
  return "You are a grownup";
}

function ternaryTeenager(age){
  return isTeenager(age) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age){
  switch (isTeenager(age)) {
    case true:
      return "You are a teenager";
      break;
    default:
      return "You have an age";
  }
}
