function basicTeenager(age) {
  if (age>=13 && age <=19){ return "You are a teenager!";}
}

function teenager(age) {
  if (age>=13 && age <=19) {  return "You are a teenager!";}
else {  return "You are not a teenager";}
}

function ageChecker(age) {
  if (age>=13 && age <=19) {return "You are a teenager!";}
  else if (age <=12){ return "You are a kid" ;}
  else {return "You are a grownup"; }
  }


function ternaryTeenager(age) {
  return (age >=13 && age <=19) ? "You are a teenager" : "You are not a teenager"
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
  break;
  default:
  return "You have an age";
}
}

basicTeenager(14)
teenager(15)
teenager(21)
ageChecker(17)
ageChecker(11)
ageChecker(50)
ternaryTeenager(14)
ternaryTeenager(90)
switchAge(14)
switchAge(89)
