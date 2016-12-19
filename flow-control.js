function basicTeenager(age) {
  if (age >= 13 && age<=19) {
    return "You are a teenager!";
  }
  return;
}

function teenager(age) {
  return basicTeenager(age) || 'You are not a teenager';
}

function ageChecker(age) {
  if (age <= 12) {
    return "You are a kid";
  } else if (age >= 20) {
    return "You are a grownup";
  }
  return teenager(age);
}

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  var isTeenager = (age >= 13 && age <= 19);
  switch (isTeenager) {
    case true:
      return "You are a teenager";
      break;
    default:
      return "You have an age";
  }
}
