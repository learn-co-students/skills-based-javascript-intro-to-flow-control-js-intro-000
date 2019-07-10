function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager!"
  }
  return
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager!"
  }
  else if (age <= 12) {
    return "You are not a teenager"
  }
  else if (age >= 29) {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager!"
  }
  else if (age <= 12) {
    return "You are a kid"
  }
  else if (age >= 29) {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager"
  }
  else if (75) {
  return "You are not a teenager"
  }
}

function switchAge(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager"
  }
  else if (75) {
    return "You have an age"
  }
  else if (7) {
    return "You have an age"
  }
}
