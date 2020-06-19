function basicTeenager(age) {
  if (age >= 13 && age <= 19){ // if age is greater than or equal to 13 or greater than or equal to 19
return ('You are a teenager!')
  }
}

function teenager(age) {
if (age < 13 || age > 19){  // if age is less than 13 or greater than 19
return ('You are not a teenager')
  } else if (age >= 13 && age <= 19) {
  return ('You are a teenager!')
  }
}

function ageChecker(age){
if (age <= 12){
  return ('You are a kid')
} else if (age >= 20){
return ('You are a grownup')
  } else if (age >= 13 && age <= 19){
  return ('You are a teenager!')
  }
}

function ternaryTeenager(age) {
if (age >= 13 && age <= 19){ // age is greater than or equal to 13 or less than or equal to 19
  return ('You are a teenager')
} else { // if not than you are not a teenager
  return ('You are not a teenager')
  }
}

function switchAge(age) {
switch(age){
case 13:  // You are a teenager if age is greater than or equal to 13 || age is less than or equal to 19
  return"You are a teenager";
  break;
case 14:
  return"You are a teenager";
  break;
case 15:
  return"You are a teenager";
  break;
case 16:
   return"You are a teenager";
   break;
case 17:
  return"You are a teenager";
  break;
case 18:
  return"You are a a teenager";
  break;
case 19:
    return"You are a teenager";
    break;
  default:
    return'You have an age';
  }
}
