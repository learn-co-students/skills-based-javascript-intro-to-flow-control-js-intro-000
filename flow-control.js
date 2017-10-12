function basicTeenager(age) {
  if (age <= 19 &&  age >= 13)
  return "You are a teenager!"
}

function teenager(age) {
  if (age <= 19 &&  age >= 13)
  return "You are a teenager!"
  else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age <= 19 &&  age >= 13) {
    return "You are a teenager!"
  }
  else if (age <= 12) {
    return "You are a kid"
  }
  else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
return age >= 13 && age <= 19 ? "You are a teenager": "You are not a teenager"
}

function switchAge(age) {
  switch(age) {
  case age = 13:
  return "You are a teenager"
  break;
  case age = 14:
  return "You are a teenager"
  break;
  case age = 15:
  return "You are a teenager"
  break;
  case age = 16:
  return "You are a teenager"
  break;
  case age = 17:
  return "You are a teenager"
  break;
  case age = 18:
  return "You are a teenager"
  break;
  case age = 19:
  return "You are a teenager"
  break;
  default: return "You have an age";
  }
}
