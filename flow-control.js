function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
  return "You are a teenager!"}
}
// if age is between 13 - 19, it says "you are a teenager"
function teenager(age) {
  if (age >= 13 && age <= 19){
  return "You are a teenager!"

  } else {
  return "You are not a teenager"}
  }
// if age is between 13 - 19, it says "you are a teenager"; otherwise it says "you're not a teenager"
function ageChecker(age) {
  if (age < 13) {
  return "You are a kid"

  } else if (age > 19) {
  return "You are a grownup"

  } else {return "You are a teenager!"}
}
// if the age is more than 13, it says "you are a kid"; if the age is more than 19 "youre a grown up"; otherwise "tee"
function ternaryTeenager(age) {return age>= 13 && age <= 19? "You are a teenager": "You are not a teenager"
}
// if it's 13-19, say a, otherwise b

function switchAge(age) {
  switch(age) {
    case (13):
    return "You are a teenager";
    break;
    case (14):
    return "You are a teenager";
    break;
    case (15):
    return "You are a teenager";
    break;
    case (16):
    return "You are a teenager";
    break;
    case (17):
    return "You are a teenager";
    break;
    case (18):
    return "You are a teenager";
    break;
    case (19):
    return "You are a teenager";
    break;
  default:
    return "You have an age";
}
}
