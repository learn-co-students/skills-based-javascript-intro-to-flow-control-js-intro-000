function basicTeenager(age) {
    if(age > 12 && age < 20)
    return "You are a teenager!";
    if(age < 13 && age > 19)
    return undefined;
}

function teenager(age) {
    if(age > 12 && age < 20)
    return "You are a teenager!";
    else
    return "You are not a teenager";
}

function ageChecker(age) {
  if(age > 12 && age < 20)
  return "You are a teenager!";
  else if(age < 13)
  return "You are a kid";
  else if(age > 19)
  return "You are a grownup";
}

function switchAge(age) {
var string;
  switch(age){
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      string = "You are a teenager";
      break;
    default:
      string = "You have an age";
  }
  return string;
}


function ternaryTeenager(age) {
  return (age < 13 || age > 19) ? "You are not a teenager" : "You are a teenager";
  }
