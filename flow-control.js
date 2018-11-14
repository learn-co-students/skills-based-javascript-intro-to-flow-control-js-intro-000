function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
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
  } else if (age <= 12) {
    return "You are a kid"
  } else (19 < age) {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
  if (13 <= age && age <= 19) {
    return "You are a teenager"
  }

  return "You are not a teenager"
}

function switchAge(age) {
  case age = 13, 14, 15, 16, 17, 18, 19:
    console.log("You are a teeneger");
    break;
  default:
    console.log("You have an age")
}
