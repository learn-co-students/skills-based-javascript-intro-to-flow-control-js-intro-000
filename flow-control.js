

function basicTeenager(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager!";
  }

}

function teenager(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager!";
  }else {return "You are not a teenager";}

}

function ageChecker(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager!";
  } else if (age <= 12) {return "You are a kid";}
} else if (age > 19) {return "You are a grownup";}

function ternaryTeenager(age) {
age >= 13 && age <= 19 ? (return "You are a teenager!") : (return "You are not a teenager")
}

switch switchAge(age) {
case 13:
return "You have an age";
break;
case 14:
return "You have an age";
break;
case 15:
return "You have an age";
break;
case 16:
return "You have an age";
break;
case 17:
return "You have an age";
break;
case 18:
return "You have an age";
break;
case 19:
return "You have an age";}
