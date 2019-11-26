function basicTeenager(age) {
  if (13 <= age && age <= 19) {
  return "You are a teenager!"
}
}

function teenager(age) {
  if (13 <= age && age <= 19) {
return "You are a teenager!"
 } else {
   return "You are not a teenager"
 }
}

function ageChecker(age) {
  if (13 <= age && age <= 19) {
  return "You are a teenager!"
} else if (13 > age) {
    return "You are a kid"
  } else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
    return (13 <= age && age <= 19) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {

    switch (true) {
      case (age < 13):
          return "You have an age"
      case (age > 19):
          return "You have an age"
      default:
          return "You are a teenager"
        }
}
