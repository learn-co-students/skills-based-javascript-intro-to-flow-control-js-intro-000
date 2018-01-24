function basicTeenager(age) {
  if(age > 12 && age < 20) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if(age < 13 || age > 19) {
    return "You are not a teenager"
  }
  return "You are a teenager!"
}

function ageChecker(age) {
  if(age < 13) {
    return "You are a kid"
  }
  if (age > 19) {
    return "You are a grownup"
  }
  return "You are a teenager!"
}

function ternaryTeenager(age) {
  if(age < 13 || age > 19) {
    return "You are not a teenager"
  }
  return "You are a teenager"
}

function switchAge(age) {
  if(age > 12 && age < 20) {
    return "You are a teenager"
  }
  return "You have an age"
}
