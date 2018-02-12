function basicTeenager(age) {
if (age >= 13  && age <= 19 ){
  return "You are a teenager!";
}
else {
    return undefined;
}

}

function teenager(age) {
  if (age >= 13  && age <= 19 ){
    return "You are a teenager!";
  }
  else {
      return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age <= 12){
    return "You are a kid";
  }
  if (age >= 20){
    return "You are a grownup";
  }
  else {
      return teenager(age);
  }
}

function ternaryTeenager(age) {
  if (age >= 13  && age <= 19 ){
    return "You are a teenager";
  }
  else {
      return "You are not a teenager";
  }
}

function switchAge(age) {
  switch(true) {
    case (age >= 13 && age <= 19):
      return "You are a teenager";
    break;
    default:
      return "You have an age";
    }
}
