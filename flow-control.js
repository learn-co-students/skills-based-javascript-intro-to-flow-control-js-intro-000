function basicTeenager(age) {
  let result;
  if(age>=13 && age<=19){
    result = "You are a teenager!";
  }
  return result;
}
console.log(basicTeenager(15));











function teenager(age) {
  let result;
  if(age>=13 && age<=19){
    result = "You are a teenager!";
  }
    else {
      result = "You are not a teenager";
    }
    return result;
  }
  console.log(teenager(15));







function ageChecker(age) {
  let result;
  if(age >=13 && age <=19){
    result = "You are a teenager!";
  }
  else if (age<=12){
    result = "You are a kid";
  }
  else if (age>=20){
    result = "You are a grownup";
  }
return result;
}
console.log(ageChecker(20))




function ternaryTeenager(age) {
  return (age>=13 && age <=19 ? "You are a teenager": "You are not a teenager");
}
console.log(ternaryTeenager(15))











function switchAge(age) {
switch(age) {
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
  return result;
}
