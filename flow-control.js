function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  }
}
basicTeenager(16);
basicTeenager(40);

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}
teenager(14);
teenager(9);

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  } else if (age <= 12) {
    return "You are a kid"
  } else if (age > 19) {
    return "You are a grownup"
  }
}
ageChecker(15);
ageChecker(4);
ageChecker(45);

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager"
}
ternaryTeenager(14);
ternaryTeenager(40);

var age = 0;
function switchAge(age) {
  switch (age) {
    case 13:
      return "You are a teenager"
      break;

    case 14:
      return "You are a teenager"
      break;

    case 15:
      return "You are a teenager"
      break;

    case 16:
      return "You are a teenager"
      break;

    case 17:
      return "You are a teenager"
      break;

    case 18:
      return "You are a teenager"
      break;

    case 19:
      return "You're a teenager"
      break;

    default:
      return "You have an age"
  }
}
switchAge(15);
switchAge(50);
