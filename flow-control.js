function basicTeenager(age) {
  if (teen(age)) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (teen(age)){
    return "You are a teenager!";
  }
  return "You are not a teenager"
}

function ageChecker(age) {
  if (teen(age)){
    return "You are a teenager!";
  } else if (kid(age)) {
    return "You are a kid";
  } else if (adult(age)) {
    return "You are a grownup"
  }
}

function teen(age){
  if (13 <= age && 19 >= age){
    return true;
  }
  return false;
}

function kid(age) {
  if (13 > age) {
    return true;
  }
  return false;
}

function adult(age) {
  if (19 < age) {
    return true;
  }
  return false;
}

function ternaryTeenager(age) {
  return teen(age) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch (teen(age)) {
    case true:
      return "You are a teenager";
    default:
      return "You have an age";
  }
}
