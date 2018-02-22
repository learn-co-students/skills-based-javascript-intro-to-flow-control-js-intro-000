function basicTeenager(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager!";
  }

};

function teenager(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }

}
/* This function will check to see if someon is between 13 and 19.
If not, it will check to see if they are under 13. If this is false, then
the only option is that they are over 19. */

function ageChecker(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager!";
  } else if (age < 13){
    return "You are a kid";
  } else {
    return "You are a grownup";
  }

};

/* return conditionToTest ? valueToBeReturned :
valueToBeReturnedIfFalse */

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager"
  : "You are not a teenager";

};

function switchAge(age) {
  switch (age) {
    case 13:
    return "You are a teenager";
    break;
    case 14:
    return "You are a teenager";
    break;
    case 15:
    return "You are a teenager";
    break;
    case 16:
    return "You are a teenager";
    break;
    case 17:
    return "You are a teenager";
    break;
    case 18:
    return "You are a teenager";
    break;
    case 19:
    return "You are a teenager";
    break;
    default:
    return "You have an age";
  }

}
