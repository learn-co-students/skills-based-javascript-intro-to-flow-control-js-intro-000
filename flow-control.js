//basicTeenager

function basicTeenager(age)
{
 if (age >= 13 && age <= 19)
  return "You are a teenager!";
}

//teenager

function teenager(age) {
  if (age>=13 && age<=19) {
       return "You are a teenager!";
    }
  else {
       return "You are not a teenager";
    }
}

//ageChecker
function ageChecker(age) {
  if (age>=13 && age<=19) {
       return "You are a teenager!";
    }
  else if (age<=12) {
       return "You are a kid";
    }
  else {
       return "You are a grownup";
    }
}


//ternaryTeenager
function ternaryTeenager(age) {
  return (age>=13 && age<=19) ? "You are a teenager" : "You are not a teenager"
}

//switchAge

function switchAge (age){
//var age = 15;
 switch (age) {
  case 13:
   return ("You are a teenager");
  break;
  case 14:
  return ("You are a teenager");
  break;
  case 15:
  return ("You are a teenager");
  break;
  case 16:
  return ("You are a teenager");
  break;
  case 17:
  return ("You are a teenager");
  break;
  case 18:
  return ("You are a teenager");
  break;
  case 19:
  return ("You are a teenager");
  break;
  default:
  return ("You have an age");
  }
}
