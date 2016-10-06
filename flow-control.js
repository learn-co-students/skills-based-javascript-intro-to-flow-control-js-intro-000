function basicTeenager(age) {
  if (age >= 13 && age <= 19) // if equal or between the ages of 13 to 19
  {return "You are a teenager!"}
}

function teenager(age) {
  if (age >= 13 && age <= 19) // if equal or between the ages of 13 to 19
    {return "You are a teenager!"}
  else {return "You are not a teenager"} // if 12 or below, or 20 and older
}

function ageChecker(age) {
  if (age <= 12) {return "You are a kid"} // if equal or below than 12
  else if (age >= 20){return "You are a grownup"} // if equal or greater than 20
  else (age >= 13 && age <= 19) // if equal or between the ages of 13 to 19
    {return "You are a teenager!"}
}

function ternaryTeenager(age) {
return (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
switch (age){
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
  return "You have an age"}
}
