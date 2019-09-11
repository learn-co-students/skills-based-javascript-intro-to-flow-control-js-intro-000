function basicTeenager(age) {
  if(age >= 13 && age <= 19) {
    return 'You are a teenager!';
  }
  return undefined;
}

function teenager(age) {
  var result = basicTeenager(age);
  if(result == undefined) {
    result = "You are not a teenager";
  }
  return result;
}

function ageChecker(age) {
  if(age <= 12){
    result = "You are a kid";
  } else if (age >= 20) {
    result = "You are a grownup";
  }
  else {
    result = basicTeenager(age);
  }

  return result;
}

function ternaryTeenager(age) {
  return age >=13 && age <= 19 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch (age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return "You are a teenager";
      break;
    default:
      return "You have an age";

  }
}
