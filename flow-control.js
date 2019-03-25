function basicTeenager(age) {
  // learning if-elseif-then
  if (age > 12 && age < 20) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  // learning if-else
  if (age > 12 && age < 20) {
    return "You are a teenager!";
  } else  {
    return "You are not a teenager!";
  }
}

function ageChecker(age) {
  // learning if-elseif-then
  if (age > 12 && age < 20) {
    return "You are a teenager!";
  } else if (age < 13) {
    return "You are a kid!";
  } else {
    return "You are a grownup!";
  }
}

function ternaryTeenager(age) {
  // learning ternary-operator
  return age > 12 && age < 20 ? "You are a teenager!" : "You are not a teenager!"
}

function switchAge(age) {
  // learning switch-case
  switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return  "You are a teenager!"
    default:
        return  "You have an age!"
  }
}
