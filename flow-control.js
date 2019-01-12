function basicTeenager(age) {
  var ret;
  if (age >= 13 && age <= 19) {
    ret = "You are a teenager!";
  }
  return ret;
}

function teenager(age) {
  var ret;
  if (age >= 13 && age <= 19) {
    ret = "You are a teenager!";
  } else {
    ret = "You are not a teenager";
  }
  return ret;
}

function ageChecker(age) {
  var ret;
  if (age >= 13 && age <= 19) {
    ret = "You are a teenager!";
  } else if (age < 13) {
    ret = "You are a kid";
  } else {
    ret = "You are a grownup";
  }
  return ret;
}

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  var ret;
  switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      ret = "You are a teenager";
      break;
    default:
      ret = "You have an age";
  }
  return ret;
}
