function basicTeenager(age) {
  return age > 12 && age < 20 ? "You are a teenager!" : undefined
}

function teenager(age) {
  return age > 12 && age < 20 ? "You are a teenager!" : "You are not a teenager"
}

function ageChecker(age) {
  if (age <= 12) {
    return "You are a kid"
  } else if (age > 12 && age < 20) {
    return "You are a teenager!"
  } else if (age >= 20){
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  return age > 12 && age < 20 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  return age > 12 && age < 20 ? "You are a teenager" : "You have an age"
}
