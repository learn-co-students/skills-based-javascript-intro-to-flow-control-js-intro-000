function basicTeenager(age) {
  var result;
  switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      result = "You are a teenager!";
      break;
    default:
      ;
  }
  return result;
}

function teenager(age) {
  var teen = basicTeenager(age);
  var result;

  if (teen)
    result = teen;
  else
    result = "You are not a teenager";

  return result;
}

function ageChecker(age) {
  var teen = basicTeenager(age);
  var result;

  if (teen)
    result = teen;
  else if (age <= 12)
    result = "You are a kid";
  else if (age >= 20)
    result = "You are a grownup";

  return result;
}

function ternaryTeenager(age) {
  var teen = basicTeenager(age);
  var result;

  if (teen)
    result = "You are a teenager";
  else
    result = "You are not a teenager";

  return result;
}

function switchAge(age) {
  var teen = basicTeenager(age);
  var result;

  if (teen)
    result = "You are a teenager";
  else
    result = "You have an age";

  return result;
}
