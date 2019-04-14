function basicTeenager(age) {
  if(age <= 19 && age >= 13){
  return "You are a teenager!";
  }
}

basicTeenager(13);

function teenager(age) {
if(age <= 19 && age >= 13){
  return "You are a teenager!";
  } else {
  return "You are not a teenager";
  }
}

  //  Define a function ageChecker that takes in an age as a parameter.
  //If the age is between 13-19 it should return "You are a teenager!".
  //If the age is 12 or below, it should return "You are a kid".
  //If the age is above 19, it should return "You are a grownup"
function ageChecker(age) {
  if(age <= 19 && age >= 13){
    return "You are a teenager!";
  } else if(age < 13){
    return "You are a kid";
  } else {
    return "You are a grownup";
  }

}


function ternaryTeenager(age){
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager";
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
    default:
        return "You have an age";
  }
}
