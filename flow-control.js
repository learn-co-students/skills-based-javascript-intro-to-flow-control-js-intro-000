function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
  return "You are not a teenager";
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
        return "You are a teenager!";
    } else if (age < 13) {
        return "You are a kid";
    } else {
        return "You are a grownup";
    }
}

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager";
}

// Define a function switchAge that accepts an age as a parameter.
// The case statement should switch on age and return "You are a teenager"
// if the age is 13, 14, 15, 16, 17, 18, or 19, and return "You have an age" as the default.

function switchAge(age) {
  switch (age) {
    case 13:
      return "You are a teenager";
    case 14:
      return "You are a teenager";
    case 15:
      return "You are a teenager";
    case 16:
      return "You are a teenager";
    case 17:
      return "You are a teenager";
    case 18:
      return "You are a teenager";
    case 19:
      return "You are a teenager";
    default:
      return "You have an age";
  }
}
