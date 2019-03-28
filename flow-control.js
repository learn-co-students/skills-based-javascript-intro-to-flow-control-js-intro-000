function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
   return "You are a teenager!"
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  } else { 
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  } else if (age <= 12) {
    return "You are a kid"
  } else if (age >= 19) {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age <= 19 && age >= 13) {
    case true: 
      return "You are a teenager"
       
      default: 
      return "You have an age"
  }
}
