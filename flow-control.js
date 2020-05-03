function basicTeenager(age) {
  if(13 <= age && age <= 19){
    return "You are a teenager!";
  }
}

function teenager(age) {
  var result = "";
  if(13 <= age && age <= 19){
    result = "You are a teenager!";
  } else {
    result = "You are not a teenager";
  }
  return result;
}

function ageChecker(age) {
  var result = "";
  if (age <= 12){
    result = "You are a kid";
  } else if(13 <= age && age <= 19){
    result = "You are a teenager!";
  } else {
    result = "You are a grownup";
  }
  return result;
}

function ternaryTeenager(age) {
  return 13 < age && age < 19 ? "You are a teenager":"You are not a teenager";
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
