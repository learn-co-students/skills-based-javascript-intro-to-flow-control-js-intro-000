function basicTeenager(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age > 12 && age < 20) {
    return "You are a teenager!"
  }
  else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  result = teenager(age)

  if(result == "You are a teenager!") {
    return result
  }
  else if (age < 13) {
    return "You are a kid"
  }
  else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  return 13 < age && age < 19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  result = teenager(age)

  switch(result) {
    case "You are a teenager!":
      return "You are a teenager"
    default:
      return "You have an age"
  }
}
