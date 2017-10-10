function basicTeenager(age) {
if age >= 13 && age < 20 {
  return "You are a teenager"
}
}

function teenager(age) {
  if age >= 13 && age < 20 {
    return "You are a teenager"
} else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
if age < 13 {
  return "You are a kid"
} else if age < 20 {
  return "You are a teenager!"
} else {
  return "You are a grownup"
}
}

function ternaryTeenager(age) {
return age < 20 && age > 12 ? "You are a teenager!" : "You are not a teenager"

}

function switchAge(age) {
switch(age) {
  case age < 20 && age >=13:
    return "You are a teenager!"
    break;

  default:
    return "You have an age"
    break;
}
}
