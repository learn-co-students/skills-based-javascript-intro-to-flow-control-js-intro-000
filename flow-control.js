function basicTeenager(age) {
  //check age if is greater to or equal to 13 and age is less then 19
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
  else {
    //return if age is less then 13 or greater then 19
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
  //checks to see if age is equal to or less then 12
  else if (age <= 12) {
    return "You are a kid"
  }
  else {
    //return if age is greater then 19
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age){
    case 13:
      return "You are a teenager"
    case 14:
      return "You are a teenager"
    case 15:
      return "You are a teenager"
    case 16:
      return "You are a teenager"
    case 17:
      return "You are a teenager"
    case 18:
      return "You are a teenager"
    case 19:
      return "You are a teenager"
    default:
      return "You have an age"

  }
}
