function basicTeenager(age) {
var ifSo = "You are a teenager!";
if (age >= 13 && age <= 19) {
return ifSo;
}else{
return undefined;
  }
}

function teenager(age) {
var ifSo = "You are a teenager!";
var ifNot = "You are not a teenager";
if (age >= 13 && age <= 19) {
return ifSo;
}else{
return ifNot;
  }
}

function ageChecker(age) {
var ifSo = "You are a teenager!";
var ifNot = "You are a kid";
var ifNeithr = "You are a grownup";
if(age >= 13 && age <= 19) {
return ifSo; }
else if(age <= 12) {
return ifNot; }
else{
return ifNeithr; }
}

function ternaryTeenager(age) {
var ifSo = "You are a teenager";
var ifNot = "You are not a teenager";
return age >= 13 && age <= 19 ? "You are a teenager": "You are not a teenager"
}

function switchAge(age) {
var ifSo = "You are a teenager";
var soSo = "You have an age";
switch(age) {
  case 13:
  return ifSo;
  break;
  case 14:
  return ifSo;
  case 15:
  return ifSo;
  case 15:
  return ifSo;
  case 16:
  return ifSo;
  case 17:
  return ifSo;
  case 18:
  return ifSo;
  case 19:
  return ifSo;
  default:
  return soSo;
  }
}
