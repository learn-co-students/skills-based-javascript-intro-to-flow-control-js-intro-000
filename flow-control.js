function basicTeenager(age) {
 if (age >= 13 && age <= 19){
 return "You are a teenager!";
 }else{
 return undefined;
 }
}

function teenager(age) {
  if (teenRange(age) == 'teen'){
  return "You are a teenager!";
}else{
  return "You are not a teenager";
}
}

function ageChecker(age) {
  result = "";
switch (teenRange(age)) {
  case 'teen':
    result = "You are a teenager!"
    break;
  case 'child':
    result = "You are a kid"
    break;
  case 'adult':
    result = "You are a grownup"
    break;
  default:
    result =  "I don't know what you are";
    break;
}
 return result;
}

function ternaryTeenager(age) {
return (teenRange(age) == "teen") ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  result = ""
switch (age) {
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
    result = "You are a teenager";
    break;
  default:
    result = "You have an age";
    break;
}
return result;
}

function teenRange(age){
  if (age >= 13 && age <= 19) {
  return "teen";
} else if (age > 19){
  return "adult";
} else if (age < 13)
  return "child";
}
