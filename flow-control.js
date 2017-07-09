function basicTeenager(age) {
  if (12 < age && age < 19) {
    return "You are a teenager!";
  }
  else return undefined;
}

function teenager(age) {
  if (12 < age && age < 19) {
    return "You are a teenager!";
  }
  else return "You are not a teenager";
}

function ageChecker(age) {
  if (12 >= age) {
    return "You are a kid";
  }
  if (age > 19) {
    return "You are a grownup";
  }
  else return "You are a teenager!";
}

function ternaryTeenager(age) {
return age > 12 && age < 20 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch(age){
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
