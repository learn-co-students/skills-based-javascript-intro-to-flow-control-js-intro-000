function basicTeenager(age) {
  // age is more than 12 but less than 20
  if (age  > 12 && age < 20) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!"
  } else {
    return 'You are not a teenager'
  }
}

function ageChecker(age) {
  if (age > 12 && age < 19 ) {
    return "You are a teenager!"
  }
  else if (age < 13) {
    return "You are a kid"
  }
  else if (age > 19) {
    return 'You are a grownup'
  }
}

function ternaryTeenager(age) {
  return age > 12 && age < 20 ? "You are a teenager" : "You are not a teenager"

}

function switchAge(age) {
  switch (age > 12 && age < 20) {
    case true:
      return "You are a teenager";
    case false:
      return "You have an age";
  }
}
