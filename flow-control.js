function basicTeenager(age) {

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
  } else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {
 age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {

  switch (age) {
      case 13:
        "You are a teenager";
        break;
      case 14:
        "You are a teenager";
        break;
      case 15:
        "You are a teenager";
        break;
      case 16:
        "You are a teenager";
        break;
      case 17:
        "You are a teenager";
        break;
      case 18:
        "You are a teenager";
        break;
      case 19:
        "You are a teenager";
        break;
      default:
        "You have an age"
  }

  return;

}
