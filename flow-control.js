function basicTeenager(age) {
  if (age >= 13 && age < 20) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age >= 13 && age < 20) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age < 13) {
    return "You are a kid"
  } else if (age >= 13 && age < 20) {
    return "You are a teenager!"
  } else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  return age >= 13 && age < 20 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch (age >= 13 && age < 20) {
    case true:
      return "You are a teenager"
    default:
      return "You have an age"
  }
}

basicTeenager(13)
teenager(13)
ageChecker(13)
ternaryTeenager(13)
switchAge(13)
