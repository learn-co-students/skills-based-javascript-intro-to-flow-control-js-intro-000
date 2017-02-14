function basicTeenager(age) {
  // flow-control basicTeenager should return "You are a teenager!" if the age is between 13-19
  if(age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  // flow-control teenager should return "You are a teenager!" if the age is between 13-19
  // flow-control teenager should return "You are not a teenager" if the age is not between 13-19
  if(age >= 13 && age <= 19) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  // flow-control ageChecker should return "You are a teenager!" if the age is between 13-19
  // flow-control ageChecker should return "You are a kid" if the age is 12 or below
  // flow-control ageChecker should return "You are a grownup" if the age is 20 or above
  if(age >= 13 && age <= 19) {
    return "You are a teenager!"
  } else if (age <= 12){
    return "You are a kid"
  } else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  // flow-control ternaryTeenager should return "You are a teenager" if age is between 13-19
  // flow-control ternaryTeenager should return "You are not a teenager" if age not between 13-19
  return (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  // flow-control switchAge should return "You are a teenager" if age is between 13-19
  // flow-control switchAge should return "You have an age" if age not between 13-19
  switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return "You are a teenager"
      break;
    default:
      return "You have an age"
  }
}
