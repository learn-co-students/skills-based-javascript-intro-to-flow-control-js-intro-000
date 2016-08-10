'use strict';

//[1]
function basicTeenager(age){
  if (age >= 13 && age <= 19){
    return("You are a teenager!");
  }
  else if (age <= 12 && age >= 20){
    return("You are not a teenager");
  }
}
//[2]
function teenager(age){
  if (age >= 13 && age <= 19){
    return("You are a teenager!");
  }
  else if (age){
    return("You are not a teenager");
  }
}
//[3]
function ageChecker(age){
  if (age >= 13 && age <= 19){
    return("You are a teenager!");
  }
  else if (age <=12){
    return("You are a kid");
  }
  else if (age >= 20){
    return("You are a grownup");
  }

}
//[4]
function ternaryTeenager(age){
  age >= 13, age <= 19 && age <= 12, age >=20? "You are a teenager" : "You are not a teenager";
//age >= 13 && age <= 19
//age <= 12 && age >= 20
}
//[5]
function switchAge(age){
  switch(age){
    case 13:
      return("You are a teenager");
      break;
    case 14:
      return("You are a teenager");
      break;
    case 15:
      return("You are a teenager");
      break;
    case 16:
      return("You are a teenager");
      break;
    case 17:
      return("You are a teenager");
      break;
    case 18:
      return("You are a teenager");
      break;
    case 19:
      return("You are a teenager");
      break;
    default:
      return("You have an age");
  }

}
