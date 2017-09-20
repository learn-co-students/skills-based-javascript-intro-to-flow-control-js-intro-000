function basicTeenager(age) {
  if (13 <= age && age <=19) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  //(13 <= age) && (age <= 19) ? "You are a teenager!" : "You are not a teenager"
  if (13 <= age && age <=19) {
    return "You are a teenager!"
  }else {
    return "You are not a teenager"
  }
}

function ageChecker(age) {
  if (13 <= age && age <=19) {
    return "You are a teenager!"
  }else if (age <=12) {
    return "You are a kid"
  }else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  return ((13 <= age) && (age <= 19)) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch (age) {
    case 13:
      break;
    case 14:
      break;
    case 15:
      break;
    case 16:
      break;
    case 17:
      break;
    case 18:
      break;
    case 19:
      break;
    default:
      return "You have an age"
  }
  return "You are a teenager"
}
