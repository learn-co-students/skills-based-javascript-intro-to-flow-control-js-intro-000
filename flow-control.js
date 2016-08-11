'use strict';



function basicTeenager(age){
if (age >= 13 && age <= 19) {
  return "You are a teenager!";
  }
}
basicTeenager(13);


function teenager(age){
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
  else {
    return "You are not a teenager";
  }
}
teenager(15);

function ageChecker(age){
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
  else if (age <= 12) {
    return "You are a kid";
  }
  else {
    return "You are a grownup";
  }
}
ageChecker(23);


function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ?  "You are a teenager" : "You are not a teenager";
}
ternaryTeenager(14);

function switchAge(age) {
  switch(true) {
        case age >= 13 && age <= 19:
          return "You are a teenager";
            break;
       case age < 13 && age > 19:
         return "You are not a teenager"
          break;
    default:
      return "You have an age";
  }
};
