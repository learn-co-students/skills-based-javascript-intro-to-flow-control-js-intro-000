function basicTeenager(age) {
  if (age >= 13 && age < 20) {
    return ("You are a teenager!");
  } else {
    return(undefined);
  }
}

function teenager(age) {
  if (age >= 13 && age < 20) {
    return ("You are a teenager!");
  } else  {
    return("You are not a teenager");
  }
}

function ageChecker(age) {
  if (age > 0 && age < 13) {
    return ("You are a kid");
  } else if (age >= 13 && age < 20) {
    return("You are a teenager!");
  } else {
    return("You are a grownup")
  }
}

function ternaryTeenager(age) {
var isTeenager = false;
if (age >= 13 && age < 20){
  isTeenager = true;
} else if (age >= 13 && age < 20){
  isTeenager = false;
}

  return( isTeenager ? "You are a teenager" :  "You are not a teenager");


}

function switchAge(age) {
var isTeenager = false;
  if (age >= 13 && age < 20){
    isTeenager = true;
  }

  switch (isTeenager) {
    case true:
      return ("You are a teenager");
      break;
    default:
    return ("You have an age");

  }


}
