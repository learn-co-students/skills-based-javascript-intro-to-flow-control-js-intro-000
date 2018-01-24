//basicTeenager
function basicTeenager(age) {
if (age >=13 && age <=19){
  return "You are a teenager!";
}
}
// teenager
function teenager(age) {
if (age >=13 && age <=19){
  return "You are a teenager!";
}
else (age <13 && age >19);{
return "You are not a teenager";
}
}

// ageChecker
function ageChecker(age) {
if (age >=13 && age <=19){
  return "You are a teenager!";
  
}
else if (age <=12){
return "You are a kid";

} else (age >19); {
  return "You are a grownup";
}
}

// ternaryTeenager
function ternaryTeenager(age) {
 return age >=13 && age <=19 ? "You are a teenager" : "You are not a teenager"}

// switchAge
function switchAge(age) {
switch(age) {
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
    resultString = "You are a teenager";
    break;
  default:
    resultString = "You have an age";
}
return resultString;
}
